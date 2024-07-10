import { useEffect, useRef, useState } from "react";

import { Binance, Usdt } from "react-web3-icons";

import { cn } from "@/utils/cn";

import TimeCountdown from "./TimeCountdown";
import { InputWithLabel } from "./InputWithLabel";
import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "sonner";
import {
  getBalance,
  readContract,
  simulateContract,
  waitForTransactionReceipt,
  writeContract,
} from "@wagmi/core";
import { config } from "@/providers/Web3Provider";
import { Address, formatUnits, parseEther, parseUnits } from "viem";
import {
  GEPSPresaleABI,
  busdContractAddress,
  busdTokenAbi,
  presaleContractAddress,
} from "@/config/contract";
import { useAccount } from "wagmi";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type CardProps = React.ComponentProps<typeof Card>;

export function PurchaseCard({ className, ...props }: CardProps) {
  const { isConnected, address } = useAccount();
  const [selectedCrypto, setSelectedCrypto] = useState("BNB");
  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formattedCost, setFormattedCost] = useState<string>("");
  const [amount, setAmount] = useState<string>();
  const [stage, setStage] = useState<string>();
  const [gepsPrice, setGepsPrice] = useState<string>();
  const [soldTokens, setTokensSold] = useState<string>();
  const [targetTime, setTargetTime] = useState<string>();
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const [remainingTokens, setRemainingTokens] = useState<string>("");
  const [userGEPSHoldings, setUserGEPSHoldings] = useState<string>("0");


  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(async () => {
      calculateCost(value);
    }, 500); // Adjust the debounce delay as needed
  };

  useEffect(() => {
    if (selectedCrypto && amount) {
      calculateCost(amount);
    }
  }, [selectedCrypto]);

  useEffect(() => {
    if (isConnected) {
      fetchUserGEPSHoldings();
    }
  }, [isConnected, address]);

  const fetchUserGEPSHoldings = async () => {
    try {
      const holdings: any = await readContract(config, {
        abi: GEPSPresaleABI,
        address: presaleContractAddress,
        functionName: "purchasedGEPSs",
        args: [address],
      });

      const holdingsNumber = parseFloat(formatUnits(holdings, 18)); // Convert to number
      const formattedHoldings = holdingsNumber.toFixed(4); // Convert to string with 4 decimals
      setUserGEPSHoldings(formattedHoldings);
    } catch (error) {
      console.error("Error fetching user GEPS holdings:", error);
    }
  };


  const calculateCost = async (value: string) => {
    if (!value || value === "0") {
      setFormattedCost("");
      return;
    }
    try {
      const amountBigInt = parseUnits(value, 18);

      const cost: any = await readContract(config, {
        abi: GEPSPresaleABI,
        address: presaleContractAddress,
        functionName: "calculateGEPS",
        args: [amountBigInt, selectedCrypto],
      });

      setFormattedCost(formatUnits(cost, 18));
      if (isConnected) {
        checkBalance(value);
      }
    } catch (error) {
      console.error("Error calculating cost:", error);
    }
  };

  const checkBalance = async (cost: string) => {
    if (selectedCrypto === "BUSD") {
      const balance: any = await getBalance(config, {
        address: address as Address,
        token: busdContractAddress,
      });

      if (parseFloat(balance.formatted) < parseFloat(cost)) {
        setInsufficientBalance(true);
      } else {
        setInsufficientBalance(false);
      }
    } else if (selectedCrypto === "BNB") {
      console.log("check");
      const balance: any = await getBalance(config, {
        address: address as Address,
      });
      if (parseFloat(balance.formatted) <= parseFloat(cost)) {
        setInsufficientBalance(true);
      } else {
        setInsufficientBalance(false);
      }
    }
  };

  const formatTokenAmount = (amount: string): string => {
    const value = parseFloat(amount);
    if (value >= 1e9) {
      return (value / 1e9).toFixed(2) + 'B';
    } else if (value >= 1e6) {
      return (value / 1e6).toFixed(2) + 'M';
    } else if (value >= 1e3) {
      return (value / 1e3).toFixed(2) + 'K';
    } else {
      return value.toFixed(2);
    }
  };

  useEffect(() => {
    const fetchStageData = async () => {
      try {
        const currentStage: any = await readContract(config, {
          abi: GEPSPresaleABI,
          address: presaleContractAddress,
          functionName: "currentStage",
        });

        setStage((parseInt(currentStage) + 1).toString());

        const stageData: any = await readContract(config, {
          abi: GEPSPresaleABI,
          address: presaleContractAddress,
          functionName: "stages",
          args: [currentStage],
        });
        setGepsPrice((parseFloat(stageData[0]) / 100).toString());

        const remainingTokens = formatUnits(stageData[1], 18);
        setRemainingTokens(formatTokenAmount(remainingTokens));
        // Calculate sold tokens and format percent to 2 decimals
        let totalTokens;
        if (currentStage == 0) {
          totalTokens = 2222224;
        } else {
          totalTokens = 2222222;
        }

        const soldTokens = totalTokens - parseFloat(remainingTokens);
        const soldTokenPercent = ((soldTokens / totalTokens) * 100).toFixed(2);

        setTokensSold(soldTokenPercent.toString());

        const endTime = parseInt(stageData[3]);
        const date = new Date(endTime * 1000);
        const isoString = date.toISOString();
        console.log(isoString);

        setTargetTime(isoString);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStageData();
  }, []);

  const handleBuyGEPS = async () => {
    if (amount) {
      setIsLoading(true);
      if (selectedCrypto === "BNB") {
        try {
          const etherValue = parseEther(amount);

          const { request } = await simulateContract(config, {
            address: presaleContractAddress,
            abi: GEPSPresaleABI,
            functionName: "buyGEPS",
            args: [parseEther(amount), "BNB"],
            value: etherValue,
          });

          const txhash = await writeContract(config, request);
          const receipt = await waitForTransactionReceipt(config, {
            hash: txhash,
          });
          console.log(
            "GEPS purchased successfully with BNB, Receipt:",
            receipt
          );
          toast.success("GEPS purchased successfully with BNB!");
          setIsLoading(false);
        } catch (error) {
          console.error("Error purchasing GEPS with BNB:", error);
          toast.error("Error purchasing GEPS with BNB");
          setIsLoading(false);
        }
      } else if (selectedCrypto === "BUSD") {
        try {
          const { request: approveRequest } = await simulateContract(config, {
            address: busdContractAddress,
            abi: busdTokenAbi,
            functionName: "approve",
            args: [presaleContractAddress, parseEther(amount)],
          });

          const approveTxhash = await writeContract(config, approveRequest);
          const approveTxReceipt = await waitForTransactionReceipt(config, {
            hash: approveTxhash,
          });

          if (approveTxReceipt) {
            const { request: buyRequest } = await simulateContract(config, {
              address: presaleContractAddress,
              abi: GEPSPresaleABI,
              functionName: "buyGEPS",
              args: [parseEther(amount), "BUSD"],
            });

            const buyTxhash = await writeContract(config, buyRequest);
            const buyTxReceipt = await waitForTransactionReceipt(config, {
              hash: buyTxhash,
            });
            console.log(
              "GEPS purchased successfully with BUSD, Receipt:",
              buyTxReceipt
            );
            toast.success("GEPS purchased successfully with BUSD!");
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error purchasing GEPS with BUSD:", error);
          toast.error("Error purchasing GEPS with BUSD");
          setIsLoading(false);
        }
      }
    } else {
      console.log("check");
      toast.info("Please Enter Amount");
    }
  };

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <div className="text-center items-center">
          <CardTitle>GEPS Token Pre-Sale</CardTitle>
        </div>
        <TimeCountdown targetDate={targetTime!} />
        <div className="space-y-5">
          <div className="flex items-center gap-x-3 whitespace-nowrap">
            <div className="relative flex w-full h-8 outline outline-offset-2 outline-white rounded-full overflow-hidden" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
              <div className="flex flex-col justify-center items-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-green-600" style={{ width: `${soldTokens}%` }}>
                <span className="absolute inset-0 flex items-center justify-center w-full text-white text-sm">{soldTokens}%</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-800 dark:text-white">Remaining: {remainingTokens} (Stage-{stage})</span>
          </div>



        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-lg font-semibold">
            Your GEPS Holdings: {userGEPSHoldings} GEPS
          </div>
        </div>
        <div className=" flex items-center text-center rounded-md border pt-2 pb-2">
          <div className="flex-1 space-y-1">
            <p className="text-md font-medium leading-none">
              Current Price = ${gepsPrice}
              <span className="text-green">(Stage-{stage})</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-8">
          <Toggle
            pressed={selectedCrypto === "BNB"}
            onPressedChange={() => setSelectedCrypto("BNB")}
            aria-label="Toggle BNB"
            variant={selectedCrypto === "BNB" ? "outline" : "default"}
          >
            <span className="mr-2">Binance</span>
            <Binance />
          </Toggle>
          <Toggle
            pressed={selectedCrypto === "BUSD"}
            onPressedChange={() => setSelectedCrypto("BUSD")}
            aria-label="Toggle BUSD"
            variant={selectedCrypto === "BUSD" ? "outline" : "default"}
          >
            <span className="mr-2">BUSD</span>
            <Usdt />
          </Toggle>
        </div>
        <div>
          <div className="py-3 flex items-center text-sm text-green-500 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-green-600 dark:before:border-white dark:after:border-white">
            {formattedCost && (
              <div>
                {amount} {selectedCrypto} ={" "}
                {parseFloat(formattedCost).toFixed(5)} GEPS
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="text"> Enter {selectedCrypto} Amount</Label>
              <Input
                type="text"
                id="cryptoAmount"
                name="cryptoAmount"
                value={amount}
                onChange={handleAmountChange}
                placeholder={"0"}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {!isConnected ? (
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openConnectModal,
              openChainModal,
              openAccountModal,
              mounted,
            }) => {
              return (
                <div
                  {...(!mounted && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!mounted || !account || !chain) {
                      return (
                        <Button
                          onClick={openConnectModal}
                          type="button"
                          className="w-[330px]"
                          variant="outline"
                        >
                          Connect Wallet
                        </Button>
                      );
                    }
                    if (chain.unsupported) {
                      return (
                        <Button
                          onClick={openChainModal}
                          type="button"
                          className="w-[45vh]"
                          variant="outline"
                        >
                          Wrong network
                        </Button>
                      );
                    }
                    return (
                      <Button
                        onClick={openAccountModal}
                        type="button"
                        className="w-[45vh]"
                        variant="outline"
                      >
                        {account.displayName}
                      </Button>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        ) : (
          <Button
            disabled={isLoading || insufficientBalance}
            onClick={handleBuyGEPS}
            className="flex items-center gap-[8px] w-full"
            variant="outline"
          >
            {insufficientBalance ? (
              <div>Insufficient Balance</div>
            ) : (
              <div>Buy GEPS</div>
            )}
            {isLoading && <ClipLoader color="white" size="16px" />}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

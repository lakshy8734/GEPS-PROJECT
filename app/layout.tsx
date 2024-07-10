import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PrelineScript from "@/components/PrelineScript";
import { Web3Providers } from "@/providers/Web3Provider";
import { Toaster } from "sonner";

const nunito = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GEPS: Green Energy Power Station",
  description:
    "Green Energy Power Station(GEPS) token is a revolutionary token that fuels the growth of green energy production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={nunito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Web3Providers>
            {children}
            <Toaster />
          </Web3Providers>
        </ThemeProvider>
      </body>
      <PrelineScript />
    </html>
  );
}

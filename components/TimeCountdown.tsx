import React, { useCallback, useState, useEffect } from "react";

interface TimeCountdownProps {
  targetDate: string;
}

const TimeCountdown: React.FC<TimeCountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const TimeUnit: React.FC<{ value: number; unit: string }> = ({
    value,
    unit,
  }) => (
    <div className="flex flex-col items-center mx-2">
      <div className="text-3xl font-bold border border-white text-white rounded-lg p-3 mb-0 mt-1">
        {formatNumber(value)}
      </div>
      <div className="text-md text-white">{unit}</div>
    </div>
  );

  if (targetDate == "1970-01-01T00:00:00.000Z") {
    return (
      <div className="text-2xl font-bold text-red-600 w-full text-center">
        Presale Not Started!
      </div>
    );
  } else if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    return (
      <div className="text-2xl font-bold text-red-600 w-full text-center">
        {"Time's up!"}
      </div>
    );
  }
  return (
    <div className="timer mb-4">
      <div className="flex justify-center">
        <TimeUnit value={timeLeft.days} unit="Days" />
        <TimeUnit value={timeLeft.hours} unit="Hours" />
        <TimeUnit value={timeLeft.minutes} unit="Minutes" />
        <TimeUnit value={timeLeft.seconds} unit="Seconds" />
      </div>
    </div>
  );
};

export default TimeCountdown;

'use client';

import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from './time-left';

export function Countdown({ date }: { date: string }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-row items-center justify-center">
      <p className="text-md font-semibold text-center">
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{' '}
        minutes, {timeLeft.seconds} seconds
      </p>
    </div>
  );
}

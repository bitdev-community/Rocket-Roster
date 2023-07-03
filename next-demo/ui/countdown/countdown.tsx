'use client';

import React, { useState, useEffect } from 'react';

function calculateTimeLeft(date: string) {
  const difference = +new Date(date) - +new Date();
  let timeLeft: {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  } = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

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

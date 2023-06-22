'use client';
import { useState } from 'react';
import { time } from './utils/getTime';

export function TimeComp() {
  const [currentTime, setCurrentTime] = useState('');

  return (
    <div>
      <p>The current time is {currentTime}.</p>
      <button
        onClick={async () => {
          const timeString = await time();
          setCurrentTime(timeString);
        }}
      >
        Get the current time
      </button>
    </div>
  );
}

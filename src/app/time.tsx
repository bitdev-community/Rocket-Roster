'use client';
import { useState } from 'react';
import { Button } from '@ignacioaldama/next-demo.ui.button';
import { time } from './utils/getTime';

export function TimeComp() {
  const [currentTime, setCurrentTime] = useState<null | string>(null);

  return (
    <div className="flex flex-col items-center justify-center py-2 gap-2">
      {!currentTime ? (
        <p>Click the button to get the server time.</p>
      ) : (
        <p>The current server time is {currentTime}.</p>
      )}
      <Button
        onClick={async () => {
          // get the language of the user
          const language = navigator.language;
          const timeString = await time(language);
          setCurrentTime(timeString);
        }}
      >
        Get server time
      </Button>
    </div>
  );
}

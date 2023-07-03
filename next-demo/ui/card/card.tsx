import React from 'react';
import { SingleLaunch } from '@learnbit-react/rocket-roster.modules.launchs-client';
import { Countdown } from '@learnbit-react/rocket-roster.ui.countdown';
import Image from 'next/image';

export type CardProps = {
  launch: SingleLaunch;
  isPreview?: boolean;
};

export function Card({ launch, isPreview }: CardProps) {
  return (
    <article
      key={launch.id}
      className="w-1/4 flex flex-col items-center justify-start m-4 p-4 border border-gray-300 rounded-md"
    >
      <header className="flex flex-col items-center justify-center h-full gap-2">
        <h5
          className="text-xl font-bold text-center"
          style={{ maxWidth: '300px' }}
        >
          {launch.name}
        </h5>
        <div
          className="w-full h-48 relative rounded-md overflow-hidden"
          style={{ maxWidth: '300px' }}
        >
          <Image
            src={launch.image}
            alt={launch.name}
            fill
            unoptimized={isPreview}
          />
        </div>
        <Countdown date={launch.window_start} />
      </header>
      <div className="flex flex-row items-center justify-center">
        <p>
          {new Date(launch.last_updated).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </article>
  );
}

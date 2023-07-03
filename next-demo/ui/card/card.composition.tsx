import React, { useState, useEffect } from 'react';
import { LaunchsClient } from '@learnbit-react/rocket-roster.modules.launchs-client';
import { Card } from './card';

const client = new LaunchsClient();

export const BasicCard = () => {
  const [launch, setLaunch] = useState<any | null>(null);

  useEffect(() => {
    client
      .getUpcomingLaunches({})
      .then((res) => setLaunch(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return <>{launch && <Card launch={launch} isPreview />}</>;
};

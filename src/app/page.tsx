import { client } from './utils/client';
import Link from 'next/link';
import { Card } from '@ignacioaldama/next-demo.ui.card';

export default async function Home() {
  const allLaunches = await client.getUpcomingLaunches({});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mt-8">NextJS Demo</h1>
        <section className="flex flex-col items-center justify-center mt-8">
          <h2 className="text-2xl font-bold text-center">
            Space Rocket upcoming launches
          </h2>
          <div className="flex flex-row flex-wrap items-start justify-center mt-8">
            {allLaunches.results.map((launch) => (
              <Card key={launch.id} launch={launch} />
            ))}
          </div>
        </section>
        <Link
          href="/past"
          className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded"
        >
          View Past Launches
        </Link>
      </div>
    </main>
  );
}

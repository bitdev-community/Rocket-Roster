import { client } from '../utils/client';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const allLaunches = await client.getPreviousLaunches({});

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
                    <Image src={launch.image} alt={launch.name} fill />
                  </div>
                </header>
                <div className="flex flex-row items-center justify-center mt-10">
                  <p>
                    {new Date(launch.last_updated).toLocaleDateString(
                      undefined,
                      {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </p>
                </div>
                <Link
                  href={`/launches/${launch.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  View Launch
                </Link>
              </article>
            ))}
          </div>
        </section>
        <Link
          href="/"
          className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded"
        >
          View Upcoming Launches
        </Link>
      </div>
    </main>
  );
}

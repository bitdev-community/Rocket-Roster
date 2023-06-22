import { Button } from '@ignacioaldama/next-demo.ui.button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mt-8">NextJS Demo</h1>
        <p className="text-xl text-center mt-4">Bit X NextJS</p>
        <hr className="my-8" />
        <Button>Hello World</Button>
      </div>
    </main>
  );
}

import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Blue Prospect Design, LLC.</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Blue Prospect Design
        </h1>

        <p className="mt-3 text-xl w-1/3">
          Our site will be up very soon!  If you are interested in knowing what is happening at this very moment, picture a dude on the side of the road with the hood up, smoke billowing, head scratching.
        </p>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
          Powered by Roger Katona
      </footer>
    </div>
  )
}

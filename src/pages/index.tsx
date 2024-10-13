import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>UI Technologies</title>
        <meta name="description" content="Learn about UI Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to UI Technologies</h1>
          <p className="text-xl">Explore the world of modern user interface development</p>
        </div>
      </div>
    </>
  )
}
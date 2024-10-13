import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold mb-8">404</h1>
        <p className="text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Go back home
        </Link>
      </div>
    </>
  )
}
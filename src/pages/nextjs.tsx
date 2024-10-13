import Head from 'next/head'
import TechnologyTopics from '@/components/TechnologyTopics'

const nextjsTopics = [
  {
    name: 'Pages and Routing',
    path: '/nextjs/pages-and-routing',
    content: 'Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory, it\'s automatically available as a route.',
    questions: [
      'How does routing work in Next.js?',
      'What is the purpose of the pages directory in Next.js?',
      'How do you create dynamic routes in Next.js?'
    ]
  },
  {
    name: 'API Routes',
    path: '/nextjs/api-routes',
    content: 'API routes provide a solution to build your API with Next.js. Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.',
    questions: [
      'What are API routes in Next.js?',
      'How do you create an API route in Next.js?',
      'Can you use API routes with getServerSideProps or getStaticProps?'
    ]
  },
  {
    name: 'Server-Side Rendering',
    path: '/nextjs/server-side-rendering',
    content: 'Next.js allows you to pre-render pages on the server-side. This means that the HTML is generated on the server rather than in the browser.',
    questions: [
      'What is server-side rendering in Next.js?',
      'How do you implement server-side rendering in Next.js?',
      'What is the difference between getServerSideProps and getInitialProps?'
    ]
  },
  {
    name: 'Static Site Generation',
    path: '/nextjs/static-site-generation',
    content: 'Next.js allows you to create statically generated pages. Static generation is the process of pre-rendering pages at build time.',
    questions: [
      'What is static site generation in Next.js?',
      'How do you implement static site generation in Next.js?',
      'What is the difference between getStaticProps and getStaticPaths?'
    ]
  },
  {
    name: 'Data Fetching',
    path: '/nextjs/data-fetching',
    content: 'Next.js provides multiple ways to fetch data for your pages, including server-side rendering, static site generation, and client-side fetching.',
    questions: [
      'What are the different methods of data fetching in Next.js?',
      'When should you use getServerSideProps vs getStaticProps?',
      'How do you fetch data on the client side in Next.js?'
    ]
  },
]

export default function NextJS() {
  return (
    <>
      <Head>
        <title>Next.js - UI Technologies</title>
        <meta name="description" content="Learn about Next.js core topics" />
      </Head>
      <TechnologyTopics technology="Next.js" topics={nextjsTopics} />
    </>
  )
}
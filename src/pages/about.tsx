import Head from 'next/head'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function About() {
  return (
    <>
      <Head>
        <title>About - UI Technologies</title>
        <meta name="description" content="About the developer behind UI Technologies" />
      </Head>
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hello! I'm a passionate full-stack developer with a keen interest in modern UI technologies. 
            I love creating efficient, scalable, and user-friendly web applications. When I'm not coding, 
            you can find me exploring new tech trends, contributing to open-source projects, or enjoying a good book.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Frontend: React, Vue.js, Angular, Svelte</li>
            <li>Backend: Node.js, Express, Django, Ruby on Rails</li>
            <li>Databases: MongoDB, PostgreSQL, MySQL</li>
            <li>DevOps: Docker, Kubernetes, AWS, Google Cloud</li>
            <li>Other: GraphQL, REST APIs, WebSockets</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">UI Technologies Learning Platform</h3>
              <p className="text-gray-700">A comprehensive platform for learning modern UI technologies.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">E-commerce Dashboard</h3>
              <p className="text-gray-700">A responsive dashboard for managing online stores, built with React and Node.js.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Real-time Chat Application</h3>
              <p className="text-gray-700">A scalable chat app using Vue.js, Socket.io, and MongoDB.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Signature</h2>
          <div className="border-t border-gray-300 pt-4">
            <p className="text-gray-700 italic">
              "The only way to do great work is to love what you do." - Steve Jobs
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
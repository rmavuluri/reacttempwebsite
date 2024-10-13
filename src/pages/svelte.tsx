import Head from 'next/head'
import TechnologyTopics from '@/components/TechnologyTopics'

const svelteTopics = [
  {
    name: 'Components',
    path: '/svelte/components',
    content: 'Svelte components are the building blocks of Svelte applications. They are written in .svelte files, which contain HTML, CSS, and JavaScript.',
    questions: [
      'What is a Svelte component?',
      'How do you create a Svelte component?',
      'How do you import and use a component in Svelte?'
    ]
  },
  {
    name: 'Reactivity',
    path: '/svelte/reactivity',
    content: 'Reactivity in Svelte is a system that automatically updates the DOM when your application\'s state changes.',
    questions: [
      'How does reactivity work in Svelte?',
      'What is the purpose of the $: syntax in Svelte?',
      'How do you create derived values in Svelte?'
    ]
  },
  {
    name: 'Props',
    path: '/svelte/props',
    content: 'Props in Svelte are a way to pass data from a parent component to a child component.',
    questions: [
      'How do you define props in a Svelte component?',
      'Can you set default values for props in Svelte?',
      'How do you pass props to a component in Svelte?'
    ]
  },
  {
    name: 'Events',
    path: '/svelte/events',
    content: 'Svelte provides an easy way to handle DOM events and component events.',
    questions: [
      'How do you handle DOM events in Svelte?',
      'What is event forwarding in Svelte?',
      'How do you create custom events in Svelte?'
    ]
  },
  {
    name: 'Stores',
    path: '/svelte/stores',
    content: 'Stores in Svelte are objects that allow you to share reactive data across multiple components.',
    questions: [
      'What are stores in Svelte?',
      'What is the difference between writable, readable, and derived stores?',
      'How do you use stores in Svelte components?'
    ]
  },
]

export default function Svelte() {
  return (
    <>
      <Head>
        <title>Svelte - UI Technologies</title>
        <meta name="description" content="Learn about Svelte core topics" />
      </Head>
      <TechnologyTopics technology="Svelte" topics={svelteTopics} />
    </>
  )
}
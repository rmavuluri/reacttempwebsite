import Head from 'next/head'
import TechnologyTopics from '@/components/TechnologyTopics'

const reactTopics = [
  {
    name: 'Components',
    path: '/react/components',
    content: 'React components are the building blocks of React applications. They are reusable pieces of code that return React elements describing what should appear on the screen.',
    questions: [
      'What is a React component?',
      'What\'s the difference between a functional component and a class component?',
      'How do you create a pure component in React?'
    ]
  },
  {
    name: 'JSX',
    path: '/react/jsx',
    content: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to describe what the UI should look like.',
    questions: [
      'What is JSX?',
      'Is it necessary to use JSX with React?',
      'How does JSX differ from HTML?'
    ]
  },
  {
    name: 'Props',
    path: '/react/props',
    content: 'Props (short for properties) are a way of passing data from parent to child components. They are read-only and help make your components reusable.',
    questions: [
      'What are props in React?',
      'How do you pass props to a component?',
      'Can you modify props within a component?'
    ]
  },
  {
    name: 'State',
    path: '/react/state',
    content: 'State is a JavaScript object that stores a component\'s dynamic data and determines the component\'s behavior. When the state changes, the component re-renders.',
    questions: [
      'What is state in React?',
      'How is state different from props?',
      'How do you update state in a class component vs a functional component?'
    ]
  },
  {
    name: 'Hooks',
    path: '/react/hooks',
    content: 'Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don\'t work inside classes — they let you use React without classes.',
    questions: [
      'What are React Hooks?',
      'What is the useState Hook?',
      'How does the useEffect Hook work?'
    ]
  },
]

export default function React() {
  return (
    <>
      <Head>
        <title>React - UI Technologies</title>
        <meta name="description" content="Learn about React core topics" />
      </Head>
      <TechnologyTopics technology="React" topics={reactTopics} />
    </>
  )
}
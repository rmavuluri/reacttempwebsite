import Head from 'next/head'
import TechnologyTopics from '@/components/TechnologyTopics'

const vueTopics = [
  {
    name: 'Vue Instance',
    path: '/vue/instance',
    content: 'The Vue instance is the root of every Vue application. It is created by passing an options object into the Vue constructor.',
    questions: [
      'What is a Vue instance?',
      'How do you create a Vue instance?',
      'What are the lifecycle hooks of a Vue instance?'
    ]
  },
  {
    name: 'Template Syntax',
    path: '/vue/template-syntax',
    content: 'Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance\'s data.',
    questions: [
      'What is Vue\'s template syntax?',
      'How do you use v-bind in Vue?',
      'What is the difference between v-if and v-show?'
    ]
  },
  {
    name: 'Components',
    path: '/vue/components',
    content: 'Components are reusable Vue instances with a name. They accept the same options as a new Vue instance, such as data, computed, watch, methods, and lifecycle hooks.',
    questions: [
      'What are Vue components?',
      'How do you register a global component?',
      'What is the difference between props and data in a Vue component?'
    ]
  },
  {
    name: 'Reactivity',
    path: '/vue/reactivity',
    content: 'Vue\'s reactivity system efficiently updates the DOM when the state changes. It keeps track of dependencies and optimizes re-rendering.',
    questions: [
      'How does Vue\'s reactivity system work?',
      'What is the purpose of Vue.set()?',
      'How can you track changes on an object or array in Vue?'
    ]
  },
  {
    name: 'Directives',
    path: '/vue/directives',
    content: 'Directives are special attributes with the v- prefix. They apply special reactive behavior to the rendered DOM.',
    questions: [
      'What are directives in Vue?',
      'What is the purpose of v-model?',
      'How do you create a custom directive in Vue?'
    ]
  },
]

export default function Vue() {
  return (
    <>
      <Head>
        <title>Vue - UI Technologies</title>
        <meta name="description" content="Learn about Vue core topics" />
      </Head>
      <TechnologyTopics technology="Vue" topics={vueTopics} />
    </>
  )
}
import Head from 'next/head'
import TechnologyTopics from '@/components/TechnologyTopics'

const angularTopics = [
  {
    name: 'Components',
    path: '/angular/components',
    content: 'Components are the main building block for Angular applications. Each component consists of an HTML template, a TypeScript class, and styles.',
    questions: [
      'What is an Angular component?',
      'How do you create a component in Angular?',
      'What is the purpose of @Component decorator?'
    ]
  },
  {
    name: 'Templates',
    path: '/angular/templates',
    content: 'Templates in Angular are written in HTML that contains Angular-specific elements and attributes. These templates are used to define the view of an Angular application.',
    questions: [
      'What are Angular templates?',
      'How do you use data binding in Angular templates?',
      'What is the difference between interpolation and property binding?'
    ]
  },
  {
    name: 'Dependency Injection',
    path: '/angular/dependency-injection',
    content: 'Dependency Injection (DI) is a design pattern and mechanism for creating and delivering some parts of an application to other parts of an application that require them.',
    questions: [
      'What is Dependency Injection in Angular?',
      'How does Angular\'s DI system work?',
      'What is the purpose of @Injectable decorator?'
    ]
  },
  {
    name: 'Services',
    path: '/angular/services',
    content: 'Services in Angular are used to organize and share business logic, models, data, or functions with different components of an Angular application.',
    questions: [
      'What are services in Angular?',
      'How do you create and use a service in Angular?',
      'What is the difference between a service and a component?'
    ]
  },
  {
    name: 'Modules',
    path: '/angular/modules',
    content: 'Angular apps are modular and have a modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.',
    questions: [
      'What are NgModules in Angular?',
      'What is the purpose of the AppModule?',
      'How do you declare a component in a module?'
    ]
  },
]

export default function Angular() {
  return (
    <>
      <Head>
        <title>Angular - UI Technologies</title>
        <meta name="description" content="Learn about Angular core topics" />
      </Head>
      <TechnologyTopics technology="Angular" topics={angularTopics} />
    </>
  )
}
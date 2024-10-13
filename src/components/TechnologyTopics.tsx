import { useState, useEffect, useRef } from 'react'
import TopicSidebar from './TopicSidebar'

interface Topic {
  name: string;
  path: string;
  content: string;
  questions: string[];
}

interface TechnologyTopicsProps {
  technology: string;
  topics: Topic[];
}

export default function TechnologyTopics({ technology, topics }: TechnologyTopicsProps) {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const handleTopicClick = (topic: Topic) => {
    setSelectedTopic(topic)
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{technology} Core Topics</h1>
      <ul className="space-y-4">
        {topics.map((topic) => (
          <li key={topic.path}>
            <button
              onClick={() => handleTopicClick(topic)}
              className="text-blue-600 hover:text-blue-800 text-lg"
            >
              {topic.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedTopic && (
        <div ref={sidebarRef}>
          <TopicSidebar
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            topic={selectedTopic.name}
            content={selectedTopic.content}
            questions={selectedTopic.questions}
          />
        </div>
      )}
    </div>
  )
}
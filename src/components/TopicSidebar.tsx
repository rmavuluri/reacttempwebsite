import { useState, useEffect } from 'react'
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface TopicSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  topic: string;
  content: string;
  questions: string[];
}

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function TopicSidebar({ isOpen, onClose, topic, content, questions }: TopicSidebarProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Generate mock answers for the questions
  const questionsWithAnswers = questions.map((question) => ({
    question,
    answer: `This is a sample answer for the question: "${question}". In a real application, you would provide a detailed explanation here.`
  }));

  return (
    <div className={`fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto border-l-4 border-indigo-500`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold dark:text-white">{topic}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Content</h3>
          <p className="dark:text-gray-300">{content}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Interview Questions</h3>
          <div className="border-t border-gray-200 dark:border-gray-700">
            {questionsWithAnswers.map((qa, index) => (
              <AccordionItem key={index} question={qa.question} answer={qa.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
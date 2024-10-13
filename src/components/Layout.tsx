import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaInfoCircle, FaEnvelope, FaUser, FaChevronLeft, FaChevronRight, FaReact, FaVuejs, FaAngular, FaHome, FaSun, FaMoon } from 'react-icons/fa'
import { SiSvelte, SiNextdotjs } from 'react-icons/si'
import { useTheme } from '@/contexts/ThemeContext'

const uiTechnologies = [
  { name: 'React', path: '/react', icon: FaReact },
  { name: 'Vue', path: '/vue', icon: FaVuejs },
  { name: 'Angular', path: '/angular', icon: FaAngular },
  { name: 'Svelte', path: '/svelte', icon: SiSvelte },
  { name: 'Next.js', path: '/nextjs', icon: SiNextdotjs },
]

const additionalLinks = [
  { name: 'About', path: '/about', icon: FaInfoCircle },
  { name: 'Contact', path: '/contact', icon: FaEnvelope },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 768
      setIsMobile(isMobileView)
      setIsNavOpen(!isMobileView)
    }
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
  }, [])

  const toggleNav = () => setIsNavOpen(!isNavOpen)
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen)

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false')
    setIsLoggedIn(false)
    router.push('/')
  }

  const renderNavItem = (item: { name: string; path: string; icon: React.ElementType }, index: number) => {
    const Icon = item.icon
    return (
      <li key={item.name}>
        <Link href={item.path} className={`flex items-center p-2 rounded hover:bg-gray-700 ${router.pathname === item.path ? 'bg-gray-700' : ''}`}>
          <Icon className={`${isNavOpen ? 'mr-2' : 'mx-auto'}`} size={isNavOpen ? 20 : 28} />
          <span className={isNavOpen ? '' : 'hidden'}>{item.name}</span>
        </Link>
      </li>
    )
  }

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Left Navigation */}
      <nav className={`bg-gray-800 text-white fixed h-full overflow-auto transition-all duration-300 ease-in-out z-20 ${isNavOpen ? 'w-64' : 'w-16'}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold ${isNavOpen ? '' : 'hidden'}`}>RM Version</h2>
            <button onClick={toggleNav} className="text-white focus:outline-none">
              {isNavOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
            </button>
          </div>
          <ul className="space-y-2">
            {uiTechnologies.map(renderNavItem)}
            {additionalLinks.map(renderNavItem)}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isNavOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center fixed w-full z-10">
          <div className="flex items-center">
            {!isNavOpen && (
              <button
                onClick={toggleNav}
                className="mr-4 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Open navigation menu"
              >
                <FaBars size={24} />
              </button>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <div className="relative">
              <button
                onClick={toggleUserDropdown}
                className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center focus:outline-none"
              >
                <FaUser className="text-gray-600 dark:text-gray-300" />
              </button>
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-30">
                  {isLoggedIn ? (
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link href="/signin" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Sign In
                      </Link>
                      <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="pt-16 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          {children}
        </div>
      </div>
    </div>
  )
}
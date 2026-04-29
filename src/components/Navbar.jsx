import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0',
      background: isScrolled ? (darkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)') : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo as image */}
        <a href="#home" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}>
          <img src="/logo.svg" alt="devwithenitan" style={{ height: '40px' }} />
        </a>

        {/* Navigation Links */}
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center'
        }}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} style={{ 
                color: darkMode ? '#cbd5e1' : '#333', 
                textDecoration: 'none', 
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ff6600'}
              onMouseLeave={(e) => e.target.style.color = darkMode ? '#cbd5e1' : '#333'}>
                {link.name}
              </a>
            </li>
          ))}
          {/* Dark Mode Toggle */}
          <li>
            <button onClick={toggleDarkMode} style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              color: darkMode ? '#cbd5e1' : '#333'
            }}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

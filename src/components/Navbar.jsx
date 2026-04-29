import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        <a href="#home" style={{
          fontSize: '1.3rem',
          fontWeight: 'bold',
          color: darkMode ? '#a5b4fc' : '#ff6600',
          textDecoration: 'none'
        }}>
          devwithenitan
        </a>

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

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          color: darkMode ? '#cbd5e1' : '#333',
          display: 'none'
        }} className="mobile-menu-btn">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          background: darkMode ? '#1e293b' : 'white',
          padding: '20px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} style={{
              display: 'block',
              padding: '10px 0',
              color: darkMode ? '#cbd5e1' : '#333',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(0,0,0,0.1)'
            }} onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <button onClick={() => { toggleDarkMode(); setMobileMenuOpen(false); }} style={{
            display: 'block',
            padding: '10px 0',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            color: darkMode ? '#cbd5e1' : '#333'
          }}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          ul {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar

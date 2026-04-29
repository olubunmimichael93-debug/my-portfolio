import { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [darkMode, setDarkMode] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('portfolioDarkMode', !darkMode)
  }

  useEffect(() => {
    const saved = localStorage.getItem('portfolioDarkMode')
    if (saved !== null) {
      setDarkMode(saved === 'true')
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#0f172a'
      document.body.style.color = '#f1f5f9'
    } else {
      document.body.style.backgroundColor = '#f5f5f5'
      document.body.style.color = '#333'
    }
  }, [darkMode])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0',
        background: isScrolled ? (darkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)') : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <a href="#home" style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: darkMode ? '#a5b4fc' : '#ff6600',
            textDecoration: 'none'
          }}>
            devwithenitan
          </a>

          {/* Desktop Navigation */}
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
                  transition: 'color 0.3s',
                  fontSize: '14px'
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
                color: darkMode ? '#cbd5e1' : '#333',
                display: 'flex',
                alignItems: 'center'
              }}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              color: darkMode ? '#cbd5e1' : '#333',
              display: 'none'
            }}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: '60px',
        left: 0,
        right: 0,
        background: darkMode ? '#1e293b' : 'white',
        padding: '20px',
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        zIndex: 999,
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        {navLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            onClick={closeMenu}
            style={{
              display: 'block',
              padding: '12px 0',
              color: darkMode ? '#cbd5e1' : '#333',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(0,0,0,0.1)',
              fontSize: '16px'
            }}
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => { toggleDarkMode(); closeMenu(); }} 
          style={{
            display: 'block',
            padding: '12px 0',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            color: darkMode ? '#cbd5e1' : '#333',
            fontSize: '16px',
            width: '100%'
          }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

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
    </>
  )
}

export default Navbar

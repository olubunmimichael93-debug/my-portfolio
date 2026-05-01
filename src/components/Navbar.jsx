import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0',
        background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.3)' : 'none'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          {/* Logo only - no text */}
          <a href="#home" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}>
            <img 
              src="/devwithenitan-logo.jpeg" 
              alt="devwithenitan"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
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
                  color: '#cbd5e1', 
                  textDecoration: 'none', 
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff6600'}
                onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              color: '#cbd5e1',
              display: 'none'
            }}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          width: '100%',
          background: '#1e293b',
          padding: '20px',
          zIndex: 999,
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              onClick={closeMenu}
              style={{
                display: 'block',
                padding: '12px 0',
                color: '#cbd5e1',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                fontSize: '16px',
                width: '100%'
              }}
            >
              {link.name}
            </a>
          ))}
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
    </>
  )
}

export default Navbar

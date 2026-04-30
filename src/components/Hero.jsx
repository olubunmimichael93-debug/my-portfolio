import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Hero() {
  const navigate = useNavigate()
  const { darkMode } = useTheme()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        backgroundImage: `url('/profile.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '100px 20px 60px',
        width: '100%'
      }}
    >
      {/* Overlay that changes with mode */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(248, 250, 252, 0.9) 100%)',
        zIndex: 1
      }} />

      <div style={{
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
        padding: '0 16px',
        position: 'relative',
        zIndex: 2
      }}>
        <h1 style={{ 
          fontSize: 'clamp(28px, 7vw, 56px)', 
          marginBottom: '16px',
          color: darkMode ? 'white' : '#1e293b',
          lineHeight: '1.2'
        }}>
          Hi, I'm <span style={{ color: '#ff6600' }}>Olubunmi Michael Enitan</span>
        </h1>
        <h2 style={{ 
          fontSize: 'clamp(18px, 5vw, 28px)', 
          marginBottom: '16px', 
          color: darkMode ? '#cbd5e1' : '#475569'
        }}>
          Full Stack Web Developer
        </h2>
        <p style={{ 
          fontSize: 'clamp(14px, 4vw, 18px)', 
          color: darkMode ? '#94a3b8' : '#64748b', 
          marginBottom: '30px', 
          maxWidth: '600px', 
          margin: '0 auto 30px'
        }}>
          Building beautiful, responsive, and user-friendly web experiences with modern technologies.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          justifyContent: 'center', 
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={() => scrollToSection('contact')}
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Connect With Me
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: 'transparent',
              color: darkMode ? 'white' : '#1e293b',
              border: `2px solid ${darkMode ? 'white' : '#1e293b'}`,
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            View My Work
          </button>
          <a href="/resume.pdf" download>
            <button style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: darkMode ? '#334155' : '#e2e8f0',
              color: darkMode ? 'white' : '#1e293b',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

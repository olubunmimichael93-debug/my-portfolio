import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

function Resume() {
  const { darkMode } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="resume" style={{
      padding: '80px 20px',
      background: darkMode ? '#0f172a' : '#f8fafc',
      minHeight: '100vh',
      transition: 'background 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(28px, 6vw, 48px)', 
          marginBottom: '20px',
          color: darkMode ? 'white' : '#1e293b'
        }}>
          My Resume
        </h2>
        
        <p style={{ textAlign: 'center', color: darkMode ? '#94a3b8' : '#64748b', marginBottom: '30px' }}>
          View my resume below or download it
        </p>

        <div style={{
          background: darkMode ? '#1e293b' : 'white',
          borderRadius: '20px',
          padding: isMobile ? '10px' : '20px',
          marginBottom: '30px',
          boxShadow: darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          {isMobile ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              background: darkMode ? '#0f172a' : '#f8fafc',
              borderRadius: '10px'
            }}>
              <p style={{ color: darkMode ? '#94a3b8' : '#64748b', marginBottom: '20px' }}>
                📄 Resume PDF available for download
              </p>
              <a href="/resume.pdf" download>
                <button style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  background: '#ff6600',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  Download Resume PDF
                </button>
              </a>
            </div>
          ) : (
            <iframe
              src="/resume.pdf"
              title="Resume"
              style={{
                width: '100%',
                height: '600px',
                border: 'none',
                borderRadius: '10px'
              }}
            />
          )}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/resume.pdf" download>
            <button style={{
              padding: '15px 40px',
              fontSize: 'clamp(14px, 4vw, 18px)',
              background: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              📄 Download Resume PDF
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume

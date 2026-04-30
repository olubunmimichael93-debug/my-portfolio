import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaEye, FaDownload } from 'react-icons/fa'

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
          View my resume below or download a copy
        </p>

        {/* PDF Viewer Section */}
        <div style={{
          background: darkMode ? '#1e293b' : 'white',
          borderRadius: '20px',
          padding: isMobile ? '15px' : '20px',
          marginBottom: '30px',
          boxShadow: darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          {isMobile ? (
            // Mobile: Two buttons - View opens in browser, Download saves file
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              borderRadius: '10px'
            }}>
              <p style={{ color: darkMode ? '#94a3b8' : '#64748b', marginBottom: '25px' }}>
                📄 My Resume
              </p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '12px 24px',
                    fontSize: '14px',
                    background: '#ff6600',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <FaEye /> View Resume
                  </button>
                </a>
                <a href="/resume.pdf" download style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '12px 24px',
                    fontSize: '14px',
                    background: 'transparent',
                    color: '#ff6600',
                    border: '2px solid #ff6600',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <FaDownload /> Download PDF
                  </button>
                </a>
              </div>
            </div>
          ) : (
            // Desktop: Embedded PDF viewer
            <>
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
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="/resume.pdf" download style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    background: '#ff6600',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <FaDownload /> Download PDF
                  </button>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Resume

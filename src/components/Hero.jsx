import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Hero() {
  const navigate = useNavigate()

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: '100px 20px 60px'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(28px, 8vw, 56px)', 
          marginBottom: '16px',
          color: 'white',
          lineHeight: '1.2'
        }}>
          Hi, I'm <span style={{ color: '#ff6600' }}>Olubunmi Michael Enitan</span>
        </h1>
        <h2 style={{ 
          fontSize: 'clamp(18px, 5vw, 28px)', 
          marginBottom: '16px', 
          color: '#cbd5e1'
        }}>
          Full Stack Web Developer
        </h2>
        <p style={{ 
          fontSize: 'clamp(14px, 4vw, 18px)', 
          color: '#94a3b8', 
          marginBottom: '30px', 
          maxWidth: '600px', 
          margin: '0 auto 30px',
          padding: '0 10px'
        }}>
          Building beautiful, responsive, and user-friendly web experiences with modern technologies.
          I turn ideas into reality through clean code and creative design.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          padding: '0 10px'
        }}>
          <button 
            onClick={() => navigate('/#contact')}
            style={{
              padding: '12px 24px',
              fontSize: 'clamp(14px, 4vw, 16px)',
              background: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              minWidth: '140px'
            }}
          >
            Connect With Me
          </button>
          <button 
            onClick={() => navigate('/#projects')}
            style={{
              padding: '12px 24px',
              fontSize: 'clamp(14px, 4vw, 16px)',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              minWidth: '140px'
            }}
          >
            View My Work
          </button>
          <a href="/resume.pdf" download>
            <button style={{
              padding: '12px 24px',
              fontSize: 'clamp(14px, 4vw, 16px)',
              background: '#334155',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              minWidth: '140px'
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

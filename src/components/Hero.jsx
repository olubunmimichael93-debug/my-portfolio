import { useNavigate } from 'react-router-dom'

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
      padding: '100px 20px 60px',
      width: '100%',
      position: 'relative'
    }}>
      {/* Profile Picture */}
      <div style={{
        position: 'absolute',
        top: '100px',
        right: '10%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid #ff6600',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <img 
          src="/profile.jpeg" 
          alt="Olubunmi Michael Enitan"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      <div style={{
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(28px, 7vw, 56px)', 
          marginBottom: '16px',
          color: 'white',
          lineHeight: '1.2',
          wordWrap: 'break-word'
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
              fontWeight: 'bold'
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
              fontWeight: 'bold'
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
              fontWeight: 'bold'
            }}>
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* Mobile: Profile picture centered on small screens */}
      <style>{`
        @media (max-width: 768px) {
          section > div:first-child {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            margin: 0 auto 30px !important;
            width: 150px !important;
            height: 150px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero

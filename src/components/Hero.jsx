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
      padding: '80px 20px'
    }}>
      <div>
        <h1 style={{ 
          fontSize: 'clamp(32px, 8vw, 56px)', 
          marginBottom: '20px',
          color: 'white'
        }}>
          Hi, I'm <span style={{ color: '#ff6600' }}>Olubunmi Michael Enitan</span>
        </h1>
        <h2 style={{ 
          fontSize: 'clamp(20px, 5vw, 28px)', 
          marginBottom: '20px', 
          color: '#cbd5e1'
        }}>
          Full Stack Web Developer
        </h2>
        <p style={{ 
          fontSize: 'clamp(16px, 4vw, 18px)', 
          color: '#94a3b8', 
          marginBottom: '30px', 
          maxWidth: '600px', 
          margin: '0 auto 30px'
        }}>
          Building beautiful, responsive, and user-friendly web experiences with modern technologies.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          padding: '0 10px'
        }}>
          <button 
            onClick={() => navigate('/#contact')}
            style={{
              padding: '12px 25px',
              fontSize: '16px',
              background: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Connect With Me 📱
          </button>
          <button 
            onClick={() => navigate('/#projects')}
            style={{
              padding: '12px 25px',
              fontSize: '16px',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            View My Work 🚀
          </button>
          <a href="/resume.pdf" download>
            <button style={{
              padding: '12px 25px',
              fontSize: '16px',
              background: '#334155',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              📄 Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

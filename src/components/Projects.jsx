import { useTheme } from '../context/ThemeContext'

function Projects() {
  const { darkMode } = useTheme()
  
  const projects = [
    { 
      title: 'MarketHub', 
      description: 'Complete Jumia-style e-commerce platform with payment integration, admin dashboard, order tracking, and wishlist.', 
      tech: ['React', 'Node.js', 'MongoDB', 'Paystack'],
      emoji: '🛒',
      liveLink: 'https://markethub-sandy.vercel.app',
      githubLink: 'https://github.com/olubunmimichael93-debug/markethub'
    },
    { 
      title: 'Weather App', 
      description: 'Real-time weather application with 5-day forecast and location detection.', 
      tech: ['React', 'OpenWeatherMap API', 'CSS'],
      emoji: '🌤️',
      liveLink: 'https://weather-app-nu-cyan-81.vercel.app',
      githubLink: 'https://github.com/olubunmimichael93-debug/weather-app'
    },
    { 
      title: 'Task Manager', 
      description: 'Full-featured task manager with add, complete, delete, and filter functionality.', 
      tech: ['React', 'LocalStorage', 'CSS'],
      emoji: '✅',
      liveLink: 'https://task-manager-five-ashy.vercel.app',
      githubLink: 'https://github.com/olubunmimichael93-debug/task-manager'
    },
    { 
      title: 'VibePost', 
      description: 'Social platform where users can share their vibe, post updates, and connect with others.', 
      tech: ['React', 'Authentication', 'API'],
      emoji: '📱',
      liveLink: 'https://vibepostt.vercel.app',
      githubLink: 'https://github.com/olubunmimichael93-debug/vibepost'
    },
    { 
      title: 'Lit Mien', 
      description: 'Luxury jewelry and watches e-commerce brand with product listings.', 
      tech: ['HTML', 'CSS', 'JavaScript'],
      emoji: '💎',
      liveLink: 'https://litmien.vercel.app',
      githubLink: 'https://github.com/olubunmimichael93-debug/litmien'
    }
  ]

  return (
    <section id="projects" style={{
      padding: '80px 20px',
      background: darkMode ? '#0f172a' : '#f8fafc',
      transition: 'background 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(28px, 6vw, 36px)', 
          marginBottom: '20px',
          color: darkMode ? 'white' : '#1e293b'
        }}>
          My Projects
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: darkMode ? '#94a3b8' : '#64748b', 
          marginBottom: '50px',
          fontSize: '16px'
        }}>
          Here are some of my recent projects
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '25px'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: darkMode ? '#1e293b' : 'white',
              padding: '25px',
              borderRadius: '15px',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>{project.emoji}</div>
              <h3 style={{ fontSize: '22px', marginBottom: '15px', color: darkMode ? 'white' : '#1e293b' }}>{project.title}</h3>
              <p style={{ color: darkMode ? '#94a3b8' : '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '25px'
              }}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={{
                    padding: '5px 12px',
                    background: darkMode ? 'rgba(165, 180, 252, 0.1)' : '#f1f5f9',
                    borderRadius: '15px',
                    fontSize: '12px',
                    color: '#ff6600'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{
                  padding: '8px 20px',
                  background: '#ff6600',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  🔗 Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{
                  padding: '8px 20px',
                  background: 'transparent',
                  color: '#ff6600',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  border: '1px solid #ff6600'
                }}>
                  📂 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

function Projects() {
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
      liveLink: 'https://weather-app-olubunmimichael93-debug.vercel.app',
      githubLink: 'https://github.com/olubunmimichael93-debug/weather-app'
    },
    { 
      title: 'Task Manager', 
      description: 'Full-featured task manager with add, complete, delete, and filter functionality.', 
      tech: ['React', 'LocalStorage', 'CSS'],
      emoji: '✅',
      liveLink: 'https://task-manager-olubunmimichael93-debug.vercel.app',
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
      liveLink: 'https://litmien-sigma.vercel.app',
      githubLink: 'https://github.com/olubunmimichael93-debug/litmien'
    }
  ]

  return (
    <section id="projects" style={{
      padding: '80px 20px',
      background: '#0f172a'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(28px, 6vw, 36px)', 
          marginBottom: '20px',
          color: 'white'
        }}>
          My Projects
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#94a3b8', 
          marginBottom: '50px',
          fontSize: '16px'
        }}>
          Here are some of my recent projects
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: '#1e293b',
              padding: '25px',
              borderRadius: '15px',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>{project.emoji}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '15px', color: 'white' }}>{project.title}</h3>
              <p style={{ color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6', fontSize: '14px' }}>
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
                    background: 'rgba(165, 180, 252, 0.1)',
                    borderRadius: '15px',
                    fontSize: '12px',
                    color: '#a5b4fc'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{
                  padding: '8px 18px',
                  background: '#ff6600',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  🔗 Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{
                  padding: '8px 18px',
                  background: 'transparent',
                  color: '#ff6600',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
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

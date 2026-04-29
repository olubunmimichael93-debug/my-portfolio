function About() {
  const skills = [
    { name: 'HTML5', percentage: 90, color: '#e2e8f0' },
    { name: 'CSS3', percentage: 85, color: '#e2e8f0' },
    { name: 'JavaScript/ES6', percentage: 85, color: '#e2e8f0' },
    { name: 'React.js', percentage: 85, color: '#e2e8f0' },
    { name: 'Node.js', percentage: 80, color: '#e2e8f0' },
    { name: 'Express.js', percentage: 75, color: '#e2e8f0' },
    { name: 'MongoDB', percentage: 75, color: '#e2e8f0' },
    { name: 'Git & GitHub', percentage: 85, color: '#e2e8f0' },
    { name: 'Responsive Design', percentage: 90, color: '#e2e8f0' }
  ]

  return (
    <section id="about" style={{
      padding: '80px 20px',
      background: '#0f172a'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '36px', 
          marginBottom: '20px',
          color: 'white'
        }}>
          About Me
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          marginTop: '50px'
        }}>
          <div>
            <p style={{ 
              marginBottom: '20px', 
              lineHeight: '1.8', 
              color: '#cbd5e1',
              fontSize: '16px'
            }}>
              I'm <strong style={{ color: '#a5b4fc' }}>Olubunmi Michael Enitan</strong>, a passionate Full Stack Web Developer 
              with experience in building modern web applications. I love creating elegant solutions 
              to complex problems and staying up-to-date with the latest technologies.
            </p>
            <p style={{ 
              lineHeight: '1.8', 
              color: '#cbd5e1',
              fontSize: '16px',
              marginBottom: '20px'
            }}>
              I specialize in the <strong style={{ color: '#a5b4fc' }}>MERN stack</strong> (MongoDB, Express.js, React, Node.js) 
              and modern JavaScript technologies. I'm constantly learning new tools and best practices 
              to deliver high-quality web applications.
            </p>
            <p style={{ 
              lineHeight: '1.8', 
              color: '#cbd5e1',
              fontSize: '16px'
            }}>
              When I'm not coding, I contribute to open-source projects and mentor aspiring developers. 
              I believe in clean code, continuous learning, and building solutions that make a difference.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginTop: '40px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#a5b4fc' }}>3+</div>
                <div style={{ fontSize: '14px', color: '#94a3b8' }}>Years Experience</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#a5b4fc' }}>20+</div>
                <div style={{ fontSize: '14px', color: '#94a3b8' }}>Projects Completed</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#a5b4fc' }}>15+</div>
                <div style={{ fontSize: '14px', color: '#94a3b8' }}>Happy Clients</div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ 
              fontSize: '24px', 
              marginBottom: '30px',
              color: 'white'
            }}>
              Technical Skills
            </h3>
            
            {skills.map((skill, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}>
                  <span style={{ color: '#cbd5e1', fontWeight: '500' }}>{skill.name}</span>
                  <span style={{ color: '#94a3b8', fontWeight: 'bold' }}>{skill.percentage}%</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '6px',
                  background: '#1e293b',
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${skill.percentage}%`,
                    height: '100%',
                    background: '#a5b4fc',
                    borderRadius: '3px',
                    animation: 'slideIn 1s ease-out'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default About
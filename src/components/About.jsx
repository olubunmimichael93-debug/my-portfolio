import { useTheme } from '../context/ThemeContext'

function About() {
  const { darkMode } = useTheme()
  
  const skills = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB',
    'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Git & GitHub'
  ]

  return (
    <section id="about" style={{
      padding: '80px 20px',
      background: darkMode ? '#0f172a' : '#f5f5f5',
      transition: 'background 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(28px, 6vw, 36px)', 
          marginBottom: '40px',
          color: darkMode ? 'white' : '#333'
        }}>
          About Me
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          <div>
            <p style={{ 
              marginBottom: '20px', 
              lineHeight: '1.8', 
              color: darkMode ? '#cbd5e1' : '#475569'
            }}>
              I'm a passionate Full Stack Web Developer with experience in building modern web applications.
              I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.
            </p>
            <p style={{ 
              lineHeight: '1.8', 
              color: darkMode ? '#cbd5e1' : '#475569'
            }}>
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or enjoying a good cup of coffee.
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '24px', 
              marginBottom: '20px',
              color: darkMode ? 'white' : '#333'
            }}>
              Skills & Technologies
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {skills.map((skill, index) => (
                <span key={index} style={{
                  padding: '8px 16px',
                  background: darkMode ? 'rgba(165, 180, 252, 0.1)' : '#e2e8f0',
                  border: `1px solid ${darkMode ? 'rgba(165, 180, 252, 0.2)' : '#cbd5e1'}`,
                  borderRadius: '20px',
                  color: darkMode ? '#a5b4fc' : '#ff6600',
                  fontSize: '14px'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

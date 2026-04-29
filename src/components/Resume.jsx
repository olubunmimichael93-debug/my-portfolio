function Resume() {
  return (
    <section id="resume" style={{
      padding: '80px 20px',
      background: '#0f172a',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '48px', 
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          My Resume
        </h2>
        
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '30px' }}>
          View my resume below or download it
        </p>

        <div style={{
          background: '#1e293b',
          borderRadius: '20px',
          padding: '20px',
          marginBottom: '30px'
        }}>
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
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/resume.pdf" download>
            <button style={{
              padding: '15px 40px',
              fontSize: '18px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
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

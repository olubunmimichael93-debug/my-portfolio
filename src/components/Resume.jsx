function Resume() {
  return (
    <section id="resume" style={{
      padding: '80px 20px',
      background: '#0a0a0a',
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
        
        <p style={{ textAlign: 'center', color: '#c0c0c0', marginBottom: '30px' }}>
          View my resume below or download it
        </p>

        {/* PDF Viewer */}
        <div style={{
          background: '#1a1a1a',
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
            onError={() => {
              document.getElementById('pdfError').style.display = 'block'
            }}
          />
          <div id="pdfError" style={{ display: 'none', textAlign: 'center', padding: '40px', color: '#ff6b6b' }}>
            ⚠️ Resume PDF not found. Please make sure resume.pdf is in the public folder.
          </div>
        </div>

        {/* Download Button */}
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
              fontWeight: 'bold',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              📄 Download Resume PDF
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
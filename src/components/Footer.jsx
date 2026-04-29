import { FaHeart } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: '#0f172a',
      color: '#94a3b8',
      padding: '40px 20px',
      textAlign: 'center',
      borderTop: '1px solid #1e293b'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p>
          © {currentYear} devwithenitan. All rights reserved.
        </p>
        <p style={{ marginTop: '10px', fontSize: '13px' }}>
          Built with <FaHeart style={{ color: '#ff6600', display: 'inline', margin: '0 4px' }} /> using React
        </p>
      </div>
    </footer>
  )
}

export default Footer

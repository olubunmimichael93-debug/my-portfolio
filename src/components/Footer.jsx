import { useTheme } from '../context/ThemeContext'
import { FaHeart } from 'react-icons/fa'

function Footer() {
  const { darkMode } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: darkMode ? '#0f172a' : '#f8fafc',
      color: darkMode ? '#94a3b8' : '#64748b',
      padding: '40px 20px',
      textAlign: 'center',
      borderTop: `1px solid ${darkMode ? '#1e293b' : '#e2e8f0'}`,
      transition: 'background 0.3s ease'
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

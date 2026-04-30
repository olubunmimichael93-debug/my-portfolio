import { useTheme } from '../context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTiktok, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function SocialBar() {
  const { darkMode } = useTheme()

  const socials = [
    { name: 'WhatsApp', icon: faWhatsapp, link: 'https://wa.me/2347040564333', color: '#25D366' },
    { name: 'TikTok', icon: faTiktok, link: 'https://www.tiktok.com/@devwithenitan', color: darkMode ? '#ffffff' : '#000000' },
    { name: 'Twitter', icon: faTwitter, link: 'https://x.com/Olubunmil1709', color: '#1DA1F2' },
    { name: 'Facebook', icon: faFacebook, link: 'https://www.facebook.com/share/17WLhedrAr/', color: '#1877F2' },
    { name: 'Instagram', icon: faInstagram, link: 'https://instagram.com/yourusername', color: '#E4405F' }
  ]

  return (
    <>
      {/* Desktop Social Bar */}
      <div className="social-bar-desktop" style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '45px',
              height: '45px',
              background: darkMode ? '#1e293b' : 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              fontSize: '22px',
              transition: 'all 0.3s',
              border: `2px solid ${social.color}`,
              boxShadow: darkMode ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)',
              color: social.color
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.background = social.color
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.background = darkMode ? '#1e293b' : 'white'
              e.currentTarget.style.color = social.color
            }}
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>

      {/* Mobile Social Bar */}
      <div className="social-bar-mobile" style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        background: darkMode ? '#1e293b' : 'white',
        padding: '10px 16px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 1000,
        borderTop: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`
      }}>
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '40px',
              height: '40px',
              background: 'transparent',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              fontSize: '20px',
              transition: 'all 0.3s',
              color: social.color
            }}
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .social-bar-desktop {
            display: none !important;
          }
          .social-bar-mobile {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .social-bar-desktop {
            display: flex !important;
          }
          .social-bar-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default SocialBar

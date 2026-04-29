import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTiktok, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'  // ✅ This is correct - from solid icons

function Footer() {
  const socials = [
    { name: 'X (Twitter)', icon: faTwitter, link: 'https://x.com/Olubunmil1709' },
    { name: 'Facebook', icon: faFacebook, link: 'https://www.facebook.com/share/17WLhedrAr/' },
    { name: 'TikTok', icon: faTiktok, link: 'https://www.tiktok.com/@devwithenitan' },
    { name: 'WhatsApp', icon: faWhatsapp, link: 'https://wa.me/2347040564333' },
    { name: 'Instagram', icon: faInstagram, link: 'https://instagram.com/yourusername' }
  ]

  return (
    <footer style={{
      background: '#0a0a0a',
      padding: '50px 20px 30px',
      textAlign: 'center',
      borderTop: '1px solid #333'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#a0a0a0',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#667eea'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a0a0a0'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <FontAwesomeIcon icon={social.icon} size="xl" />
              <span>{social.name}</span>
            </a>
          ))}
          {/* Email link in footer */}
          <a
            href="mailto:olubunmimichael93@gmail.com"
            style={{
              color: '#a0a0a0',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s',
              fontSize: '14px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#667eea'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a0a0'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
            <span>Email</span>
          </a>
        </div>
        <p style={{ color: '#a0a0a0', marginBottom: '10px' }}>
          &copy; {new Date().getFullYear()} Olubunmi Michael Enitan. All rights reserved.
        </p>
        <p style={{ color: '#666', fontSize: '14px' }}>
          olubunmimichael93@gmail.com
        </p>
      </div>
    </footer>
  )
}

export default Footer
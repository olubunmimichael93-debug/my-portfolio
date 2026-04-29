import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTiktok, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function SocialBar() {
  const socials = [
    { name: 'X (Twitter)', icon: faTwitter, link: 'https://x.com/Olubunmil1709', color: '#1DA1F2' },
    { name: 'Facebook', icon: faFacebook, link: 'https://www.facebook.com/share/17WLhedrAr/', color: '#1877F2' },
    { name: 'TikTok', icon: faTiktok, link: 'https://www.tiktok.com/@devwithenitan', color: '#000000' },
    { name: 'WhatsApp', icon: faWhatsapp, link: 'https://wa.me/2347040564333', color: '#25D366' },
    { name: 'Instagram', icon: faInstagram, link: 'https://instagram.com/yourusername', color: '#E4405F' }
  ]

  return (
    <div style={{
      position: 'fixed',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '55px',
            height: '55px',
            background: '#1a1a1a',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            fontSize: '28px',
            transition: 'all 0.3s',
            border: `2px solid ${social.color}`,
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            color: 'white'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.15)'
            e.currentTarget.style.background = social.color
            e.currentTarget.style.borderColor = social.color
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.background = '#1a1a1a'
          }}
        >
          <FontAwesomeIcon icon={social.icon} size="lg" />
        </a>
      ))}
    </div>
  )
}

export default SocialBar
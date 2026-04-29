import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTiktok, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: faTwitter,
      color: '#1DA1F2',
      placeholder: '@devwithenitan',
      url: 'https://x.com/Olubunmil1709'
    },
    {
      name: 'Facebook',
      icon: faFacebook,
      color: '#1877F2',
      placeholder: '@devwithenitan',
      url: 'https://www.facebook.com/share/17WLhedrAr/'
    },
    {
      name: 'TikTok',
      icon: faTiktok,
      color: '#000000',
      placeholder: '@devwithenitan',
      url: 'https://www.tiktok.com/@devwithenitan'
    },
    {
      name: 'WhatsApp',
      icon: faWhatsapp,
      color: '#25D366',
      placeholder: '+2347040564333',
      url: 'https://wa.me/2347040564333'
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      color: '#E4405F',
      placeholder: '@yourusername',
      url: 'https://instagram.com/yourusername'
    }
  ]

  return (
    <section id="contact" style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
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
          Let's Connect
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#c0c0c0', 
          marginBottom: '50px',
          fontSize: '18px'
        }}>
          Reach out to me on any of these platforms
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '25px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                background: '#1a1a1a',
                padding: '30px 20px',
                borderRadius: '15px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: `2px solid ${social.color}`,
                display: 'block',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.background = social.color
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = '#1a1a1a'
                e.currentTarget.style.color = '#667eea'
              }}
            >
              <FontAwesomeIcon icon={social.icon} style={{ fontSize: '48px', marginBottom: '15px' }} />
              <h3 style={{ 
                fontSize: '24px', 
                marginBottom: '10px',
                color: 'inherit'
              }}>
                {social.name}
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#a0a0a0',
                marginBottom: '10px'
              }}>
                {social.placeholder}
              </p>
              <span style={{
                display: 'inline-block',
                marginTop: '10px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                Click to Connect →
              </span>
            </a>
          ))}
        </div>

        {/* Email Contact Section */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          padding: '30px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '15px',
          maxWidth: '600px',
          margin: '60px auto 0'
        }}>
          <h3 style={{ marginBottom: '20px', fontSize: '20px' }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
            Or Send an Email
          </h3>
          <p style={{ color: '#c0c0c0', marginBottom: '10px' }}>
            Prefer email? You can reach me at:
          </p>
          <a href="mailto:olubunmimichael93@gmail.com" style={{
            color: '#667eea',
            fontSize: '18px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            olubunmimichael93@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
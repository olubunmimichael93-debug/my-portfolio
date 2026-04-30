import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faTiktok, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" style={{
      padding: '80px 20px',
      background: '#0f172a'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(28px, 6vw, 36px)', 
          marginBottom: '20px',
          color: 'white'
        }}>
          Get In Touch
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#94a3b8', 
          marginBottom: '50px',
          fontSize: '16px'
        }}>
          Feel free to reach out to me through any of these platforms
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          <div style={{
            background: '#1e293b',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '40px', color: '#ff6600', marginBottom: '15px' }} />
            <h3 style={{ marginBottom: '15px', color: 'white' }}>Email</h3>
            <a href="mailto:olubunmimichael93@gmail.com" style={{ color: '#ff6600', textDecoration: 'none' }}>
              olubunmimichael93@gmail.com
            </a>
          </div>
          
          <div style={{
            background: '#1e293b',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <FontAwesomeIcon icon={faPhone} style={{ fontSize: '40px', color: '#ff6600', marginBottom: '15px' }} />
            <h3 style={{ marginBottom: '15px', color: 'white' }}>Phone</h3>
            <a href="tel:07040564333" style={{ color: '#ff6600', textDecoration: 'none' }}>
              07040564333
            </a>
          </div>
          
          <div style={{
            background: '#1e293b',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '40px', color: '#ff6600', marginBottom: '15px' }} />
            <h3 style={{ marginBottom: '15px', color: 'white' }}>Location</h3>
            <p style={{ color: '#94a3b8' }}>Ibadan, Nigeria</p>
          </div>
        </div>
        
        <h3 style={{ 
          textAlign: 'center', 
          color: 'white', 
          marginTop: '50px', 
          marginBottom: '30px',
          fontSize: '24px'
        }}>
          Follow Me
        </h3>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '25px',
          marginTop: '20px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <a href="https://wa.me/2347040564333" target="_blank" rel="noopener noreferrer" style={{
            width: '55px',
            height: '55px',
            background: '#1e293b',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            color: '#25D366',
            transition: 'transform 0.3s',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.tiktok.com/@devwithenitan" target="_blank" rel="noopener noreferrer" style={{
            width: '55px',
            height: '55px',
            background: '#1e293b',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            color: '#ffffff',
            transition: 'transform 0.3s',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://x.com/Olubunmil1709" target="_blank" rel="noopener noreferrer" style={{
            width: '55px',
            height: '55px',
            background: '#1e293b',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            color: '#1DA1F2',
            transition: 'transform 0.3s',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/share/17WLhedrAr/" target="_blank" rel="noopener noreferrer" style={{
            width: '55px',
            height: '55px',
            background: '#1e293b',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            color: '#1877F2',
            transition: 'transform 0.3s',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" style={{
            width: '55px',
            height: '55px',
            background: '#1e293b',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            color: '#E4405F',
            transition: 'transform 0.3s',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

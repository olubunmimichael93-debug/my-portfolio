function SocialBar() {
  const socials = [
    { name: 'WhatsApp', icon: '💬', link: 'https://wa.me/2347040564333', color: '#25D366' },
    { name: 'TikTok', icon: '📱', link: 'https://www.tiktok.com/@devwithenitan', color: '#000000' },
    { name: 'Twitter', icon: '🐦', link: 'https://x.com/Olubunmil1709', color: '#1DA1F2' },
    { name: 'Facebook', icon: '📘', link: 'https://www.facebook.com/share/17WLhedrAr/', color: '#1877F2' },
    { name: 'Instagram', icon: '📷', link: 'https://instagram.com/yourusername', color: '#E4405F' }
  ]

  return (
    <>
      {/* Desktop Social Bar - Vertical on right */}
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
              background: '#1a1a1a',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              fontSize: '22px',
              transition: 'all 0.3s',
              border: `2px solid ${social.color}`,
              boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.background = social.color
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.background = '#1a1a1a'
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Mobile Social Bar - Horizontal at bottom */}
      <div className="social-bar-mobile" style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        background: '#1a1a1a',
        padding: '10px 16px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 1000,
        borderTop: '1px solid rgba(255,255,255,0.1)'
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
            {social.icon}
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

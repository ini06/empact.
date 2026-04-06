import React from 'react';

const Footer = () => {
  return (
    <footer className="section flex-col align-center text-center gap-16 glow-highlight" style={{ paddingTop: 0, overflow: 'hidden' }}>
      <div className="flex-row justify-between align-center" style={{ width: '100%', borderTop: '1px solid rgba(89, 65, 54, 0.15)', paddingTop: '2rem', marginTop: 'var(--space-12)', zIndex: 1, flexWrap: 'wrap', gap: '2rem' }}>
        <div className="label-md">© 2025 Empact. All rights reserved.</div>
        <div className="flex-row gap-8">
           <a href="https://www.instagram.com/empact0n?igsh=MXhzc2JnM3N2ZGQ2Nw==" target="_blank" rel="noopener noreferrer" className="body-md" style={{ textDecoration: 'none', transition: 'opacity 0.3s' }} aria-label="Instagram" onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
             <img src="/images/instagram.png" alt="Instagram" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
           </a>
           <a href="https://t.me/empactagency" target="_blank" rel="noopener noreferrer" className="body-md" style={{ textDecoration: 'none', transition: 'opacity 0.3s' }} aria-label="Telegram" onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
             <img src="/images/telegram.png" alt="Telegram" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
           </a>
           <a href="mailto:Nopunch15@gmail.com" className="body-md" style={{ textDecoration: 'none', transition: 'opacity 0.3s' }} aria-label="Gmail" onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
             <img src="/images/gmail.png" alt="Gmail" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

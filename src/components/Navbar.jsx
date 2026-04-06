import React from 'react';
import Button from './Button';

const Navbar = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="floating-element" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '1rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(89, 65, 54, 0.15)' }}>
      <div style={{ height: '55px' }}>
         <img src="/images/logo1.png" alt="Empact Logo" style={{ height: '100%', objectFit: 'contain' }} />
      </div>
      <Button variant="primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.8rem' }} onClick={scrollToCTA}>
        START A PROJECT
      </Button>
    </nav>
  );
};

export default Navbar;

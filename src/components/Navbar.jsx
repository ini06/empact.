import React from 'react';
import Button from './Button';

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="floating-element top-nav">
      <div style={{ height: '55px' }}>
         <img src="/images/logo1.png" alt="Empact Logo" style={{ height: '100%', objectFit: 'contain' }} />
      </div>
      
      <div className="nav-menu">
        {[
          { id: 'why', label: 'Why Empact' },
          { id: 'work', label: 'Work' },
          { id: 'services', label: 'Services' },
          { id: 'tools', label: 'Tools' },
          { id: 'process', label: 'Process' },
          { id: 'pricing', label: 'Pricing' },
          { id: 'testimonials', label: 'Client Words' },
          { id: 'faqs', label: 'FAQs' }
        ].map(item => (
          <button 
            key={item.id}
            className="nav-link"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <Button variant="primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.8rem' }} onClick={() => scrollToSection('cta')}>
        START A PROJECT
      </Button>
    </nav>
  );
};

export default Navbar;

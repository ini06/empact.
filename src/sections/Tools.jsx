import React from 'react';

const Tools = () => {
  return (
    <section id="tools" className="section stagger-reveal-wrapper flex-col align-center text-center">
      <div className="label-md" style={{ marginBottom: 'var(--space-16)' }}>  TOOLS</div>
      <h2 className="display-lg" style={{ fontSize: '3.5rem', marginBottom: 'var(--space-8)' }}>
        Tools don’t define quality.<br />
        <span style={{ color: 'var(--primary)' }}>Judgment does.</span>
      </h2>
      <p className="body-md" style={{ fontSize: '1.25rem', letterSpacing: '0.1em', marginTop: 'var(--space-8)' }}>
        After Effects · Premiere Pro · Photoshop · AI Tools
      </p>
      <div className="flex-row gap-12 justify-center align-center" style={{ marginTop: 'var(--space-16)', flexWrap: 'wrap' }}>
         <img src="/images/after-effects.png" alt="After Effects" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
         <img src="/images/adobe-premiere-pro-icon-free-png.webp" alt="Premiere Pro" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
         <img src="/images/adobe.png" alt="Photoshop" style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
      </div>
    </section>
  );
};

export default Tools;

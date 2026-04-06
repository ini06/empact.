import React, { useState } from 'react';
import Button from '../components/Button';

const CTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:Nopunch15@gmail.com?subject=New Project Inquiry from ${name}&body=${body}`;
  };

  return (
    <section id="cta" className="section flex-col align-center text-center gap-12 glow-highlight" style={{ paddingBottom: 'var(--space-8)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at top, rgba(255, 182, 146, 0.05), transparent 70%)', pointerEvents: 'none' }}></div>
      <h2 className="display-lg" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', maxWidth: '800px', zIndex: 1 }}>
        READY TO ARCHITECT YOUR ATTENTION?
      </h2>
      
      <form onSubmit={handleSubmit} className="flex-col gap-6" style={{ width: '100%', maxWidth: '500px', zIndex: 1, textAlign: 'left' }}>
        <div className="flex-col gap-2">
          <label htmlFor="name" className="label-md" style={{ color: 'var(--on-surface)' }}>Name</label>
          <input 
            type="text" id="name" name="name" value={formData.name} onChange={handleChange} required 
            style={{ padding: '1rem', background: 'var(--surface-container-highest)', border: '1px solid rgba(89, 65, 54, 0.3)', borderRadius: '8px', color: 'var(--on-surface)', outline: 'none', transition: 'border-color 0.2s', width: '100%' }} 
            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(89, 65, 54, 0.3)'}
          />
        </div>
        <div className="flex-col gap-2">
          <label htmlFor="email" className="label-md" style={{ color: 'var(--on-surface)' }}>Email</label>
          <input 
            type="email" id="email" name="email" value={formData.email} onChange={handleChange} required 
            style={{ padding: '1rem', background: 'var(--surface-container-highest)', border: '1px solid rgba(89, 65, 54, 0.3)', borderRadius: '8px', color: 'var(--on-surface)', outline: 'none', transition: 'border-color 0.2s', width: '100%' }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(89, 65, 54, 0.3)'}
          />
        </div>
        <div className="flex-col gap-2">
          <label htmlFor="message" className="label-md" style={{ color: 'var(--on-surface)' }}>Message</label>
          <textarea 
            id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" 
            style={{ padding: '1rem', background: 'var(--surface-container-highest)', border: '1px solid rgba(89, 65, 54, 0.3)', borderRadius: '8px', color: 'var(--on-surface)', outline: 'none', transition: 'border-color 0.2s', width: '100%', resize: 'vertical' }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(89, 65, 54, 0.3)'}
          />
        </div>
        <Button type="submit" variant="primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem', width: '100%', marginTop: '1rem' }}>START PROJECT</Button>
      </form>
    </section>
  );
};

export default CTA;

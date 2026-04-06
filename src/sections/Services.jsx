import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const services = [
    { title: 'Long-Form Editing', desc: 'Documentaries, podcasts, and education built for watch time — not decoration.' },
    { title: 'Short-Form Content', desc: 'Scroll interruption with structure, not tricks.' },
    { title: 'Motion Graphics', desc: 'Minimal, functional animation. No noise.' },
    { title: 'Content Strategy', desc: 'Decisions backed by data, not opinion.' }
  ];

  return (
    <section className="section surface-shift">
       <div className="label-md" style={{ marginBottom: 'var(--space-8)' }}>SERVICES</div>
       <div className="flex-row gap-16" style={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>
         <h2 className="display-lg" style={{ flex: '1 1 300px', fontSize: '3rem' }}>What We<br/>Execute</h2>
         <div className="flex-col gap-4 stagger-reveal-wrapper" style={{ flex: '2 1 400px' }}>
            {services.map((svc, i) => (
              <div key={i} className="flex-col" style={{ borderBottom: '1px solid rgba(89, 65, 54, 0.15)' }}>
                 <button 
                   className="flex-row justify-between align-center" 
                   style={{ width: '100%', padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                   onClick={() => setOpenIdx(openIdx === i ? null : i)}
                 >
                   <h3 className="display-lg" style={{ fontSize: '2rem', transition: 'color 0.3s ease', margin: 0, color: openIdx === i ? 'var(--primary)' : 'var(--on-surface)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = openIdx === i ? 'var(--primary)' : 'var(--on-surface)'}>
                     {svc.title}
                   </h3>
                   <ArrowRight color="var(--primary)" style={{ transform: openIdx === i ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                 </button>
                 <div style={{ height: openIdx === i ? 'auto' : 0, overflow: 'hidden', paddingBottom: openIdx === i ? '1.5rem' : 0, transition: 'all 0.3s ease', opacity: openIdx === i ? 1 : 0 }}>
                    <p className="body-md">{svc.desc}</p>
                 </div>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default Services;

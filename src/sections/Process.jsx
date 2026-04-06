import React from 'react';

const Process = () => {
  const steps = [
    { title: 'Discovery', desc: 'We assess intent, audience, and positioning.' },
    { title: 'Strategy', desc: 'Structure comes before edits.' },
    { title: 'Editing', desc: 'Narrative, rhythm, control.' },
    { title: 'Review', desc: 'Precise feedback. No chaos.' },
    { title: 'Delivery', desc: 'Final assets, ready to perform.' }
  ];

  return (
    <section className="section surface-shift flex-col align-center text-center stagger-reveal-wrapper">
       <h2 className="label-md" style={{ marginBottom: 'var(--space-16)', letterSpacing: '0.4em' }}>PROCESS</h2>
       <div className="flex-col gap-12" style={{ maxWidth: '600px', width: '100%' }}>
         {steps.map((step, idx) => (
           <div key={idx} className="flex-col align-center gap-3">
             <div className="display-lg" style={{ fontSize: '4rem', opacity: 0.1 }}>0{idx + 1}</div>
             <h3 className="label-md" style={{ fontSize: '1.5rem', color: 'var(--on-surface)' }}>{step.title}</h3>
             <p className="body-md">{step.desc}</p>
           </div>
         ))}
       </div>
    </section>
  );
};

export default Process;

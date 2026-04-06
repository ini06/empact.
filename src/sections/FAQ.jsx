import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [
    { q: 'Who do you work with?', a: 'Creators and brands serious about attention and longevity.' },
    { q: 'Do you follow trends?', a: 'Only when they serve the strategy.' },
    { q: 'Do you take every project?', a: 'No.' },
    { q: 'How do we start?', a: 'Reach out. Fit comes first.' }
  ];

  return (
    <section id="faqs" className="section flex-col gap-12 text-center" style={{ margin: '0 auto', maxWidth: '800px' }}>
      <div className="label-md" style={{ marginBottom: '0' }}>FAQS</div>
      <h2 className="display-lg">FAQs</h2>
      <div className="flex-col text-left">
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ borderBottom: '1px solid rgba(89, 65, 54, 0.15)' }}>
            <button 
              className="flex-row justify-between align-center" 
              style={{ width: '100%', padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--on-surface)' }}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
               <span className="body-md" style={{ fontSize: '1.125rem', color: 'var(--on-surface)' }}>{faq.q}</span>
               <ChevronDown size={20} style={{ transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}/>
            </button>
            <div style={{ height: openIdx === idx ? 'auto' : 0, overflow: 'hidden', paddingBottom: openIdx === idx ? '1.5rem' : 0, transition: 'all 0.3s', opacity: openIdx === idx ? 1 : 0 }}>
              <p className="body-md" style={{ paddingTop: '1rem' }}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

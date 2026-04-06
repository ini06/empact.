import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section surface-shift stagger-reveal-wrapper">
      <div className="label-md" style={{ marginBottom: 'var(--space-16)' }}>CLIENT WORDS</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
        <div className="card flex-col gap-8 frosted-obsidian" style={{ justifyContent: 'space-between' }}>
          <p className="body-md" style={{ fontSize: '1.25rem', color: 'var(--on-surface)' }}>
            “The edits don’t call attention to themselves.<br />The results do.”
          </p>
          <div className="flex-row gap-3 align-center">
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--primary-container)' }}></div>
            <div>
              <div className="label-md" style={{ color: 'var(--on-surface)' }}>HOUSE OF MAVERICK</div>
            </div>
          </div>
        </div>
        <div className="card flex-col gap-8 frosted-obsidian" style={{ justifyContent: 'space-between' }}>
          <p className="body-md" style={{ fontSize: '1.25rem', color: 'var(--on-surface)' }}>
            “They understand structure better than most agencies.”
          </p>
          <div className="flex-row gap-3 align-center">
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-container-highest)' }}></div>
            <div>
              <div className="label-md" style={{ color: 'var(--on-surface)' }}>PRABU MAYAKANNA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

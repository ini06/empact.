import React from 'react';
import { Zap, Layers, Globe, TrendingUp } from 'lucide-react';

const WhyEmpact = () => {
  return (
    <section className="section surface-shift stagger-reveal-wrapper">
      <div className="label-md" style={{ marginBottom: 'var(--space-8)' }}>WHY EMPACT</div>
      <h2 className="display-lg" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-16)', maxWidth: '600px' }}>
        Editing is execution.<br/>Retention is engineering.<br/>
        <span className="body-md" style={{ display: 'block', marginTop: '1rem', fontSize: '1.25rem' }}>Most edits decorate content. We structure it.</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
        <div className="card flex-col gap-3">
           <Zap color="var(--primary)" size={32} />
           <h3 className="label-md" style={{ color: 'var(--on-surface)' }}>Strategic Pacing</h3>
           <p className="body-md">Every second earns the next.</p>
        </div>
        <div className="card flex-col gap-3">
           <Layers color="var(--primary)" size={32} />
           <h3 className="label-md" style={{ color: 'var(--on-surface)' }}>Brand Alignment</h3>
           <p className="body-md">Your voice stays intact. Your position sharpens.</p>
        </div>
        <div className="card flex-col gap-3">
           <Globe color="var(--primary)" size={32} />
           <h3 className="label-md" style={{ color: 'var(--on-surface)' }}>Platform-Native Thinking</h3>
           <p className="body-md">Designed for YouTube, Instagram, and TikTok — not adapted after.</p>
        </div>
        <div className="card flex-col gap-3">
           <TrendingUp color="var(--primary)" size={32} />
           <h3 className="label-md" style={{ color: 'var(--on-surface)' }}>Retention-First Discipline</h3>
           <p className="body-md">If a cut doesn’t serve attention, it doesn’t exist.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyEmpact;

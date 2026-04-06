import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="section stagger-reveal-wrapper" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div className="label-md" style={{ marginBottom: 'var(--space-8)' }}></div>
      <h1 className="display-lg" style={{ maxWidth: '800px', marginBottom: 'var(--space-8)' }}>
        Turning Views<br />into <span style={{ color: 'var(--primary)' }}>Impact</span>
      </h1>
      <p className="body-md" style={{ maxWidth: '500px', marginBottom: 'var(--space-12)', fontSize: '1.125rem' }}>
        Editing with intent. Built for results. We don’t optimize for clicks. We design attention.
      </p>
      <div className="flex-row gap-8" style={{ flexWrap: 'wrap' }}>
        <a href="#work" style={{ textDecoration: 'none' }}>
           <Button variant="secondary">View selected work <ArrowRight size={16} style={{marginLeft: '0.5rem'}}/></Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;

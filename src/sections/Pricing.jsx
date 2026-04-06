import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/Button';

const Pricing = () => {
  return (
    <section className="section stagger-reveal-wrapper">
      <div className="label-md" style={{ marginBottom: 'var(--space-16)' }}>PRICING</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-12)' }}>

        {/* Tier 1 */}
        <div className="card flex-col gap-8" style={{ padding: '3rem 2rem' }}>
          <div>
            <h3 className="label-md" style={{ marginBottom: '1rem' }}>SHORT-FORM CONTENT</h3>
            <div className="display-lg" style={{ fontSize: '2.5rem' }}>₹1,500 – ₹2,599<span className="body-md">/per video</span></div>
          </div>
          <ul className="flex-col gap-list" style={{ listStyle: 'none' }}>
            {['Reels', 'Shorts', 'TikToks', 'Built for retention.', 'Nothing extra. Nothing wasted.'].map((f, i) => (
              <li key={i} className="flex-row align-center gap-3 body-md"><Check size={16} color="var(--primary)" /> {f}</li>
            ))}
          </ul>
          <a href="https://wa.me/919629367182?text=Hello%20Empact%21%20I%27d%20like%20to%20request%20access%20to%20the%20Short-Form%20Content%20tier." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', marginTop: 'auto', width: '100%' }}>
            <Button variant="secondary" style={{ width: '100%' }}>Request access</Button>
          </a>
        </div>

        {/* Tier 2: Premium */}
        <div className="glow-trace-wrapper">
          <div className="glow-trace-inner flex-col gap-8" style={{ padding: '3rem 2rem' }}>
            <div>
              <h3 className="label-md" style={{ marginBottom: '1rem', color: 'var(--on-surface)' }}>LONG-FORM & HIGH-STAKES PROJECTS</h3>
              <div className="display-lg" style={{ fontSize: '2.5rem' }}>Pricing varies<span className="body-md">/by scope and complexity</span></div>
            </div>
            <ul className="flex-col gap-list" style={{ listStyle: 'none' }}>
              {['Long-form', 'Documentaries', 'Podcasts', 'Ongoing systems'].map((f, i) => (
                <li key={i} className="flex-row align-center gap-3 body-md"><Check size={16} color="var(--primary)" /> {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919629367182?text=Hello%20Empact%21%20I%27d%20like%20to%20discuss%20a%20Long-Form%20or%20High-Stakes%20project." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', marginTop: 'auto', width: '100%' }}>
              <Button variant="primary" style={{ width: '100%' }}>Contact us</Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;

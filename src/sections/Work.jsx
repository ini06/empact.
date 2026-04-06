import React, { useRef, useState } from 'react';

const HoverVideoCard = ({ id, title, aspectRatio = '9/16' }) => {
  const iframeRef = useRef(null);

  const handlePlay = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      // Unmute instantly before playing
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 1 }), '*');
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'play' }), '*');
    }
  };

  const handlePause = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      // Pause and softly re-mute to secure browser autoplay limits
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'pause' }), '*');
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 0 }), '*');
    }
  };

  return (
    <div 
      className="card flex-col align-center justify-center" 
      style={{ width: '100%', aspectRatio, backgroundColor: 'var(--surface-container-highest)', border: '1px solid rgba(89, 65, 54, 0.15)', borderRadius: '12px', position: 'relative', overflow: 'hidden', padding: 0 }}
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
      onTouchStart={handlePlay}
    >
      <iframe 
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0`} 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }} 
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        title={title}
      ></iframe>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work" className="section stagger-reveal-wrapper">
      <div className="label-md" style={{ marginBottom: 'var(--space-16)' }}>    SELECTED WORK</div>
      <div className="flex-col gap-8">
        <h2 className="display-lg" style={{ fontSize: '3rem' }}>
          Intent over noise.<br/>
          Precision over volume.
        </h2>
        <p className="body-md">We show only what reflects our standards.</p>
        
        {/* Long Form Container */}
        <div style={{ marginTop: 'var(--space-8)' }}>
           <h3 className="label-md" style={{ marginBottom: '1rem', color: 'var(--on-surface)' }}>LONG-FORM ENGINE</h3>
           <HoverVideoCard id="1149312233" title="Long Form Engine" aspectRatio="16/9" />
        </div>

        {/* Short Form Containers */}
        <div style={{ marginTop: 'var(--space-12)' }}>
           <h3 className="label-md" style={{ marginBottom: '1rem', color: 'var(--on-surface)' }}>SHORT-FORM KINETICS</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-8)' }}>
             {[
               { id: '1149315365', title: 'sfx go' },
               { id: '1149313417', title: 'eng gold' },
               { id: '1149315086', title: 'swigy show reel' }
             ].map((vid, idx) => (
               <HoverVideoCard key={idx} id={vid.id} title={vid.title} />
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Work;

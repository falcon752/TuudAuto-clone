import React from 'react';
import { motion } from 'framer-motion';
import personImg from '../assets/images/person.png';

interface TestimonialData {
  id: number;
  name: string;
  handle: string;
  text: string;
  color: string;
}

const TESTIMONIALS: TestimonialData[] = [
  { id: 1, name: "Jack Q.", handle: "@qjack", text: "I've never seen anything like this before. It's amazing.", color: "#f87171" },
  { id: 2, name: "Jill P.", handle: "@pjill", text: "I don't know what to say. I'm speechless. This is amazing.", color: "#06b6d4" },
  { id: 3, name: "John A.", handle: "@ajohn", text: "I'm at a loss for words. This is amazing.", color: "#6366f1" },
  { id: 4, name: "Jenny H.", handle: "@hjenny", text: "I love it.", color: "#facc15" },
  { id: 5, name: "James B.", handle: "@bjames", text: "Absolutely amazing.", color: "#ec4899" },
  { id: 6, name: "Jane K.", handle: "@kjane", text: "I love this service.", color: "#f97316" },
];

const UserCard: React.FC<TestimonialData> = ({ name, handle, text, color }) => (
  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '0.75rem', margin: '0 0.5rem', flexShrink: 0, minWidth: '250px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
      <div style={{ backgroundColor: color, width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '0.75rem' }}>
        <img src={personImg} alt="person.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div>
        <p style={{ fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>{name}</p>
        <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: 0 }}>{handle}</p>
      </div>
    </div>
    <p style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.4 }}>'{text}'</p>
  </div>
);

const TestimonialsMarquee: React.FC<{ items: TestimonialData[], direction?: 'left' | 'right', speed?: number }> = ({ items, direction = 'left', speed = 50 }) => {
  const animationName = direction === 'left' ? 'scroll-left' : 'scroll-right';
  return (
    <div style={{ overflow: 'hidden', position: 'relative', whiteSpace: 'nowrap', margin: '1rem 0', maskImage: 'linear-gradient(to right, transparent 10%, black 50%, black 50%, transparent 90%)', WebkitMaskImage: 'linear-gradient(to right, transparent 10%, black 50%, black 50%, transparent 90%)' }}>
      <div style={{ display: 'inline-flex', animation: `${animationName} ${speed}s linear infinite` }}>
        {[...items, ...items].map((item, index) => <UserCard key={index} {...item} />)}
      </div>
    </div>
  );
};

const TextMarquee: React.FC<{ text: string, speed?: number }> = ({ text, speed = 30 }) => {
  const repeatedText = `${text} ••• `;
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', marginTop: '2rem', backgroundColor: '#ffffff', padding: '1rem 0' }}>
      <div style={{ display: 'inline-block', animation: `scroll-left ${speed}s linear infinite` }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} style={{ fontSize: '2rem', fontWeight: 700, padding: '0 2rem', display: 'inline-block', color: '#111827' }}>{repeatedText}</span>
        ))}
      </div>
    </div>
  );
};

const Particle: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <motion.div initial={{ x, y, rotate: 45, opacity: 0.8 }} animate={{ y: '100vh', opacity: 0 }} transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, ease: 'linear' }} style={{ width: 8, height: 8, backgroundColor: '#7C3AED', position: 'absolute', borderRadius: '50%' }} />
);

export const Testimonials: React.FC = () => {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const row1Data = TESTIMONIALS.slice(0, half);
  const row2Data = TESTIMONIALS.slice(half);

  const particles = Array.from({ length: 50 }, () => ({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }));

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0', position: 'relative', overflow: 'hidden' }}>
      {particles.map((p, i) => <Particle key={i} x={p.x} y={p.y} />)}
      <TestimonialsMarquee items={row1Data} direction="left" />
      <TestimonialsMarquee items={row2Data} direction="right" />
      <TextMarquee text="TuudAuto Your Trusted Car Transport Partner" />
      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
    </div>
  );
};

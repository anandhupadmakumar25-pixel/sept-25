import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';

const allImages = [
  "IMG-20260307-WA0028.jpg", "IMG-20260331-WA0050.jpg", "IMG-20260528-WA0034.jpg",
  "IMG-20260807-WA0026.jpg", "IMG-20260822-WA0095.jpg", "IMG-20260924-WA0008.jpg",
  "IMG-20260924-WA0041.jpg", "IMG-20260924-WA0042.jpg", "IMG-20260924-WA0043.jpg",
  "IMG-20260924-WA0044.jpg", "IMG-20260924-WA0045.jpg", "IMG-20260924-WA0046.jpg",
  "IMG-20260924-WA0047.jpg", "IMG-20260924-WA0048.jpg", "IMG-20260924-WA0049.jpg",
  "IMG-20260924-WA0050.jpg", "IMG-20260924-WA0051.jpg",
  "WhatsApp Image 2026-09-24 at 21.30.02 (1).jpeg", "WhatsApp Image 2026-09-24 at 21.30.02 (2).jpeg",
  "WhatsApp Image 2026-09-24 at 21.30.02.jpeg", "WhatsApp Image 2026-09-24 at 21.30.03.jpeg",
  "WhatsApp Image 2026-09-24 at 21.30.04.jpeg", "WhatsApp Image 2026-09-24 at 21.30.05.jpeg",
  "WhatsApp Image 2026-09-24 at 21.30.06 (1).jpeg", "WhatsApp Image 2026-09-24 at 21.30.06.jpeg",
  "WhatsApp Image 2026-09-24 at 21.30.07.jpeg", "WhatsApp Image 2026-09-24 at 21.30.08 (1).jpeg",
  "WhatsApp Image 2026-09-24 at 21.30.08.jpeg", "WhatsApp Image 2026-09-24 at 21.30.09 (1).jpeg",
  "WhatsApp Image 2026-09-24 at 21.30.09.jpeg", "WhatsApp Image 2026-09-24 at 21.30.10 (1).jpeg",
  "WhatsApp Image 2026-09-24 at 21.30.10 (2).jpeg", "WhatsApp Image 2026-09-24 at 21.30.10.jpeg",
  "WhatsApp Image 2026-09-24 at 21.30.12.jpeg", "file_00000000da688211af73dbc9e3cfbcab.png"
].sort(() => 0.5 - Math.random()); // Shuffled once on load

const getImg = (idx) => `${import.meta.env.BASE_URL}assets/${allImages[idx % allImages.length]}`;

const pageVariants = {
  initial: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
  in: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 2, ease: "easeInOut" } },
  out: { opacity: 0, scale: 1.05, filter: 'blur(10px)', transition: { duration: 1.5, ease: "easeInOut" } }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 2, duration: 2, ease: "easeOut" }
  })
};

const Opening = ({ onNext }) => (
  <motion.div
    className="chapter-container"
    initial="initial" animate="in" exit="out" variants={pageVariants}
    style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}
  >
    {/* Decorative rotating celestial rings */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      style={{
        position: 'absolute', width: '70vw', height: '70vw', maxWidth: '600px', maxHeight: '600px',
        borderRadius: '50%', border: '1px solid rgba(230, 211, 168, 0.1)',
        borderTopColor: 'rgba(230, 211, 168, 0.3)',
        borderBottomColor: 'rgba(230, 211, 168, 0.3)'
      }}
    />
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      style={{
        position: 'absolute', width: '85vw', height: '85vw', maxWidth: '750px', maxHeight: '750px',
        borderRadius: '50%', border: '1px dashed rgba(255, 255, 255, 0.05)',
      }}
    />

    {/* Subtle glow behind text */}
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 4 }}
      style={{ position: 'absolute', width: '300px', height: '300px', background: 'var(--accent-gold)', filter: 'blur(100px)', borderRadius: '50%' }}
    />

    <motion.p 
      custom={1} initial="hidden" animate="visible" variants={textVariants} 
      style={{ fontSize: '0.8rem', letterSpacing: '8px', marginBottom: '1.5rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', zIndex: 10 }}
    >
      Before you enter... 🌙
    </motion.p>
    
    <motion.h1 
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }} 
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} 
      transition={{ duration: 3, delay: 1.5, ease: 'easeOut' }}
      className="serif" 
      style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-gold)', textAlign: 'center', lineHeight: 1.2, textShadow: '0 0 40px rgba(230,211,168,0.4)', zIndex: 10, padding: '0 20px' }}
    >
      I made a little<br/>universe just for you. ✨
    </motion.h1>

    <motion.div 
      initial={{ height: 0 }} animate={{ height: '60px' }} transition={{ duration: 2, delay: 3 }}
      style={{ width: '1px', background: 'linear-gradient(to bottom, var(--accent-gold), transparent)', margin: '2rem 0', zIndex: 10 }} 
    />

    <motion.button
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ delay: 4.5, duration: 2 }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(230, 211, 168, 0.5)", textShadow: "0 0 10px rgba(255,255,255,0.8)" }}
      whileTap={{ scale: 0.95 }}
      className="cinematic-btn" 
      onClick={onNext}
      style={{ zIndex: 10, padding: '12px 30px', letterSpacing: '4px' }}
    >
      <motion.span
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Enter My World
      </motion.span>
    </motion.button>
  </motion.div>
);

const Chapter1 = ({ onNext }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 4000);
    const timer2 = setTimeout(() => setStep(2), 8000);
    const timer3 = setTimeout(() => setStep(3), 12000);
    const timer4 = setTimeout(() => setStep(4), 16000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); clearTimeout(timer4); }
  }, []);

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '300px', height: '300px', marginBottom: '3rem' }}>
        <motion.div
          animate={{ x: step >= 3 ? 80 : 0, scale: step >= 3 ? 1.2 : 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
          style={{ position: 'absolute', left: '15%', top: '35%', width: '70px', height: '70px', borderRadius: '50%', background: `url(${getImg(12)})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 0 40px rgba(255,255,255,0.5)', border: '2px solid rgba(255,255,255,0.8)' }}
        />
        <motion.div
          animate={{ x: step >= 3 ? -80 : 0, scale: step >= 3 ? 1.2 : 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
          style={{ position: 'absolute', right: '15%', top: '35%', width: '70px', height: '70px', borderRadius: '50%', background: `url(${getImg(24)})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 0 40px rgba(230, 211, 168, 0.5)', border: '2px solid rgba(230,211,168,0.8)' }}
        />
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100px' }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', height: '2px', background: 'linear-gradient(90deg, rgba(255,255,255,0.8), rgba(230,211,168,0.8))', boxShadow: '0 0 20px rgba(230,211,168,0.8)', zIndex: -1 }}
          />
        )}
      </div>

      <div style={{ height: '100px', textAlign: 'center' }}>
        <AnimatePresence mode="wait">
          {step === 1 && <motion.h2 key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className="serif" style={{ fontSize: '2rem' }}>Once upon a time... 💫</motion.h2>}
          {step === 2 && <motion.h2 key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className="serif" style={{ fontSize: '2rem' }}>There were two completely different worlds. 🌍</motion.h2>}
          {step >= 3 && <motion.h2 key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="serif" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)' }}>And somehow... they found each other. ❤️</motion.h2>}
        </AnimatePresence>
      </div>

      {step >= 4 && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="cinematic-btn" onClick={onNext} style={{ marginTop: '2rem' }}>
          Continue
        </motion.button>
      )}
    </motion.div>
  );
};

const Chapter2 = ({ onNext }) => (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
      style={{ width: '80%', maxWidth: '600px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <img src={`${import.meta.env.BASE_URL}assets/first-memory.jpg`} alt="First memory" style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.src = getImg(0); }} />
    </motion.div>

    <motion.h2 custom={1.5} initial="hidden" animate="visible" variants={textVariants} className="serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
      And then you happened. 🥺
    </motion.h2>
    <motion.h3 custom={3} initial="hidden" animate="visible" variants={textVariants} className="serif" style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>
      My ordinary world suddenly became a little more beautiful. 🌸
    </motion.h3>

    <motion.button custom={4.5} initial="hidden" animate="visible" variants={textVariants} className="cinematic-btn" onClick={onNext} style={{ marginTop: '3rem' }}>
      Explore Our Universe
    </motion.button>
  </motion.div>
);

const Chapter3 = ({ onNext }) => {
  const [activeMemories, setActiveMemories] = useState([]);
  const [foundSecret, setFoundSecret] = useState(false);

  // Generate a larger constellation
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 70 + 15,
      text: `Memory ${i + 1} ❤️`,
      img: getImg(i + 1),
      secret: i === 15 // One secret star
    }));
    generated[15].text = "You found one.\n\nBut there are still a few things I haven't told you...";
    setMemories(generated);

    // Auto-reveal the Next button after 8 seconds so the user isn't stuck
    const t = setTimeout(() => setFoundSecret(true), 8000);
    return () => clearTimeout(t);
  }, []);

  const openMemory = (m) => {
    if (!activeMemories.find(active => active.id === m.id)) {
      setActiveMemories([...activeMemories, m]);
    }
    setFoundSecret(true); // Always reveal next button on any click
  };

  const closeMemory = (e, id) => {
    e.stopPropagation();
    setActiveMemories(activeMemories.filter(m => m.id !== id));
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
      <h2 className="serif" style={{ position: 'absolute', top: '10%', width: '100%', textAlign: 'center', fontSize: '2rem', opacity: 0.7 }}>Our Constellation</h2>
      <p style={{ position: 'absolute', top: '15%', width: '100%', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>Touch the stars to reveal our memories</p>

      {memories.map((m) => (
        <motion.div
          key={m.id}
          whileHover={{ scale: 2, zIndex: 100 }}
          onClick={() => openMemory(m)}
          style={{
            position: 'absolute', left: `${m.x}%`, top: `${m.y}%`,
            width: '35px', height: '35px',
            background: `url(${m.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%', cursor: 'pointer',
            boxShadow: m.secret ? '0 0 20px var(--accent-gold)' : '0 0 10px rgba(255,255,255,0.3)',
            border: m.secret ? '2px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.6)',
            zIndex: 10
          }}
        />
      ))}

      <AnimatePresence>
        {activeMemories.map((m, index) => (
          <motion.div
            key={m.id}
            drag
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-50%', rotate: Math.random() * 20 - 10 }}
            animate={{ opacity: 1, scale: 1, zIndex: 20 + index }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileDrag={{ scale: 1.05, zIndex: 100 }}
            style={{
              position: 'absolute', top: '50%', left: '50%',
              background: 'rgba(3, 8, 22, 0.95)', padding: '1.5rem', borderRadius: '12px',
              border: '1px solid rgba(230, 211, 168, 0.4)', textAlign: 'center',
              width: '280px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              cursor: 'grab'
            }}
          >
            <div style={{ width: '100%', height: '180px', background: 'rgba(255,255,255,0.08)', marginBottom: '1rem', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={m.img} alt="Memory" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <p className="serif" style={{ fontSize: '1.2rem', whiteSpace: 'pre-line', color: m.secret ? 'var(--accent-gold)' : 'white' }}>{m.text}</p>
            <button className="cinematic-btn" style={{ marginTop: '1rem', fontSize: '10px', padding: '6px 16px' }} onClick={(e) => closeMemory(e, m.id)}>Close</button>
          </motion.div>
        ))}
      </AnimatePresence>

      {foundSecret && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="cinematic-btn" style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 50 }} onClick={onNext}>
          Continue the Story
        </motion.button>
      )}
    </motion.div>
  );
};

const Chapter4 = ({ onNext }) => {
  const [step, setStep] = useState(0);
  const phrases = [
    "Your smile.",
    "Your little habits.",
    "The way you care.",
    "The way you make ordinary days feel special.",
    "And the way you somehow became home."
  ];

  useEffect(() => {
    let timers = [];
    for (let i = 0; i <= phrases.length; i++) {
      timers.push(setTimeout(() => setStep(i), i * 3500 + (i === phrases.length ? 1000 : 0)));
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <AnimatePresence mode="wait">
          {step < phrases.length ? (
            <motion.h2
              key={step} initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="serif" style={{ fontSize: '2.5rem', color: step === phrases.length - 1 ? 'var(--accent-gold)' : 'white' }}
            >
              {phrases[step]}
            </motion.h2>
          ) : null}
        </AnimatePresence>
      </div>

      {step >= phrases.length && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="cinematic-btn" onClick={onNext}>
          Our Journey
        </motion.button>
      )}
    </motion.div>
  );
};

const Chapter5 = ({ onNext }) => {
  // Timeline chapter
  const events = [
    { title: "THE BEGINNING", img: `${import.meta.env.BASE_URL}assets/IMG-20260924-WA0049.jpg` },
    { title: "THE MOMENTS", img: `${import.meta.env.BASE_URL}assets/IMG-20260924-WA0043.jpg` },
    { title: "THE LAUGHTER", img: `${import.meta.env.BASE_URL}assets/WhatsApp Image 2026-09-24 at 21.30.09.jpeg` },
    { title: "THE CRAZY DAYS", img: `${import.meta.env.BASE_URL}assets/IMG-20260924-WA0046.jpg` },
    { title: "THE QUIET MOMENTS", img: `${import.meta.env.BASE_URL}assets/WhatsApp Image 2026-09-24 at 21.30.02.jpeg` },
    { title: "US", img: `${import.meta.env.BASE_URL}assets/IMG-20260924-WA0051.jpg` }
  ];

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '10%', overflowY: 'auto' }}>
      <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '4rem', color: 'var(--accent-gold)' }}>Our Timeline</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4rem', paddingBottom: '20vh' }}>
        {events.map((ev, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5 }} style={{ textAlign: 'center' }}>
            <div style={{ width: '250px', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={ev.img} alt={ev.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <h3 style={{ letterSpacing: '3px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{ev.title}</h3>
            {i < events.length - 1 && <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--accent-gold), transparent)', margin: '2rem auto 0' }} />}
          </motion.div>
        ))}
        <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 1 }} className="cinematic-btn" onClick={onNext}>
          Next
        </motion.button>
      </div>
    </motion.div>
  );
};

const Chapter6 = ({ onNext }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 3000);
    const t2 = setTimeout(() => setStep(2), 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <AnimatePresence mode="wait">
        {step === 0 && <motion.h2 key="0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="serif" style={{ fontSize: '2rem' }}>That's the end...</motion.h2>}
        {step === 1 && <motion.h2 key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="serif" style={{ fontSize: '2rem' }}>...or maybe not.</motion.h2>}
      </AnimatePresence>
      {step === 2 && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="cinematic-btn" onClick={onNext}>
          ONE MORE THING
        </motion.button>
      )}
    </motion.div>
  );
};

const FinalSurprise = () => {
  const [step, setStep] = useState(0);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 2000);
    const t2 = setTimeout(() => setStep(2), 5000);
    const t3 = setTimeout(() => setStep(3), 8000);
    const t4 = setTimeout(() => setStep(4), 11000);
    const t5 = setTimeout(() => setStep(5), 14000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} style={{ height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '5vh', paddingBottom: '10vh', background: 'radial-gradient(circle at center, rgba(230,211,168,0.15) 0%, transparent 60%)', overflowY: 'auto' }}>

      {/* Huge Glowing Moon */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.3, scale: 1 }} transition={{ duration: 5 }} style={{ position: 'absolute', top: '10%', width: '40vh', height: '40vh', borderRadius: '50%', background: 'var(--accent-gold)', filter: 'blur(80px)', zIndex: 0 }} />

      <div style={{ zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {step >= 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} style={{ width: '300px', height: '400px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(230,211,168,0.3)', overflow: 'hidden' }}>
            <img src={getImg(37)} alt="Best Couple" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} style={{ marginBottom: '2rem' }}>
            <h1 className="serif" style={{ fontSize: '3rem', letterSpacing: '4px', margin: 0 }}>TWO WORLDS</h1>
            <h1 className="serif" style={{ fontSize: '3rem', letterSpacing: '4px', color: 'var(--accent-gold)' }}>ONE STORY</h1>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="serif" style={{ fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '400px', marginBottom: '3rem', color: 'var(--text-muted)' }}>
            Two worlds.<br />
            One unexpected meeting.<br />
            A thousand memories.<br />
            And one person I'd choose in every lifetime.
          </motion.p>
        )}

        {step >= 4 && (
          <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2.5 }} className="serif" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', marginBottom: '2rem' }}>
            HAPPY BIRTHDAY MY LUTTUSE ❤️
          </motion.h1>
        )}

        {step >= 5 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="serif" style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '3rem' }}>
            "If I had to choose again,<br />
            I'd still choose you.<br />
            Every time."
          </motion.p>
        )}

        {step >= 5 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 2 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <button onClick={() => setShowLetter(true)} style={{ background: 'transparent', border: 'none', color: 'var(--accent-gold)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
              <Mail size={32} />
              <span className="serif" style={{ fontSize: '1.1rem' }}>I wrote you something...</span>
            </button>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <p className="serif" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Ready for your real birthday surprise?</p>
              <button className="cinematic-btn" onClick={() => alert("Sparkles and fireworks! Now come find me.")}>YES ❤️</button>
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {showLetter && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#fdfbf7', color: '#333', padding: '3rem', borderRadius: '8px', maxWidth: '500px', width: '90%', position: 'relative', maxHeight: '80vh', overflowY: 'auto' }}>
              <button onClick={() => setShowLetter(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#666' }}>&times;</button>
              <div className="serif" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p><strong>My Luttu, ❤️</strong></p>
                <p>Sometimes I think about how our story even started… and honestly, it still feels a little unbelievable.</p>
                <p>The first time I saw you, it was just your WhatsApp DP.</p>
                <p>You were a designer.<br/>I was a developer.<br/>Two completely different people who didn't even know each other.</p>
                <p>At that time, I never imagined that the girl in that little WhatsApp picture would someday become the most important person in my life.</p>
                <p>Then came that New Year.</p>
                <p>Somehow, we connected.<br/>One message became another.<br/>Those messages slowly became conversations.<br/>The conversations became friendship.<br/>And without either of us realizing exactly when it happened…</p>
                <p><strong>that friendship became love. ❤️</strong></p>
                <p>And then came the moment I proposed to you.</p>
                <p>From that day until today, we've created so many memories together. Some big, some small, and some that may look completely ordinary to everyone else — but to me, they are everything.</p>
                <p>Every time we meet, sit together, talk, laugh, or simply enjoy being beside each other, I feel lucky.</p>
                <p>I can spend hours with you and still feel like I need more time.</p>
                <p>Sometimes I feel like I could see you for 24 hours and still not get bored.</p>
                <p>Because it's not really about what we're doing.</p>
                <p><strong>It's about being with you.</strong></p>
                <p>You've become such a huge part of my life that I honestly can't imagine my days without you.</p>
                <p>You love me like I'm your own person.</p>
                <p>You care about me.<br/>You notice the little things.<br/>You worry about me.<br/>You make me feel loved in ways I can't always explain.</p>
                <p>And I hope you know that I feel the same way about you.</p>
                <p>I'm 30, and today you're turning 25.</p>
                <p>Five years between us, two different people, two different worlds…</p>
                <p><strong>but somehow, we found each other.</strong></p>
                <p>And now I don't just think about my life.</p>
                <p>I think about <strong>our life.</strong></p>
                <p>We've already made so many memories, but my favourite thing is knowing that our story isn't finished.</p>
                <p>There are still so many places we'll go.<br/>So many days we'll spend together.<br/>So many silly fights we'll have.<br/>So many things we'll laugh about.<br/>So many difficult moments we'll overcome.<br/>And so many beautiful memories waiting for us.</p>
                <p>And one day, when we look back at everything, I think we'll laugh about how our whole story started…</p>
                <p><strong>with a WhatsApp DP.</strong></p>
                <p>You were once just a girl I happened to see.</p>
                <p>Then you became my friend.</p>
                <p>Then my love.</p>
                <p>And now…</p>
                <p><strong>you're my Luttu. ❤️</strong></p>
                <p>The person I look for.<br/>The person I want beside me.<br/>The person I want to tell everything to.<br/>The person who makes ordinary days feel special.</p>
                <p>I don't want a life where you're not there.</p>
                <p>And I never want you to feel that you have to face life alone.</p>
                <p>Because wherever life takes us, I want <strong>Ettan</strong> to be there for <strong>Luttu</strong>.</p>
                <p>Not just on the happy days.</p>
                <p>On the difficult days too.</p>
                <p>When you're tired, I'll be there.</p>
                <p>When you're upset, I'll be there.</p>
                <p>When you're happy, I'll be the one celebrating with you.</p>
                <p>And when life gets difficult, we'll figure it out together.</p>
                <p>We've already come so far.</p>
                <p>From strangers…<br/>to messages…<br/>to friendship…<br/>to love…<br/>to becoming each other's person.</p>
                <p><strong>Two different worlds.<br/>One unexpected connection.<br/>Countless conversations.<br/>Thousands of memories.<br/>One love.</strong></p>
                <p>And if I had the chance to go back to the very beginning and live it all again…</p>
                <p>I would still choose that first message.</p>
                <p>I would still choose that friendship.</p>
                <p>I would still choose you.</p>
                <p><strong>Every single time. ❤️</strong></p>
                <p>Happy 25th Birthday, my Luttu. 🎂❤️</p>
                <p>You are not just someone I love.</p>
                <p><strong>You are the person I want beside me for all the chapters that are still waiting to be written.</strong></p>
                <p style={{ textAlign: 'right', marginTop: '2rem', fontSize: '1.2rem' }}>Always your <strong>Ettan</strong>. ❤️</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default function Chapters({ currentChapter, nextChapter }) {
  const renderChapter = () => {
    switch (currentChapter) {
      case 0: return <Opening onNext={nextChapter} />;
      case 1: return <Chapter1 onNext={nextChapter} />;
      case 2: return <Chapter2 onNext={nextChapter} />;
      case 3: return <Chapter3 onNext={nextChapter} />;
      case 4: return <Chapter4 onNext={nextChapter} />;
      case 5: return <Chapter5 onNext={nextChapter} />;
      case 6: return <Chapter6 onNext={nextChapter} />;
      case 7: return <FinalSurprise />;
      default: return null;
    }
  };

  return (
    <>
      {/* Aggressively preload all images immediately on load */}
      <div style={{ display: 'none' }}>
        {allImages.map((img, idx) => (
          <link rel="preload" as="image" key={idx} href={`${import.meta.env.BASE_URL}assets/${img}`} />
        ))}
        <link rel="preload" as="image" href={`${import.meta.env.BASE_URL}assets/first-memory.jpg`} />
      </div>
      {renderChapter()}
    </>
  );
}

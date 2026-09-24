import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Music, Music2 } from 'lucide-react';
import Chapters from './Chapters';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--duration': `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // You can place a real audio file in public folder and reference it here
  useEffect(() => {
    audioRef.current = new Audio('/romantic-bg-music.mp3');
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed, waiting for interaction"));
    }
    setIsPlaying(!isPlaying);
  };

  const nextChapter = () => {
    setCurrentChapter(prev => prev + 1);
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <StarBackground />
      
      {currentChapter > 0 && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 50 }}
        >
          <button 
            onClick={toggleAudio}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-gold)',
              cursor: 'pointer',
              opacity: 0.7,
              transition: 'opacity 0.3s'
            }}
          >
            {isPlaying ? <Music size={24} /> : <Music2 size={24} />}
          </button>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        <Chapters currentChapter={currentChapter} nextChapter={nextChapter} key={currentChapter} />
      </AnimatePresence>
    </div>
  );
}

export default App;

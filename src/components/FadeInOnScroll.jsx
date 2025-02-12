import React, { useState, useEffect, useRef } from 'react';
import './FadeText.css';

export default function FadeInOnScroll({ text, delay = 200 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }); 

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-element ${isVisible ? 'fade-in' : 'fade-out'}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};


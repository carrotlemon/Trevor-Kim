import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.createRef();

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
              }
          },
          { threshold: 0.1 }
      );

      if (sectionRef.current) {
          observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
  }, []);

  return (
      <div
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
      {children}
      </div>
  );
};

export default FadeInSection;
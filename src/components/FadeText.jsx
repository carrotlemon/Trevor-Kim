import React, { useState, useEffect } from 'react';
import './FadeText.css';

function FadeText({ text, delay = 200 }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <span className={isVisible ? 'fade-in' : 'fade-out'}>{text}</span>
    );
}
  
export default FadeText;
import React, { useState, useEffect, useRef } from 'react';
import koupen from '../assets/koupen.jpeg';
import FadeText from '../components/FadeText';
import FadeInOnScroll from '../components/FadeInOnScroll';
import { FadeIn } from 'react-scroll-motion';

const FadeInSection = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useState(null);

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

export default function Home() {
    return (
        <>
            <FadeInSection>
                <h1>Home</h1>
                <h1>Welcome to My Website</h1>
            </FadeInSection>
            <p>This is a basic website layout with a top navigation bar and sidebar.</p>
            <h2>Main Content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p>
            <img src={koupen} alt="koupen the penguin dancing to music" width="500" height="600"/>
            {[...Array(25)].map((_, i) => (
                <FadeInSection key={i}>
                <p className="text-xl p-5 rounded-lg shadow-md">
                    This text fades in when you scroll to it!
                </p>
                </FadeInSection>
            ))}
        </>
    );
}
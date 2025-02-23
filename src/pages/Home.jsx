import React, { useState, useEffect, useRef } from 'react';
import koupen from '../assets/koupen.jpeg';
import FadeInSection from '../components/FadeInSection';
import { FadeIn } from 'react-scroll-motion';
import '../index.css'

export default function Home() {
    return (
        <>
            <FadeInSection>
                <p className="text-[50px]">Home</p>
                <p className="text-[50px]">Welcome to My Website</p>
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


/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Components
import { ButtonPrimary, ButtonOutline } from './Button';

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const typewriterTexts = [
    "Building Scalable and Performant Web/Mobile Applications",
    "Delivering Modern Full Stack Solutions",
    "Transforming Ideas into Reality with Code"
];

const Hero = () => {
    const [currentText, setCurrentText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 1200;
    const heroRef = useRef(null);

    useEffect(() => {
        let timeout;
        const fullText = typewriterTexts[textIndex];
        if (!isDeleting && charIndex < fullText.length) {
            timeout = setTimeout(() => {
                setCurrentText(fullText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setCurrentText(fullText.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, typingSpeed);
        } else if (!isDeleting && charIndex === fullText.length) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

    // GSAP scroll-triggered animation
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (heroRef.current) {
            gsap.fromTo(heroRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        }
    }, []);

    return (
    <section id='home' className='pt-28 lg:pt-36 relative overflow-hidden' ref={heroRef}>
            {/* Animated background */}
            <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-sky-400/20 via-zinc-900/80 to-yellow-400/10"></div>
            <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
                <div>
                    <div className='flex items-center gap-3'>
                        <figure className='img-box w-9 h-9 rounded-lg shadow-lg'>
                            <img src='/images/heroimage.png' alt='Jeetu Singh Portrait' width={40} height={40} className='img-cover'/>
                        </figure>
                        <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                            <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                            </span>
                            <span className="sr-only">Status:</span>
                            <span aria-live="polite">Available for freelance work</span>
                        </div>
                    </div>

                    <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 flex items-center'>
                        <span>{currentText}</span>
                        <span className="text-yellow-400 font-bold animate-blink ml-1">|</span>
                    </h2>

                    <div className='flex items-center gap-3'>
                        <ButtonPrimary 
                            label="Download Resume"
                            icon="download"
                            classes="shadow-lg hover:scale-105 focus:scale-105 transition-transform"
                        />
                        <ButtonOutline
                            href="#about"
                            label="Scroll Down"
                            icon="arrow_downward"
                            classes="shadow-lg hover:scale-105 focus:scale-105 transition-transform"
                        />
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden shadow-2xl animate-float'>
                        <img src='/images/hero-banner.png' width={656} height={800} alt='Jeetu Singh' className='w-full'/>
                    </figure>
                </div>
            </div>
            {/* Extra CSS for animation */}
            <style>{`
                @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                .animate-blink { animation: blink 1s steps(2, start) infinite; }
                @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                .animate-float { animation: float 3s ease-in-out infinite; }
                @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
                .animate-gradient { background-size: 200% 200%; animation: gradient 10s ease-in-out infinite; }
            `}</style>
        </section>
    )
}

export default Hero

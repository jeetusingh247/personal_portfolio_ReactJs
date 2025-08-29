/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Component <-- //
import ReviewCard from "./ReviewCard";

const reviews = [
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 1',
      imgSrc: '/images/people-1.jpg',
      company: 'Client 1'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 2',
      imgSrc: '/images/people-2.jpg',
      company: 'Client 2'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 3',
      imgSrc: '/images/people-3.jpg',
      company: 'Client 3'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 4',
      imgSrc: '/images/people-4.jpg',
      company: 'Client 4'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 5',
      imgSrc: '/images/people-5.jpg',
      company: 'Client 5'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 6',
      imgSrc: '/images/people-6.jpg',
      company: 'Client 6'
    }
  ];


import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Review = () => {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;
  const intervalRef = useRef();
  const reviewRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [total]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (reviewRef.current) {
      gsap.fromTo(reviewRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: reviewRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
  }, []);

  const goTo = idx => setCurrent(idx);

  return (
    <section id="reviews" className="section overflow-hidden relative" ref={reviewRef}>
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-sky-400/10 via-zinc-900/80 to-yellow-400/10"></div>
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up text-sky-400">What Our Customers Say</h2>
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="carousel flex items-stretch gap-6 mt-8 reveal-up">
            <div
              className="carousel-item transition-all duration-700 active"
              style={{ minWidth: '100%', opacity: 1, transform: 'scale(1)' }}
            >
              <ReviewCard {...reviews[current]} />
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-yellow-400' : 'bg-zinc-700'}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to review ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient { background-size: 200% 200%; animation: gradient 10s ease-in-out infinite; }
        .carousel { overflow: hidden; }
        .carousel-item { transition: opacity 0.7s, transform 0.7s; }
        .carousel-item.inactive { pointer-events: none; }
      `}</style>
    </section>
  );
}

export default Review

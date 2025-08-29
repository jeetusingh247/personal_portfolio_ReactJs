/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/


import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const aboutItems = [
  { label: 'Projects Delivered', number: 6 },
  { label: 'Years of Experience', number: 2 },
  { label: 'Tech Stack Mastered', number: 12 },
  { label: 'Happy Clients', number: 18 }
];

const timeline = [
  { year: '2020', event: 'Started as Junior Developer' },
  { year: '2021', event: 'Promoted to Full Stack Developer' },
  { year: '2022', event: 'Led Major SaaS Project' },
  { year: '2023', event: 'Freelance & Remote Work' },
  { year: '2024', event: 'Portfolio & Open Source Contributions' }
];


const AnimatedCounter = ({ value, duration = 1200 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = duration / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <span>{count}</span>;
};

const About = () => {
  const aboutRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (aboutRef.current) {
      gsap.fromTo(aboutRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
  }, []);
  return (
    <section id="about" className="section relative overflow-hidden" ref={aboutRef}>
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-yellow-400/10 via-zinc-900/80 to-sky-400/10"></div>
      <div className="container">
        <h2 className="headline-2 reveal-up text-yellow-400 mb-6">About Me</h2>
        <div className="bg-zinc-800/60 mt-4 p-7 rounded-2xl md:p-12 shadow-xl reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hi, I'm Jeetu Singh—a full stack developer and software intern with hands-on experience in Python, Java, C/C++, JavaScript, TypeScript, SQL, and modern web technologies. Currently at Triade LLC, I develop role-based SPAs with React (TypeScript), Azure Entra ID, and FastAPI/PostgreSQL backends, improving multi-tenant access control and orchestrating ETL workflows. Previously at Bit Builders Technologies, I optimized web performance, built advanced WordPress sections, and collaborated using Jira. My academic projects include Struct Studies (full-stack educational platform), Annamaya Vasundhara (environmental web app), and a Stock Analysis Dashboard. I am passionate about building scalable, secure, and beautiful applications, leveraging Docker, Azure, CI/CD, and agentic AI tools to deliver extraordinary results.
          </p>
          <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-8">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key} className="flex flex-col items-center justify-center bg-zinc-900/80 px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold md:text-5xl text-yellow-400">
                    <AnimatedCounter value={number} />
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl ml-1">+</span>
                </div>
                <p className="text-sm text-zinc-400 font-medium">{label}</p>
              </div>
            ))}
            <img src='/images/logo_white.svg' alt='Logo' width={40} height={40} className="ml-auto md:w-[60px] md:h-[60px] drop-shadow-xl" />
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Career Timeline</h3>
            <ul className="timeline flex flex-col gap-4">
              {timeline.map(({ year, event }, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-sky-400/20 text-sky-400 font-bold text-xs min-w-[60px] text-center">{year}</span>
                  <span className="text-zinc-300 text-sm">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient { background-size: 200% 200%; animation: gradient 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default About

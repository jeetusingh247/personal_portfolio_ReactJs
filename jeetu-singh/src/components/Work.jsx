/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Components
import ProjectCard from './ProjectCard';


import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Modern Portfolio Website',
      tags: ['React', 'Vite', 'Material UI', 'Framer Motion', 'React-Icons'],
      projectLink: 'https://your-portfolio-url.com',
      description: 'Built a modern and responsive portfolio website to showcase technical skills, certifications, and key projects. Implemented animations and interactive UI components, increasing visitor engagement by 50%.'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Struct Studies – Full-Stack Educational Web App',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Fuse.js', 'Natural', 'Vite', 'Tailwind CSS', 'Axios'],
      projectLink: '',
      description: 'Developed a full-stack educational platform integrating chatbot, video lectures, and quizzes. Used NLP algorithms for efficient text search and fuzzy matching, boosting user engagement by 60% and reducing data retrieval time by 90%.'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Stock Analysis Dashboard',
      tags: ['React.js', 'Node.js', 'JPMorgan Chase & Co.', 'Google Tools'],
      projectLink: '',
      description: 'Designed and developed a dashboard for real-time stock data visualization, improving trader decision-making by 40%. Integrated open-source tools for live data feed and dynamic chart rendering.'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Annamaya Vasundhara Environment Protection Web Application',
      tags: ['React', 'Vite', 'Material UI', 'Framer Motion', 'Lottie', 'React-Icons', 'React Hook Form', 'Yup', 'React Router'],
      projectLink: '',
      description: 'Built a user-friendly and responsive platform to raise awareness about environmental protection and sustainable practices. Implemented interactive charts and multimedia elements, increasing user engagement by 45%.'
    },
];

const allTags = Array.from(new Set(works.flatMap(w => w.tags)));

const Work = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [modal, setModal] = useState(null);
  const filteredWorks = selectedTag === 'All' ? works : works.filter(w => w.tags.includes(selectedTag));

  // Theme toggle
  const [theme, setTheme] = useState('dark');
  const workRef = useRef(null);
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  // GSAP scroll-triggered animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (workRef.current) {
      gsap.fromTo(workRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: workRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
  }, []);

  return (
    <section id="work" className="section relative overflow-hidden" ref={workRef}>
      <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-yellow-400/10 via-zinc-900/80 to-sky-400/10"></div>
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up text-yellow-400">Featured Projects</h2>
        <div className="flex flex-wrap gap-3 mb-8 reveal-up">
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedTag === 'All' ? 'bg-yellow-400 text-zinc-900' : 'bg-zinc-800 text-zinc-300 hover:bg-yellow-400 hover:text-zinc-900'}`}
            onClick={() => setSelectedTag('All')}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedTag === tag ? 'bg-yellow-400 text-zinc-900' : 'bg-zinc-800 text-zinc-300 hover:bg-yellow-400 hover:text-zinc-900'}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] reveal-up">
          {filteredWorks.map(({ imgSrc, title, tags, projectLink, description }, key) => (
            <div key={key} className="relative group card-3d">
              <div className="card-3d-inner glass">
                <ProjectCard imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up cursor-pointer" />
                <button
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => setModal({ imgSrc, title, tags, projectLink, description })}
                  aria-label={`Preview ${title}`}
                ></button>
              </div>
            </div>
          ))}
        </div>
        {modal && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center" onClick={() => setModal(null)}>
            <div className="bg-zinc-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative animate-float glass"
              onClick={e => e.stopPropagation()}
              style={{
                animation: 'modalIn 0.7s cubic-bezier(.25,.8,.25,1)',
                boxShadow: '0 8px 32px 0 rgba(56,189,248,0.15), 0 1.5px 8px 0 rgba(250,204,21,0.12)'
              }}>
              <img src={modal.imgSrc} alt={modal.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{modal.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {modal.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-sky-400/20 text-sky-400 text-xs font-semibold">{tag}</span>
                ))}
              </div>
              <p className="text-zinc-300 mb-4">{modal.description}</p>
              {modal.projectLink && (
                <a href={modal.projectLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full mt-2">Visit Project</a>
              )}
              <button className="absolute top-3 right-3 text-zinc-400 hover:text-yellow-400 text-xl" onClick={() => setModal(null)} aria-label="Close">&times;</button>
            </div>
            <style>{`
              @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
              .animate-float { animation: float 3s ease-in-out infinite; }
              @keyframes modalIn { 0% { opacity: 0; transform: scale(0.85) translateY(40px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
            `}</style>
          </div>
        )}
      </div>
      <style>{`
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient { background-size: 200% 200%; animation: gradient 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}


export default Work;

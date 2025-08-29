/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Components
import SkillCard from "./SkillCard";


import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { label: 'Python', desc: 'Programming Language', proficiency: 95 },
      { label: 'Java', desc: 'Programming Language', proficiency: 90 },
      { label: 'C/C++', desc: 'Programming Language', proficiency: 85 },
      { label: 'JavaScript', desc: 'Programming Language', proficiency: 95 },
      { label: 'TypeScript', desc: 'Programming Language', proficiency: 90 },
      { label: 'SQL', desc: 'Query Language', proficiency: 90 },
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { imgSrc: '/images/html5.svg', label: 'HTML5', desc: 'Markup', proficiency: 95 },
      { imgSrc: '/images/css3.svg', label: 'CSS3', desc: 'Styling', proficiency: 92 },
      { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'Styling', proficiency: 92 },
      { imgSrc: '/images/react.svg', label: 'React.js', desc: 'Frontend Library', proficiency: 95 },
      { imgSrc: '/images/nodejs.svg', label: 'Node.js', desc: 'Backend Runtime', proficiency: 93 },
      { label: 'FastAPI', desc: 'Backend Framework', proficiency: 90 },
    ]
  },
  {
    category: 'Databases',
    skills: [
      { label: 'MySQL', desc: 'Relational DB', proficiency: 90 },
      { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'NoSQL DB', proficiency: 88 },
      { label: 'PostgreSQL', desc: 'Relational DB', proficiency: 90 },
      { label: 'SQLite', desc: 'Embedded DB', proficiency: 85 },
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { label: 'Docker', desc: 'Containerization', proficiency: 90 },
      { label: 'Microsoft Azure', desc: 'Cloud Platform', proficiency: 85 },
      { label: 'Postman', desc: 'API Testing', proficiency: 90 },
      { label: 'Jira', desc: 'Project Management', proficiency: 85 },
      { label: 'Jenkins', desc: 'CI/CD', proficiency: 80 },
      { label: 'Informatica', desc: 'ETL', proficiency: 80 },
      { label: 'Github', desc: 'Version Control', proficiency: 95 },
      { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Design Tool', proficiency: 80 },
      { label: 'LangChain Ecosystem', desc: 'Agentic AI', proficiency: 80 },
      { label: 'CI/CD', desc: 'Automation', proficiency: 80 },
    ]
  }
];

const ProficiencyBar = ({ value }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setTimeout(() => setWidth(value), 300);
  }, [value]);
  return (
    <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden mt-2">
      <div
        className="h-full bg-yellow-400 rounded-full transition-all duration-700"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};


const Skill = () => {
  const skillRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (skillRef.current) {
      gsap.fromTo(skillRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skillRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
  }, []);
  return (
    <section className="section relative overflow-hidden" ref={skillRef}>
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-sky-400/10 via-zinc-900/80 to-yellow-400/10"></div>
      <div className="container">
        <h2 className="headline-2 reveal-up text-sky-400 mb-6">Skills & Technologies</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up text-lg">
          My expertise spans the full stack: from crafting beautiful, responsive UIs to architecting robust backend systems. Here are the tools and technologies I use to deliver world-class solutions.
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 reveal-up">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="bg-zinc-800/60 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-yellow-400 mb-4">{group.category}</h3>
              <div className="flex flex-col gap-5">
                {group.skills.map(({ imgSrc, label, desc, proficiency }, key) => (
                  <div key={key} className="group flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-900 transition-colors">
                    <SkillCard imgSrc={imgSrc} label={label} desc={desc} classes="" />
                    <div className="flex-1">
                      <ProficiencyBar value={proficiency} />
                      <span className="text-xs text-zinc-400 ml-2">{proficiency}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient { background-size: 200% 200%; animation: gradient 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default Skill

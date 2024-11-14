/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Components
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React.js',
    desc: 'Library'
  },
  {
    imgSrc: '/images/react_native.svg',
    label: 'React Native',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">
          Essential Tools & Technologies I Use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Explore the powerful tools and technologies I leverage to create high-performance, user-friendly, and scalable full-stack web and mobile applications.
        </p>
        <div className="">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard imgSrc={imgSrc} label={label} desc={desc} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skill

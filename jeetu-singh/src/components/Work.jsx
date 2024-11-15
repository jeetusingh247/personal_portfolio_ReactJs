/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Components
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Title of project1',
      tags: ['subtl1', 'subtl1.1', 'subtl1.2'],
      projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'title of project2',
      tags: ['subtl2', 'subtl2.1', 'subtl2.2'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'title of project3',
      tags: ['subtl3', 'subtl3.1', 'subtl3.2'],
      projectLink: ''
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'title of project4',
      tags: ['subtl4', 'subtl4.1', 'subtl4.2'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'title of project5',
      tags: ['subtl5', 'subtl5.1', 'subtl5.2'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'title of project6',
      tags: ['subtl6', 'subtl6.1', 'subtl6.2'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
  ];

const Work = () => {
return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8">
                Featured Projects
            </h2>

            <div className="">
                {works.map(({ imgSrc, title, tags, projectLink }, index) => (
                    <ProjectCard />
                ))}
            </div>
        </div>
    </section>
)
}

export default Work

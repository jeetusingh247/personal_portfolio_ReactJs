/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Node Modules
import {ReactLenis} from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP }  from '@gsap/react';

// --> Regsiter GSAP Plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// --> Components
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WordPressServices from './components/WordPressServices';

const App = () => {

    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            });
        });
    });

    return (
        <ReactLenis root>
        <Header />
        <main>
                <Hero />
                <About />
                <WordPressServices />
                <Skill />
                <Work />
                <Review />
                <Contact />
        </main>
        <Footer />
        </ReactLenis>
    )
}

export default App;


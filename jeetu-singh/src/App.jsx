/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Components
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Review from './components/Review';
import Contact from './components/Contact';

const App = () => {
    return (
        <>
        <Header />
        <main>
            <Hero />
            <About />
            <Skill />
            <Work />
            <Review />
            <Contact />
        </main>
        </>
    )
}

export default App;


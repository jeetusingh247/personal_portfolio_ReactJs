/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Components
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';

const App = () => {
    return (
        <>
        <Header />
        <main>
            <Hero />
            <About />
            <Skill />
        </main>
        </>
    )
}

export default App;


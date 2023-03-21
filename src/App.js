import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './normalize.css';
import './skeleton.css';
import { useRef } from 'react'

function App() {
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const scrollToProjects = () => {
   window.scrollTo({ top:projectsRef.current.offsetTop-40,behavior: "smooth" })
  }
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="App">
      <Nav className="Nav" scrollToHome={scrollToHome} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact}/>
      <div ref={homeRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects ref={projectsRef} />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Nav className="Nav"/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;

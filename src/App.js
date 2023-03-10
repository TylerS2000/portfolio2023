import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import './normalize.css';
import './skeleton.css';
function App() {
  return (
    <div className="App">
      <Nav className="Nav"/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;

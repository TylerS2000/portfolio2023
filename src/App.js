import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css'
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

import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Contacts from './components/Contacts';
import Resume from './components/Resume';
import Logo from './components/Logo';


function App() {
  return (
  	<div className="app-main" id="app">
      <Projects />
      <Contacts />
      <Logo />
      <About />
      <Resume />
    </div>
  );
}

export default App;

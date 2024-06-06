import './App.css';
import { BrowserRouter } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
  <BrowserRouter>
      <div className="app-main" id="app">
        <Home />
        </div>
    </BrowserRouter>
  );
}

export default App;





import React from 'react';
import { Routes, Route } from "react-router-dom";
import Projects from './Projects';
import About from './About';
import Contacts from './Contacts';
import Resume from './Resume';
import Logo from './Logo';

const Home = () => {
   return (
   	<div className="app-main" id="components">
   		<Routes>
   			<Route path="logo" element={<Logo />} />
      		<Route path="about" element={<About />} />
      		<Route path="resume" element={<Resume />} />
      		<Route path="contacts" element={<Contacts />} />
      		<Route path="projects" element={<Projects />} />
      	</Routes>
    </div>
      )
  }

  export default Home;
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Projects from './Projects';
import About from './About';
import Contacts from './Contacts';
import Resume from './Resume';
import Logo from './Logo';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage';
import ContactsPage from './ContactsPage';
import ProjectsPage from './ProjectsPage';


const Home = () => {

   return (
     <div className="app-main" id="components">
       <Logo/>
       <About/>
       <Resume/>
       <Contacts/>
       <Projects/>
    </div>
      )
  }

  export default Home;
import React from 'react';
import Projects from './Projects';
import About from './About';
import Contacts from './Contacts';
import Resume from './Resume';
import Logo from './Logo';



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
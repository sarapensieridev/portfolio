import Projects from './Projects/Projects';
import About from './About/About';
import Resume from './Resume/Resume';
import Logo from './Logo';
import Contacts from './Contacts/Contacts';



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
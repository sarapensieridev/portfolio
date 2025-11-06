import './App.css';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './pages/Home';
import ResumePage from './pages/Resume/ResumePage';
import ContactsPage from './pages/Contacts/ContactsPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import AboutPage from './pages/About/AboutPage';

function App() {
  return (
  <HashRouter>
      <div className="app-main" id="app">
        <Home />
        <Routes>
          <Route path='/' />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        </div>
    </HashRouter>
  );
}

export default App;
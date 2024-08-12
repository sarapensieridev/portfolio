import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import ContactsPage from './components/ContactsPage';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
  <HashRouter>
      <div className="app-main" id="app">
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
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
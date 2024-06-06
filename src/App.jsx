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
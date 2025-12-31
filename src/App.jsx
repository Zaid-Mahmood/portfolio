import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Porfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        theme="dark"
      />
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
             <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

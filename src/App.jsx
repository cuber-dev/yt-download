import { Routes, Route } from "react-router-dom";

import Home from './routes/Home';
import About from './routes/About';
import History from './routes/History';
import Features from './routes/Features';
import NotFound from './routes/NotFound';

import Nav from './routes/components/Nav';
import Contact from './routes/components/Contact';

function App() { 
  return ( <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/History" element={<History />} />
      <Route path="/features" element={<Features />} />
      <Route path="*" element={<NotFound />} />  
    </Routes>
    <Contact />
  </>);
}

export default App;
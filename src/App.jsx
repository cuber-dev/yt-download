import { Routes, Route } from "react-router-dom";

import Home from './routes/Home';
import NotFound from './routes/NotFound';

import Nav from './routes/components/Nav';
import Contact from './routes/components/Contact';

function App() { 
  return ( <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />  
    </Routes> 
    <Contact />
  </>);
}

export default App;
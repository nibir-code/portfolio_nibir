import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./pages/shared/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blogs from './pages/Blogs/Blogs';
import Contact from "./pages/Contact/Contact";






function App() {
  return (
    <div className='bg-dark'>
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="about" element={<About />}/>
         <Route path="blogs" element={<Blogs />}/>
         <Route path="contact" element={<Contact />}/>


         
        
         
      </Routes>
      
    </div>
  );
}

export default App;

import{ BrowserRouter,Routes, Route } from 'react-router-dom'
import React from 'react'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Header from './Components/Header'
//import { Footer } from 'flowbite-react'
//import { Footer } from 'flowbite-react'
import Footer from './Components/Footer'
export default function App() {
  return (
    <BrowserRouter> 
    <Header></Header>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Signin" element={<Signin />}/>
    <Route path="/Signup" element={<Signup />}/>
    <Route path="/Dashboard" element={<Dashboard />}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Projects" element={<Projects />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

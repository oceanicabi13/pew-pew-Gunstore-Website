import './App.css'
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import ProductSection from './components/ProductSection'
import TeamSections from './components/TeamSections'
import Testimonials from './components/Testimonials'
import Content from './components/ContentSection'
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  });
  
  
  return (
    <div>
      <Navbar />
      <Testimonials />
      <ProductSection />
      <Content />
      <TeamSections />
    </div>
  )
}

export default App
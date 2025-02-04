import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navabar/Navbar'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='bg-slate-50'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App

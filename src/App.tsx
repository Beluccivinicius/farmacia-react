import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navabar/Navbar'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CriarCategoria from './pages/criarCategoria/CriarCategoria'

function App() {
  return (
    <div className='bg-slate-50'>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/editarCategoria/:id' element={<CriarCategoria/>}/>
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

import Home from './components/home/home'
import Nav from './components/Nav/Nav'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Avatar from './assets/Avatar chat.png';
import { useState } from 'react'
import Bot from './components/ChatBot/ChatBot';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';





function App() {

  return (
    <>
    <Nav/>
    <Bot/>
    <Routes>
      <Route path='/' element= {<Home></Home>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App

import Home from './components/home/home'
import Nav from './components/Nav/Nav'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Avatar from './assets/Avatar chat.png';
import { useState } from 'react'
import Bot from './components/ChatBot/ChatBot';
import About from './components/About/About';





function App() {

  return (
    <>
    <Nav/>
    <Bot/>
    <Routes>
      <Route path='/' element= {<Home></Home>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/portfolio'/>
      <Route path='/contact'/>
    </Routes>
    </>
  )
}

export default App

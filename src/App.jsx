import { useState } from 'react'
import Nav from './components/Nav/Nav'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/home'/>
      <Route path='/about'/>
      <Route path='/portfolio'/>
      <Route path='/contact'/>
    </Routes>
    </>
  )
}

export default App

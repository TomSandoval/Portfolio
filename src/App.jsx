import Home from './components/home/home'
import Nav from './components/Nav/Nav'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element= {<Home></Home>}/>
      <Route path='/about'/>
      <Route path='/portfolio'/>
      <Route path='/contact'/>
    </Routes>
    </>
  )
}

export default App

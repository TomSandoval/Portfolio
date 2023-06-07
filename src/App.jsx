import Home from './components/home/home'
import Nav from './components/Nav/Nav'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';





function App() {
  return (
    <>
    <Nav/>
    <ChatBot
    steps={[
      {
        id: '1',
        message: 'What number I am thinking?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Number 1', trigger: '4' },
          { value: 2, label: 'Number 2', trigger: '3' },
          { value: 3, label: 'Number 3', trigger: '3' },
        ],
      },
      {
        id: '3',
        message: 'Wrong answer, try again.',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Awesome! You are a telepath!',
        end: true,
      },
    ]}
  />
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

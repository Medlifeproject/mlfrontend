import React from 'react'
import Login from './Components/Login'
import './App.css'
import Signup from './Components/Signup';
import Forgotpass from './Components/Forgotpass'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgotpswrd' element={<Forgotpass/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
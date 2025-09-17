import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from "./pages/Home"
import Contact from './pages/Contact'
import Product from './pages/Product'

import App from './App'

const App2 = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/' element={<App/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>

      </Routes>
    </div>
  )
}

export default App2

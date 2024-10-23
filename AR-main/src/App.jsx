import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import ProductAR from './components/ProductAR'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productAR' element={<ProductAR />} /> 
      </Routes>

       </BrowserRouter>
    </div>
  )
}

export default App







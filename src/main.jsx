import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App'
import './index.css'

// importamos las páginas que vamos a tener
import Login from "./pages/Login"
import Home from "./pages/Home"
import Equipment from './pages/Equipment'
import Monsters from "./pages/Monsters"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Login/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="home/equipment" element={<Equipment/>}/>
          <Route path="home/monsters" element={<Monsters/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

import Login from './pages/Login'
import Home from './pages/Home'
import './App.css'
import Equipment from './pages/Equipment'
import Monsters from './pages/Monsters'
import { Outlet } from 'react-router-dom'

const App = () => {
  

  return (
    <div className="App">
      <Outlet/>
    </div>
  )
}

export default App

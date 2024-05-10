
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './pages/Project'
import { Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Footer from './components/Footer'
import Auth from './components/Auth'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/> 
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      </Routes> 
      <Footer/>
    </>
  )
}

export default App

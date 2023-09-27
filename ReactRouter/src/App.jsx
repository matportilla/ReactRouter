import './App.css'
import Home from './components/home'
import Contacto from './components/Contacto'
import { Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/Contacto' element= {<Contacto/>}/>
    </Routes>
    </>
  )
}

export default App

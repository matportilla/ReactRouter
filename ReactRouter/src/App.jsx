import './App.css'
import Home from './components/home'
import Contacto from './components/Contacto'
import Notfound from './components/Notfound'
import MenuNavBar from './components/MenuNavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <>
    <MenuNavBar/>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/Contacto' element= {<Contacto/>}/>
      <Route path='/*' element= {<Notfound/>}/>
    </Routes>
    <Footer />

    </>
  )
}

export default App

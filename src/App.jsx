
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Home from './components/Home'
import Container from './components/moviePage/Container'
import HeroMovie from './components/moviePage/HeroMovie'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import HomeSupport from './components/supportPage/HomeSupport'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Hero /> <Home /></>} />
        <Route path='/movies' element={<><HeroMovie /> <Container /></>} />
        <Route path='/support' element={<><HomeSupport /></>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Home from './components/Home'
import Container from './components/moviePage/Container'
import HeroMovie from './components/moviePage/HeroMovie'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Hero /> <Home /></> } />
        <Route path='/movies' element={<><HeroMovie /> <Container /></> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

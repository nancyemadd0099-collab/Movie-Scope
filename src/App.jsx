
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Home from './components/Home'
import Container from './components/moviePage/Container'
import HeroMovie from './components/moviePage/HeroMovie'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import HomeSupport from './components/supportPage/HomeSupport'
import HomeSub from './components/subscripePage/HomeSub'
import GenrePage from './components/genrePage/GenrePage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Hero /> <Home /></>} />
        <Route path='/movies' element={<><HeroMovie /> <Container /></>} />
        <Route path='/support' element={<><HomeSupport /></>} />
        <Route path='/subscription' element={<><HomeSub /></>} />
        <Route path='/genre/:id/:title' element={<GenrePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


import './App.css'
import Footer from './components/Footer'
import Hero from './components/homeContent/Hero'
import Home from './components/homeContent/Home'
import Container from './components/moviePage/Container'
import HeroMovie from './components/moviePage/HeroMovie'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import HomeSupport from './components/supportPage/HomeSupport'
import HomeSub from './components/subscripePage/HomeSub'
import GenrePage from './components/genrePage/GenrePage'
import MovieDetails from './components/movieDetails/MovieDetails'
import Register from './components/registerPage/Register'

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
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

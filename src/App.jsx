
import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Hero from './components/hero'
import NavBar from './components/navbar'
import Portfolio from './components/portfolio'
import Skills from './components/skills'
function App() {
  return (
    <>
    <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  )
}

export default App

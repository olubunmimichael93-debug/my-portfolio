import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialBar from './components/SocialBar'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <SocialBar />
      </Router>
    </ThemeProvider>
  )
}

export default App

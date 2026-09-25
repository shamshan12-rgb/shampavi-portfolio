import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Activities from './components/Activities.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import DataScienceBackground from './components/DataScienceBackground.jsx'
import BackToTop from './components/BackToTop.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <div className="app">
      <DataScienceBackground />

      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Activities />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </div>
  )
}

export default App
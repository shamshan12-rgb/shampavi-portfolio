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
import './App.css'

function App() {
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
        <Education />
        <Certifications />
        <Activities />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
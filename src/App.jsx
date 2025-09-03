import './App.css'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation.jsx'
import About from './components/About.jsx'
import Services from './components/Services'
import Rates from './components/Rates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Rates Section */}
      <Rates />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App


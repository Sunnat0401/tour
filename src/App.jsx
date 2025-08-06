import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Destinations from './components/Destinations/Destinations'
import WeeklyOffers from './components/WeeklyOffers/WeeklyOffers'
import VisaSupport from './components/VisaSupport/VisaSupport'
import TravelServices from './components/TravelServices/TravelServices'
import Countries from './components/Countries/Countries'
import BestLocations from './components/BestLocations/BestLocations'
import Contact from './components/Contact/Contact'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Destinations />
      <WeeklyOffers />
      <VisaSupport />
      <TravelServices />
      <Countries />
      <BestLocations />
      <Contact />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

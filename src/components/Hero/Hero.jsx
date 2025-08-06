import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Hero.css'

const Hero = () => {
  const { t } = useTranslation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const cityImages = [
    'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Istanbul
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Dubai
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Antalya
    'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'  // Sharm El Sheikh
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === cityImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        {cityImages.map((image, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{t('heroTitle')}</h1>
          <p className="hero-subtitle">{t('heroSubtitle')}</p>
          <div className="hero-actions">
            <a href="#destinations" className="btn btn-primary">{t('exploreMore')}</a>
            <a href="#contacts" className="btn btn-white">{t('contacts')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

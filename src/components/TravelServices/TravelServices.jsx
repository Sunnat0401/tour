import React from 'react'
import { useTranslation } from 'react-i18next'
import './TravelServices.css'

const TravelServices = () => {
  const { t } = useTranslation()

  return (
    <section className="travel-services section">
      <div className="container">
        <h2 className="section-title">{t('exploreDestinations')}</h2>
        <p className="section-subtitle">{t('exploreDestinationsDesc')}</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Railway Travel" 
              />
              <div className="service-overlay">
                <div className="service-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="service-content">
              <h3 className="service-title">{t('railwayTickets')}</h3>
              <p className="service-description">{t('railwayDesc')}</p>
              <button className="btn btn-primary service-btn">{t('exploreMore')}</button>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Air Travel" 
              />
              <div className="service-overlay">
                <div className="service-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="service-content">
              <h3 className="service-title">{t('airTravel')}</h3>
              <p className="service-description">{t('airTravelDesc')}</p>
              <button className="btn btn-primary service-btn">{t('exploreMore')}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TravelServices

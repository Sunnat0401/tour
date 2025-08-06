import React from 'react'
import { useTranslation } from 'react-i18next'
import './CTA.css'

const CTA = () => {
  const { t } = useTranslation()

  return (
    <section className="cta section">
      <div className="cta-background">
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Travel Background" 
        />
        <div className="cta-overlay"></div>
      </div>
      
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{t('ctaTitle')}</h2>
          <p className="cta-subtitle">{t('ctaSubtitle')}</p>
          
          <div className="cta-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">{t('happyClients')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">{t('destinations')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">{t('yearsExperience')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{t('support')}</div>
            </div>
          </div>
          
          <div className="cta-buttons">
            <button className="btn btn-white cta-btn">
              {t('exploreDestinations')}
            </button>
            <button className="btn btn-outline-white cta-btn">
              {t('contactUs')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

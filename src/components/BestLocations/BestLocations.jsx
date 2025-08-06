import React from 'react'
import { useTranslation } from 'react-i18next'
import './BestLocations.css'

const BestLocations = () => {
  const { t } = useTranslation()

  return (
    <section className="best-locations section">
      <div className="container">
        <h2 className="section-title">{t('bestLocations')}</h2>
        <p className="section-subtitle">{t('visitCountriesDesc')}</p>
        
        <div className="locations-content">
          <div className="locations-image">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Best Locations" 
            />
            <div className="locations-overlay">
              <div className="overlay-content">
                <h3>{t('bestLocations')}</h3>
                <p>{t('visitCountriesDesc')}</p>
              </div>
            </div>
          </div>
          
          <div className="locations-form">
            <div className="form-container">
              <h3 className="form-title">{t('bookDeal')}</h3>
              <form className="booking-form">
                <div className="form-group">
                  <label htmlFor="destination">Destination</label>
                  <select id="destination" className="form-control">
                    <option value="">{t('destinations')}</option>
                    <option value="istanbul">{t('istanbul')}</option>
                    <option value="dubai">{t('dubai')}</option>
                    <option value="antalya">{t('antalya')}</option>
                    <option value="sharm">{t('sharmElSheikh')}</option>
                  </select>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="checkin">Check In</label>
                    <input type="date" id="checkin" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="checkout">Check Out</label>
                    <input type="date" id="checkout" className="form-control" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="adults">Adults</label>
                    <select id="adults" className="form-control">
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4+ Adults</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="children">Children</label>
                    <select id="children" className="form-control">
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3">3+ Children</option>
                    </select>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary form-btn">
                  {t('makeReservation')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestLocations

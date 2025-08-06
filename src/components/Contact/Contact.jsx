import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.css'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact section" id="contacts">
      <div className="container">
        <h2 className="section-title">{t('makeReservationTitle')}</h2>
        <p className="section-subtitle">{t('discoverMore')}</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>{t('phoneCall')}</h3>
                <a href="tel:+998992999996" className="contact-link">
                  +998 99 299 99 96
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>{t('contactEmail')}</h3>
                <a href="mailto:zamonbiznestour@mail.ru" className="contact-link">
                  zamonbiznestour@mail.ru
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>{t('visitOffices')}</h3>
                <p className="contact-link">
                  15/25, Chilanzar - 9, Tashkent city
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="form-title">{t('reservationForm')}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="destination">Preferred Destination</label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="">Select Destination</option>
                    <option value="istanbul">{t('istanbul')}</option>
                    <option value="dubai">{t('dubai')}</option>
                    <option value="antalya">{t('antalya')}</option>
                    <option value="sharm">{t('sharmElSheikh')}</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                  placeholder="Tell us about your travel preferences..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-btn">
                {t('makeReservation')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Countries.css'

const Countries = () => {
  const { t } = useTranslation()

  const countries = [
    {
      id: 1,
      name: t('dubai'),
      population: '8.66 Mil People',
      territory: '41.290 km²',
      price: '$1.100.200',
      description: t('dubaiDesc'),
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: t('antalya'),
      population: '44.48 Mil People',
      territory: '275.400 km²',
      price: '$946.000',
      description: t('antalyaDesc'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: t('sharmElSheikh'),
      population: '67.41 Mil People',
      territory: '551.500 km²',
      price: '$425.600',
      description: t('sharmDesc'),
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: t('istanbul'),
      population: '67.41 Mil People',
      territory: '551.500 km²',
      price: '$425.600',
      description: t('istanbulDesc'),
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <section className="countries section">
      <div className="container">
        <h2 className="section-title">{t('visitCountries')}</h2>
        <p className="section-subtitle">{t('visitCountriesDesc')}</p>
        
        <div className="countries-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="countries-swiper"
          >
            {countries.map((country) => (
              <SwiperSlide key={country.id}>
                <div className="country-card">
                  <div className="country-image">
                    <img src={country.image} alt={country.name} />
                    <div className="country-overlay">
                      <button className="btn btn-white">{t('exploreMore')}</button>
                    </div>
                  </div>
                  <div className="country-content">
                    <h3 className="country-name">{country.name}</h3>
                    <p className="country-description">{country.description}</p>
                    <div className="country-stats">
                      <div className="country-stat">
                        <span className="stat-icon">👥</span>
                        <span className="stat-text">{country.population}</span>
                      </div>
                      <div className="country-stat">
                        <span className="stat-icon">📍</span>
                        <span className="stat-text">{country.territory}</span>
                      </div>
                      <div className="country-stat">
                        <span className="stat-icon">💰</span>
                        <span className="stat-text">{country.price}</span>
                      </div>
                    </div>
                    <button className="btn btn-secondary country-btn">{t('needDirections')}</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Countries

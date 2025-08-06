import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Destinations.css'

const Destinations = () => {
  const { t } = useTranslation()

  const destinations = [
    {
      id: 1,
      name: t('istanbul'),
      population: '44.48 M',
      territory: '275.400 KM²',
      avgPrice: '$946.000',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: t('antalya'),
      population: '8.66 M',
      territory: '41.290 KM²',
      avgPrice: '$1.100.200',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: t('dubai'),
      population: '67.41 M',
      territory: '551.500 KM²',
      avgPrice: '$425.600',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: t('sharmElSheikh'),
      population: '69.86 M',
      territory: '513.120 KM²',
      avgPrice: '$165.450',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <section className="destinations section" id="destinations">
      <div className="container">
        <h2 className="section-title">{t('destinations')}</h2>
        
        <div className="destinations-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="destinations-swiper"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id}>
                <div className="destination-card">
                  <div className="destination-image">
                    <img src={destination.image} alt={destination.name} />
                    <div className="destination-overlay">
                      <button className="btn btn-white">{t('goThere')}</button>
                    </div>
                  </div>
                  <div className="destination-content">
                    <h3 className="destination-name">{destination.name}</h3>
                    <div className="destination-stats">
                      <div className="stat">
                        <span className="stat-label">{t('population')}:</span>
                        <span className="stat-value">{destination.population}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">{t('territory')}:</span>
                        <span className="stat-value">{destination.territory}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">{t('avgPrice')}:</span>
                        <span className="stat-value">{destination.avgPrice}</span>
                      </div>
                    </div>
                    <button className="btn btn-primary destination-btn">{t('exploreMore')}</button>
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

export default Destinations

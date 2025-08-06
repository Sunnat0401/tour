import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './WeeklyOffers.css'

const WeeklyOffers = () => {
  const { t } = useTranslation()

  const offers = [
    {
      id: 1,
      destination: t('istanbul'),
      checkIns: 234,
      price: 420,
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      destination: t('dubai'),
      checkIns: 300,
      price: 700,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      destination: t('antalya'),
      checkIns: 500,
      price: 999,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      destination: t('sharmElSheikh'),
      checkIns: 200,
      price: 800,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      destination: t('usa'),
      checkIns: 400,
      price: null,
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      destination: t('england'),
      checkIns: 234,
      price: null,
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      destination: t('canada'),
      checkIns: 345,
      price: null,
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 8,
      destination: t('europeanUnion'),
      checkIns: 345,
      price: null,
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <section className="weekly-offers section">
      <div className="container">
        <h2 className="section-title">{t('weeklyOffers')}</h2>
        <p className="section-subtitle">{t('weeklyOffersDesc')}</p>
        
        <div className="offers-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="offers-swiper"
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div className="offer-card">
                  <div className="offer-image">
                    <img src={offer.image} alt={offer.destination} />
                    <div className="offer-badge">
                      <span>{offer.checkIns} {t('checkIns')}</span>
                    </div>
                  </div>
                  <div className="offer-content">
                    <h3 className="offer-destination">{offer.destination}</h3>
                    <div className="offer-price">
                      {offer.price ? `$${offer.price}` : ''}
                      <span>/{t('person')}</span>
                    </div>
                    <div className="offer-includes">
                      <h4>{t('dealIncludes')}</h4>
                      <ul>
                        <li>{t('daysTrip')}</li>
                        <li>{t('airplaneBill')}</li>
                        <li>{t('dailyPlaces')}</li>
                      </ul>
                    </div>
                    <button className="btn btn-primary offer-btn">{t('makeReservation')}</button>
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

export default WeeklyOffers

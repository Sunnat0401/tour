import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './VisaSupport.css'

const VisaSupport = () => {
  const { t } = useTranslation()

  const visaCountries = [
    {
      id: 1,
      country: t('china'),
      checkIns: 234,
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      country: t('hongKong'),
      checkIns: 234,
      image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      country: t('european'),
      checkIns: 234,
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      country: t('india'),
      checkIns: 234,
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      country: t('japan'),
      checkIns: 234,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      country: t('saudiArabia'),
      checkIns: 234,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      country: t('oman'),
      checkIns: 234,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <section className="visa-support section">
      <div className="container">
        <h2 className="section-title">{t('visaSupport')}</h2>
        <p className="section-subtitle">{t('visaSupportDesc')}</p>
        
        <div className="visa-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
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
            className="visa-swiper"
          >
            {visaCountries.map((country) => (
              <SwiperSlide key={country.id}>
                <div className="visa-card">
                  <div className="visa-image">
                    <img src={country.image} alt={country.country} />
                    <div className="visa-overlay">
                      <div className="visa-info">
                        <h3 className="visa-country">{country.country}</h3>
                        <p className="visa-checkins">{country.checkIns} {t('checkIns')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="visa-content">
                    <div className="visa-benefits">
                      <h4>{t('visaBenefits')}</h4>
                      <ul>
                        <li>{t('bestPrices')}</li>
                        <li>{t('shortProcessing')}</li>
                        <li>{t('trustworthy')}</li>
                      </ul>
                    </div>
                    <button className="btn btn-primary visa-btn">{t('makeReservation')}</button>
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

export default VisaSupport

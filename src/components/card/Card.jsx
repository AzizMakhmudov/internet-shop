import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Card.scss"
import { useNavigate } from 'react-router-dom'

export default function Card({ title, description, price, img1, img2, img3, id }) {
  const navigate = useNavigate()
  return (
    <>
      <div className="container">
        <section className="myCard">
          <h2 className='myCard__title'>{title}</h2>
          <p className='myCard__description'>{description}</p>
          <span className='myCard__price'>{`Price: $${price}`}</span>
          <Swiper
            style={{ marginTop: "25px", cursor: 'pointer' }}
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={2}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide><img width={'100%'} height={'auto'} src={img1} alt="swiper" /></SwiperSlide>
            <SwiperSlide><img width={'100%'} height={'auto'} src={img2} alt="swiper" /></SwiperSlide>
            <SwiperSlide><img width={'100%'} height={'auto'} src={img3} alt="swiper" /></SwiperSlide>
          </Swiper>
          <button className='myCard__btn--add'>Add to Cart</button>
          <button onClick={() => navigate("/")} className='myCard__btn--back'>Back to Home</button>
        </section>
        <section className="similar">
          <h2 className='similar__heading'>SIMILAR PRODUCTS</h2>
        </section>
      </div>
    </>
  )
}
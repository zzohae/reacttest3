import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function SwiperBanner({ datakey, viewslides }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={viewslides}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {
        datakey.map((v, i) => {
          return (
            <SwiperSlide key={i} style={{ width: "fit-content" }}>
              <img src={v.src} alt={v.alt} />
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
}

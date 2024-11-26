import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperBanner({ datakey, viewslides }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={viewslides}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + datakey[index].alt + '</span>';
        },
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

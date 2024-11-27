import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperBanner({ datakey, viewslides, pagination, hasrwd =false }) {

  const { bannerData, bannerDataMd, bannerDataSm } = datakey;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [responsiveData, setResponsiveData] = useState(bannerData);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (screenWidth < 576) {
      setResponsiveData(bannerDataSm);
    } else if (screenWidth < 992) {
      setResponsiveData(bannerDataMd);
    } else {
      setResponsiveData(bannerData);
    }

    if (!hasrwd) {
      setResponsiveData(bannerData);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth, bannerData, bannerDataMd, bannerDataSm, hasrwd]);

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
      pagination={pagination}
    >
      { responsiveData.map((v, i) => (
        <SwiperSlide key={i} style={{ width: 'fit-content' }}>
          <img src={`/assets/img/banner/${v.src}`} alt={v.alt} />
        </SwiperSlide>
      ))   
    
    }
    </Swiper>
  );
}

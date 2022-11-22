import React from 'react';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import DaoCard from '@/components/shared/card/DaoCard';
import { DaoType } from '@/types/struct';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
  daosData: DaoType[];
};

const DaosInfo = ({ daosData }: Props) => {
  return (
    <div className="px-12">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={daosData.length >= 4 ?true:false}
      >
        <div className="flex justify-center items-center">
          {daosData.map((daoData, i) => (
            <SwiperSlide key={i}>
              <DaoCard daoData={daoData} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default DaosInfo;

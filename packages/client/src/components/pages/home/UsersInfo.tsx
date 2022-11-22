import React from 'react';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { UserCard } from '@/components/shared/card';
import { UserType } from '@/types/struct';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
  usersData: UserType[];
};

const UsersInfo = ({ usersData }: Props) => {
  return (
    <div className="px-12">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
      >
        <div className="flex justify-center items-center">
          {usersData.map((userData, i) => (
            <SwiperSlide key={i}>
              <UserCard userData={userData} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default UsersInfo;

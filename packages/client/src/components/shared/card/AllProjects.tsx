import React from 'react';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ProjectCard } from '@/components/shared/card';
// import { projectsData } from '@/mock';
import { Nodata } from '@/components/shared/parts';
import { useProjectsDataContract } from '@/hooks/contracts/data';

type Props = {};

const AllProjects = ({}: Props) => {
  const { allProjectList } = useProjectsDataContract({});
  return (
    <div className="px-12">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={allProjectList.length >= 4 ?true:false}
      >
        <div className="flex justify-center items-center">
          {allProjectList ? (
            allProjectList.map((project, i) => (
              <SwiperSlide key={i}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))
          ) : (
            <Nodata />
          )}
        </div>
      </Swiper>
    </div>
  );
};

export default AllProjects;

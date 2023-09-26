import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { useData } from "../../../../Context/DataProviders";

const Section = () => {
  const { Slides } = useData();
  return (
    <div className="h-max">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Slides?.map((item: any, idx: number) => (
          <SwiperSlide>
            <div className="w-full">
              <img className="w-full h-full object-cover" src={item.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section;

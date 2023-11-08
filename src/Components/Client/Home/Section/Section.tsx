import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { useData } from "../../../../Context/DataProviders";

const Section = () => {
  const { Slides, Introduction } = useData();
  return (
    <>
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
      <div>
        <div className="flex gap-2 py-5 px-5 d:flex-row p:flex-col d:w-[1300px] p:w-auto mx-auto">
          <div className=" flex-[45%]">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gotter-f5252.appspot.com/o/UI%2Fz4856218610913_6727bf106aac6b5d1cce603d69485eac.jpg?alt=media&token=220bf6d7-6fa2-49ee-9b1d-39f20ed706d1"
              alt="banner"
              className="w-full h-full"
            />
          </div>
          <div className=" flex-[55%] px-10">
            <h3 className="font-LexendDeca font-bold text-[40px]">
              Giới thiệu
            </h3>
            <h3 className="font-UTMAmerican font-bold text-mainred text-center text-[30px] leading-7">
              GÖTTER
            </h3>
            <div
              className="indent-3 mt-5"
              dangerouslySetInnerHTML={{ __html: Introduction?.content }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;

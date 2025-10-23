import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';
import "animate.css";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="w-full h-[300px] md:h-[350px] flex flex-col items-center justify-center bg-orange-200 p-8">
            <h2 className="animate__animated animate__bounce text-5xl font-bold mb-4 text-white">
              Cozy Winter Paws
            </h2>
            <p className="text-lg text-gray-800">
              Keep your pets warm and happy this winter with our cozy outfits.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" w-full  h-[300px] md:h-[350px] flex flex-col items-center justify-center bg-blue-200 p-8">
            <h2 className="animate__animated animate__bounce text-5xl font-bold mb-4 text-white">
              Snuggle Up Time
            </h2>
            <p className="text-lg text-gray-800">
              Cute winter accessories to make your furry friend look adorable.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full  h-[300px] md:h-[350px] flex flex-col items-center justify-center bg-green-200 p-8">
            <h2 className="animate__animated animate__bounce text-5xl font-bold mb-4 text-white">
              Winter Adventures
            </h2>
            <p className="text-lg text-gray-800">
              Explore the winter wonderland with your pets in style and comfort.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

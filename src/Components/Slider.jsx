import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
    "/10002.jpg",
    "/10003.jpg",
    "/10004.jpg",
    "/10005.jpg",
    "/10006.jpg",
    "/10007.jpg",
    "/10008.jpg",
    "/10009.jpg",
    "/10010.jpg",
    "/10011.jpg",
    "/10012.jpg",
    
];

const ImageSlider = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="w-full h-[600px]"
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSlider;

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import "./Carusel.css"

const slides = [
    {
        image: "assets/image/Carousel_1.png",
        title: "RTX ON",
        subtitle: "Ноутбуки и ПК",
    },
    {
        image: "assets/image/Carousel_2.png",
        title: "RTX ON",
        subtitle: "GEFORCE RTX 4477 TI ПК AMIN STORS",
    },
];

const Carousel = () => {
    const lowerComponentRef = useRef(null);

    const handleScrollToLowerComponent = () => {
        if (lowerComponentRef.current) {
            lowerComponentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="relative w-full h-[85vh]">
                <Swiper
                    navigation={true}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    // effect={'fade'}
                    // fadeEffect={{ crossFade: true }}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Autoplay, EffectFade, Pagination]}
                    className="mySwiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat shadow-lg
                        sm:w-[640px]" style={{  backgroundImage: `linear-gradient(#0001, #000), url(${slide.image})`}}>
                            <div className="absolute inset-0 flex items-center justify-start p-6 lg:p-16 sm:pl-[60px] lg:pl-[140px]
                            ">
                                <div className="text-white">
                                    <h1 className="text-[#49DCFF] font-bold mb-4 text-[clamp(14px,2vw,20px)]">{slide.title}</h1>
                                    <h2 className="font-normal mb-8 text-[clamp(24px,6vw,64px)] w-2/5">{slide.subtitle}</h2>
                                    <button onClick={handleScrollToLowerComponent} className="text-black bg-[#49DCFF] text-lg font-medium rounded px-8 py-2 cursor-pointer">
                                        перейти
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div ref={lowerComponentRef} className="h-screen bg-gray-200"></div>
        </>
    );
};

export default Carousel;

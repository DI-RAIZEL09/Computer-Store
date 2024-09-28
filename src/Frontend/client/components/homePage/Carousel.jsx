import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { styled } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: "/assets/image/Carousel_1.png",
    title: "RTX ON",
    subtitle: "Ноутбуки и ПК",
  },
  {
    image: "/assets/image/Carousel_2.png",
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
      <SwiperContainer>
        <Swiper
          navigation={true}
          autoplay={{ delay: 4000 }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, EffectFade, Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideContent style={{ backgroundImage: `linear-gradient(#0001, #000), url(${slide.image})` }}>
                <TextContent>
                  <Title>{slide.title}</Title>
                  <Subtitle>{slide.subtitle}</Subtitle>
                  <Button onClick={handleScrollToLowerComponent}>Перейти</Button>
                </TextContent>
              </SlideContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </>
  );
};

export default Carousel;

const SwiperContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '85vh',
  '.swiper-pagination-bullet': {
    width: '40px',
    height: '3px',
    background: 'transparent',
    borderRadius: '0',
    margin: '0 5px',
  },
  '.swiper-pagination-bullet-active': {
    backgroundColor: '#49DCFF',
  },
});

const SlideContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  height: '80vh',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  paddingLeft: 'clamp(20px, 10vw, 140px)',
  paddingRight: 'clamp(20px, 10vw, 140px)',
});

const TextContent = styled('div')({
  color: '#FFF',
});

const Title = styled('h1')({
  color: '#49DCFF',
  fontWeight: 'bold',
  marginBottom: 'clamp(8px, 2vw, 20px)',
  fontSize: 'clamp(14px, 2vw, 20px)',
});

const Subtitle = styled('h2')({
  fontSize: 'clamp(24px, 6vw, 64px)',
  fontWeight: '400',
  width: '60%',
});

const Button = styled('button')({
  backgroundColor: '#49DCFF',
  color: '#000',
  fontSize: '18px',
  fontWeight: '500',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',
  marginTop: '20px',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#007bb5',
  },
});

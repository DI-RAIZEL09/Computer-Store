import { useState, useEffect } from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Modal from "./HeaderModal";
import HeaderClientBottom from "./HeaderClientBottom";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import BishkekPoint from "./BishkekPoint";

const menuItems = [
  {
    title: "О НАС",
    modalContent: [
      { key: "faq", text: "FAQ" },
      { key: "about_company", text: "О КОМПАНИИ" },
      { key: "reviews", text: "ОТЗЫВЫ" },
    ],
  },
  {
    title: "КЛИЕНТАМ",
    modalContent: [
      { key: "support", text: "ТЕХ.ПОДДЕРЖКА" },
      { key: "delivery_payment", text: "ДОСТАВКА И ОПЛАТА" },
      { key: "warranty", text: "ГАРАНТИЯ" },
    ],
  },
];

const HeaderClientTop = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsHeaderVisible(scrollY <= lastScrollY);
    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <HEADER isVisible={isHeaderVisible}>
        <LEFT>
          <Logo src="/assets/svg/Logo.svg" alt="logo" />
          <Number>
            <PhoneAndroidIcon sx={{ color: "#fff" }} />
            <H4>8 (800) 234 99 19</H4>
          </Number>
          <Point>
            <BishkekPoint/>
          </Point>
        </LEFT>
        <RIGHT>
          <H2>СТАТЬИ</H2>
          {menuItems.map((item, index) => (
            <H2
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.title} <MoreVertIcon sx={{ fontSize: 12 }} />
              <Modal isVisible={hoveredIndex === index}>
                {index === 0 && <ModalHeader />}
                {index === 1 && <ModalHeader2 />}
                {item.modalContent.map((modalItem) => (
                  <ModalButton key={modalItem.key}>
                    <MdSubdirectoryArrowRight /> {modalItem.text}
                  </ModalButton>
                ))}
              </Modal>
            </H2>
          ))}
          <H2>КОНТАКТЫ</H2>
        </RIGHT>
      </HEADER>
      <HeaderClientBottom />
    </>
  );
};

export default HeaderClientTop;


const HEADER = styled.div`
  height: 6vw;
  display: flex;
  background-color: #2c3849;
  justify-content: space-between;
  transition: transform 0.3s ease;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (max-width: 1024px) {
    height: 9vw;
  }
  @media (max-width: 768px) {
    position: fixed;
    transform: translateY(${({ isVisible }) => (isVisible ? "0" : "-100%")});
    height: 10vw;
  }
  @media (max-width: 410px) {
    height: 15vw;
  }
`;

const Logo = styled.img`
  width: 5vw;
  margin-right: 50px;
  margin-left: 51px;
  @media (max-width: 768px) {
    width: 7vw;
  }
  @media (max-width: 520px) {
    width: 10vw;
  }
  @media (max-width: 410px) {
    width: 15vw;
  }
`;

const LEFT = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100vw;
  }
`;

const H4 = styled.h4`
  color: #49dcff;
  font-size: 25px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  @media (max-width: 520px) {
    font-size: 19px;
  }

  @media (max-width: 390px) {
    font-size: 14px;
  }
`;

const Number = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    padding-right: 5vw;
  }
`;

const Point = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RIGHT = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  padding-right: 5vw;
  @media (max-width: 860px) {
    display: none;
  }
`;

const H2 = styled.h2`
  position: relative;
  cursor: pointer;
`;

const ModalHeader = styled.div`
  height: 2px;
  width: 128%;
  background-color: #49dcff;
`;

const ModalHeader2 = styled.div`
  height: 2px;
  width: 124%;
  background-color: #49dcff;
`;

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #1c232e;
  color: white;
  padding: 8px;
  cursor: pointer;
  width: 124%;
  font-size: 12px;
  transition: color 0.9s ease, filter 0.9s ease;

  &:hover {
    color: #49dcff;
  }
`;

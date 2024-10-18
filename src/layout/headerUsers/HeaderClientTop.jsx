import { useState, useEffect } from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Modal from "./HeaderModal";
import HeaderClientBottom from "./HeaderClientBottom";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import BishkekPoint from "./BishkekPoint";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "О НАС",
    modalContent: [
      { key: "faq", text: "FAQ", path: "/faq" },
      { key: "about_company", text: "О КОМПАНИИ", path: "/about-company" },
      { key: "reviews", text: "ОТЗЫВЫ", path: "/reviews" },
    ],
  },
  {
    title: "КЛИЕНТАМ",
    modalContent: [
      { key: "support", text: "ТЕХ.ПОДДЕРЖКА", path: "/support" },
      { key: "delivery_payment", text: "ДОСТАВКА И ОПЛАТА", path: "/delivery-payment" },
      { key: "warranty", text: "ГАРАНТИЯ", path: "/warranty" },
    ],
  },
];

const HeaderClientTop = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation(); // to track the current route

  useEffect(() => {
    // On route change, find the selected index based on the path
    const currentItem = menuItems.find((item) =>
      item.modalContent.some((modalItem) => modalItem.path === location.pathname)
    );
    if (currentItem) {
      const index = menuItems.indexOf(currentItem);
      setSelectedIndex(index);
    }
  }, [location]);

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
          <BishkekPoint />
        </LEFT>
        <RIGHT>
          <StyledLink to="articlesPage">СТАТЬИ</StyledLink>
          {menuItems.map((item, index) => (
            <H2
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={selectedIndex === index ? "active" : ""}
            >
              {item.title} <MoreVertIcon sx={{ fontSize: 12 }} />
              <Modal isVisible={hoveredIndex === index}>
                {item.modalContent.map((modalItem) => (
                  <StyledLink
                    to={modalItem.path}
                    key={modalItem.key}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <ModalButton>
                      <MdSubdirectoryArrowRight /> {modalItem.text}
                    </ModalButton>
                  </StyledLink>
                ))}
              </Modal>
            </H2>
          ))}
          <StyledLink to="contactsPage">КОНТАКТЫ</StyledLink>
        </RIGHT>
      </HEADER>
      <HeaderClientBottom />
    </>
  );
};

export default HeaderClientTop;

// Styles

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
`;

const Logo = styled.img`
  width: 5vw;
  margin-right: 50px;
  margin-left: 51px;
`;

const LEFT = styled.div`
  display: flex;
  gap: 20px;
`;

const H4 = styled.h4`
  color: #49dcff;
  font-size: 25px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const Number = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;

const RIGHT = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  padding-right: 5vw;
`;

const H2 = styled.h2`
  position: relative;
  cursor: pointer;

  &.active {
    color: #49dcff;
  }
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

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5vw;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #49dcff;
  }
`;

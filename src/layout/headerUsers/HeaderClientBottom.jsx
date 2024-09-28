import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import BottomNavigation from "@mui/material/BottomNavigation";
import MemoryIcon from "@mui/icons-material/Memory";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ConstructionIcon from "@mui/icons-material/Construction";
import CartIconStack from "./CartIconStack";
import MenuIconComponent from "./MenuIconComponent";


const HeaderClientBottom = () => {
  const [value, setValue] = useState("recents");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });
  const [inputValue, setInputValue] = useState("");
  const [isFullWidth, setIsFullWidth] = useState(false);
  const modalRef = useRef(null);

  const handleChange = (event, newValue) => setValue(newValue);

  const openModal = (event, fullWidth = false) => {
    const { bottom, left } = event.currentTarget.getBoundingClientRect();
    setIconPosition({
      top: bottom + window.scrollY,
      left: fullWidth ? 0 : left + window.scrollX,
    });
    setIsFullWidth(fullWidth);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (modalIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalIsOpen]);

  const navigationItems = [
    { label: "Конфигуратор ПК", icon: <ConstructionIcon />, value: "recents" },
    { label: "Недорогие ПК", icon: <MemoryIcon />, value: "cheap" },
    { label: "Меню", icon: <MenuIconComponent />, value: "menu" },
    { label: "Поиск", icon: <SearchIcon />, value: "search", fullWidth: true },
    { label: "Корзина", icon: <CartIconStack />, value: "cart" },
  ];

  const headerItems = [
    "Конфигуратор ПК",
    "Недорогие ПК",
    "Игровые ПК",
    "Мощнейшие ПК",
    "ПК на базе AMD",
  ];

  return (
    <>
      <HEADER>
        <LEFT className="flex gap-[14px]">
          {headerItems.map((item, index) => (
            <H3 key={index}>{item}</H3>
          ))}
        </LEFT>
        <RIGHT>
          <IconContainer onClick={(e) => openModal(e, false)}>
            <SearchIcon sx={{ color: "#49dcff" }} />
            <Underline className="underline" />
          </IconContainer>
          <IconContainer>
            <CartIconStack />
            <Underline className="underline" />
          </IconContainer>
          <IconContainer>
            <MenuIconComponent />
            <Underline className="underline" />
          </IconContainer>
        </RIGHT>
      </HEADER>

      <BottomNavigationContainer>
        <BottomNavigation
          sx={{
            width: "100%",
            backgroundColor: "#1c232e",
            ".MuiBottomNavigationAction-root": { color: "#49dcff" },
            ".MuiBottomNavigationAction-root.Mui-selected": {
              color: "#ffffff",
            },
            ".MuiBottomNavigationAction-label": { color: "#ffffff" },
            ".MuiBottomNavigationAction-label.Mui-selected": {
              color: "#49dcff",
            },
          }}
          value={value}
          onChange={handleChange}
        >
          {navigationItems.map((item, index) => (
            <BottomNavigationAction
              key={index}
              label={item.label}
              value={item.value}
              icon={item.icon}
              onClick={(e) => item.fullWidth ? openModal(e, true) : null}
            />
          ))}
        </BottomNavigation>
      </BottomNavigationContainer>

      {modalIsOpen && (
        <ModalOverlay>
          <ModalContent
            ref={modalRef}
            style={{
              top: isFullWidth ? "0" : iconPosition.top,
              left: isFullWidth ? "0" : iconPosition.left,
              position: isFullWidth ? "fixed" : "absolute",
              width: isFullWidth ? "100%" : "30vw",
              transform: isFullWidth ? "none" : "translate(-70%, 10px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Input
              placeholder="Введите запрос..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button
              disabled={!inputValue}
              onClick={closeModal}
              isActive={!!inputValue}
            >
              НАЙТИ
            </Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};


export default HeaderClientBottom;


const HEADER = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1c232e;
  height: 3vw;
  align-items: center;
  padding-left: 2vw;
  @media (max-width: 1024px) {
    height: 5vw;
  }
  @media (max-width: 880px) {
    height: 6vw;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const H3 = styled.div`
  color: #49dcff;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
`;

const LEFT = styled.div`
  @media (max-width: 820px) {
    font-size: 14px;
  }
`;

const RIGHT = styled.div`
  display: flex;
  gap: 3vw;
  margin-right: 5vw;
  align-items: center;
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover .underline {
    opacity: 1;
  }

  
  &.no-underline .underline {
    display: none;
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: -13px;
  height: 2px;
  width: 300%;
  background-color: #49dcff;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;


const BottomNavigationContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #1c232e;
    z-index: 1000;
  }
`;

const ModalOverlay = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  z-index: 1001;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    height: 8vw;
    width: 100vw;
    margin: 0;
  }
`;

const ModalContent = styled.div`
  display: flex;
  position: absolute;
  background-color: #1c232e;
  justify-content: center;
  height: 60px;
  width: 230px;
  margin-top: 5px;
  gap: 1vw;
  align-items: center;
  z-index: 1002;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @media (max-width: 1024px) {
    width: 430px !important;
  }
  @media (max-width: 768px) {
    height: 8vw;
    width: 100vw !important;
    margin-top: 0;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #3f4c5f;
  background-color: #151a22;
  width: 270px;
  outline: none;
  border-radius: 1px;
  color: #49dcff;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const Button = styled.button`
  padding: 10px 30px;
  color: #49dcff;
  border-radius: 4px;
  background-color: #232b39;
  font-size: 16px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

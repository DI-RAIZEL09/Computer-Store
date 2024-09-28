import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import BishkekPoint from './BishkekPoint'; 

const MenuIconComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleMenuClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const categories = [
    'Конфигуратор ПК',
    'Недорогие ПК',
    'Игровые ПК',
    'Мощнейшие ПК',
    'ПК на базе AMD',
  ];

  const articles = [
    { title: 'Новости', id: 1 },
    { title: 'FAQ', id: 2 },
    { title: 'О Компании', id: 3 },
    { title: 'Отзывы', id: 4 },
  ];

  return (
    <>
      <MenuIconContainer onClick={handleMenuClick}>
        <IconContainer>
          <MenuIcon sx={{color:"#49dcff"}} />
        </IconContainer>
      </MenuIconContainer>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>✕</CloseButton>
            <BishkekPoint />
            <Categories>
              {categories.map((category, index) => (
                <H3 key={index}>{category}</H3>
              ))}
            </Categories>
            <Articles>
              <Text>СТАТЬИ</Text>
              <ModalButton>
                <SubdirectoryArrowRightIcon /> НОВОСТИ
              </ModalButton>
            </Articles>
            <AboutUs>
              <Text>О НАС</Text>
              {articles.map(({ title, id }) => (
                <ModalButton key={id}>
                  <SubdirectoryArrowRightIcon /> {title}
                </ModalButton>
              ))}
            </AboutUs>
            <AboutUs>
              <Text>КЛИЕНТАМ</Text>
              <ModalButton>
                <SubdirectoryArrowRightIcon /> ТЕХ.ПОДДЕРЖКА
              </ModalButton>
            </AboutUs>
            <AboutUs>
              <Text>КОНТАКТЫ</Text>
            </AboutUs>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default MenuIconComponent;


const MenuIconContainer = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #151a22;
  color: white;
  padding: 8px;
  margin-top: 10px;
  cursor: pointer;
  width: 124%;
  font-size: 15px;
  transition: color 0.9s ease, filter 0.9s ease;

  &:hover {
    color: #49dcff;

    & img {
      filter: brightness(0) invert(1);
    }
  }
`;

const Articles = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.h3`
  color: #49dcff;
  font-size: 30px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 390px) {
    font-size: 20px;
  }
`;

const Categories = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

const H3 = styled.h3`
  color: #49dcff;
  font-size: 30px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 390px) {
    font-size: 20px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #151a22;
  width: 100%;
  max-width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 50px;
  display: flex;
  flex-direction: column;
  color: #49dcff;
  position: relative;
  transform: translateX(100%);
  animation: slideIn 0.3s forwards;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #49dcff;
  }

  &::-webkit-scrollbar-track {
    background: #344256;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    height: calc(100% - 56px);
  }

  @media (min-width: 769px) {
    height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #1c232e;
  border: none;
  color: #49dcff;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #ffffff;
    color: #49dcff;
  }
`;

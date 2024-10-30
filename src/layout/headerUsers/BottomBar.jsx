import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Badge from '@mui/material/Badge';
import { Menu, Search } from '@mui/icons-material';
import { RiToolsFill } from 'react-icons/ri';
import { MdOutlineShoppingCart } from 'react-icons/md';


const BottomBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #212936;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none; /* Hide on larger screens */
  }
`;

const BottomBarButton = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  cursor: pointer;

  &:active {
    transform: scale(1.05);
  }
`;

const Icon = styled.div`
  margin-bottom: 4px;
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Label = styled.span`
  font-size: 7px;
  color: #49dcff;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: ${props => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const ModalContent = styled.div`
  background: #212936;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  height: auto;
  text-align: center;
  color: #49dcff;
  border-radius: 8px;
  position: relative;

  button {
    background: none;
    border: none;
    color: #49dcff;
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 75px;
  background-color: #212936;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 1500;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;


const BottomBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const menuItems = [
    { 
      to: 'configurationPage',
      icon: '/assets/svg/spares/cpu.svg',
      label: 'Конфигуратор ПК'
    },
    { 
      to: 'inexpensivePage', 
      icon: <RiToolsFill className='size-full text-[#49DCFF]' />, 
      label: 'Недорогие ПК' 
    },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setSearchText('');
  };

  return (
    <>
      <BottomBarContainer>
        {menuItems.map(({ to, icon, label }, index) => (
          <BottomBarButton key={index} onClick={() => navigate(to)}>
            <Icon>
              {typeof icon === 'string' ? <img src={icon} alt={label} /> : icon}
            </Icon>
            <Label>{label}</Label>
          </BottomBarButton>
        ))}
        
        <BottomBarButton onClick={toggleMenu}>
          <Icon>
            <Menu sx={{ fill: '#49DCFF' }} />
          </Icon>
          <Label>Меню</Label>
        </BottomBarButton>

        <BottomBarButton onClick={toggleSearch}>
          <Icon>
            <Search sx={{ fill: '#49DCFF' }} />
          </Icon>
          <Label>Поиск</Label>
        </BottomBarButton>

        <BottomBarButton onClick={() => navigate('cart')}>
          <Icon>
          <Badge
              overlap="circular"
              badgeContent={4}
              sx={{'& .MuiBadge-badge': {
                color: '#49DCFF',
                border: '2px solid',
                fontSize:'10px',
                bgcolor:'#1C232E'
              }}}
            >
              <MdOutlineShoppingCart color="#49DCFF" />
            </Badge>
          </Icon>
          <Label>Корзина</Label>
        </BottomBarButton>
      </BottomBarContainer>

      <ModalOverlay isOpen={isMenuOpen} onClick={toggleMenu}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <h2>Меню</h2>
          {/* Original information for the modal */}
          <p>Здесь будет информация о ваших настройках, акциях и предложениях!</p>
          <button onClick={toggleMenu}>&times;</button>
        </ModalContent>
      </ModalOverlay>

      {isSearchOpen && (
        <SearchContainer>
          <SearchInput
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Введите запрос для поиска"
          />
        </SearchContainer>
      )}
    </>
  );
};

export default BottomBar;

import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

const BottomBarButton = styled.button`
  width: 20%;
  min-width: 64px;
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
`;

const ModalContent = styled.div`
  background: #212936;
  padding: 20px;
  width: 95%;
  height: 70vh;
  top: 70px;
  text-align: center;
  color: #212936;
  border-radius: 8px;
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

const Box = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const City = styled.div`
  display: flex;
  gap: 12px;
  font-family: sans-serif;
  transition: all;
  padding-bottom: 20px;
`;

const CitySelector = styled.select`
  padding: 5px;
  border-radius: 4px;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  background: #212936;
  color: #49DCFF;
`;
  

function BottomBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [city, setCity] = useState('Бишкек'); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchText('');
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <BottomBarContainer>
        <Box>
            <Link to="configurationPage">
              <BottomBarButton>
                <Icon><img src="assets/svg/headerIcon/Setting.svg" alt="Конфигуратор ПК" /></Icon>
                <Label>Конфигуратор ПК</Label>
              </BottomBarButton>
            </Link>
        </Box>

        <Box>
            <Link to="inexpensivePage">
              <BottomBarButton>
                <Icon><img src="assets/svg/headerIcon/CPU.svg" alt="Недорогие ПК" /></Icon>
                <Label>Недорогие ПК</Label>
              </BottomBarButton>
            </Link>
        </Box>

        <Box>
            <BottomBarButton onClick={toggleMenu}>
              <Icon><img src="assets/svg/headerIcon/Menu.svg" alt="Меню" /></Icon>
              <Label>Меню</Label>
            </BottomBarButton>
        </Box>
        
        <Box>
            <BottomBarButton onClick={toggleSearch}>
              <Icon><img src="assets/svg/headerIcon/lupa.svg" alt="Поиск" /></Icon>
              <Label>Поиск</Label>
            </BottomBarButton>
        </Box>

        <Box>
            <Link to="cart">
              <BottomBarButton>
                <Icon><img src="assets/svg/headerIcon/cart.svg" alt="Корзина" /></Icon>
                <Label>Корзина</Label>
              </BottomBarButton>
            </Link>
        </Box>
      </BottomBarContainer>

      <ModalOverlay isOpen={isMenuOpen} onClick={toggleMenu}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <div className=' flex flex-row justify-between'>
          <City>
            <img src="assets/svg/headerIcon/point.svg" alt=""/>
            <CitySelector value={city} onChange={handleCityChange}>
              <option value="Бишкек">Бишкек</option>
              <option value="Ош">Ош</option>
              <option value="Талас">Талас</option>
              <option value="Нарын">Нарын</option>
              <option value="Каракол">Каракол</option>
            </CitySelector>
          </City>
            <button onClick={toggleMenu} className=' text-[#49DCFF] text-3xl'>✕</button>
          </div>
          <article className=' text-[#49DCFF] text-xl flex flex-col'>
            <ul className=' flex flex-col items-start gap-3'>
              <li><Link to="configurationPage">Конфигуратор ПК</Link></li>
              <li><Link to="inexpensivePage">Недорогие ПК</Link></li>
              <li><Link to="inexpensivePage">Игровые ПК</Link></li>
              <li><Link to="inexpensivePage">Мощнейшие ПК</Link></li>
              <li><Link to="inexpensivePage">ПК на базу AMD</Link></li>
            </ul>
            <article className='flex flex-col items-start pt-5 gap-2'>
              <h2 className=' text-white text-xl'>Статьи</h2>
                <div className=' flex flex-row items-start gap-2 text-lg'>
                  <p className=' text-[#49DCFF]'>↳</p>
                  <p className=' text-white'>Новости</p>
                </div>
              <h2 className=' text-[#49DCFF] flex text-xl'>О нас</h2>
                <div className=' flex flex-col gap-2'>
                  <div className=' flex flex-row items-start text-lg gap-2'>
                    <p className=' text-[#49DCFF]'>↳</p>
                    <p className=' text-white'>FAQ</p>
                  </div>
                  <div className=' flex flex-row items-start text-lg gap-2'>
                    <p className=' text-[#49DCFF]'>↳</p>
                    <p className=' text-white'>О компании</p>
                  </div>
                  <div className=' flex flex-row items-start text-lg gap-2'>
                    <p className=' text-[#49DCFF]'>↳</p>
                    <p className=' text-white'>Отзывы</p>
                  </div>
                </div>
              <h2 className=' text-[#49DCFF] flex text-xl'>Клиентам</h2>
                <div className=' flex flex-row items-start text-lg gap-2'>
                    <p className=' text-[#49DCFF]'>↳</p>
                    <p className=' text-white'>Тех. поддержка</p>
                </div>
              <h2 className=' text-[#49DCFF] flex text-xl'>Контакты</h2>
            </article>
          </article>
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
}

export default BottomBar;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  position: fixed;
  background-color: #212936;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    padding: 10px;
    justify-content: space-between;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background: #212936;
  width: 100%;
`;

const Logo = styled.img`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px 30px;

  @media (max-width: 768px) {
    height: 40px;
    padding: 0px 30px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  
  align-items: center;
  color: #49DCFF;

  & > div {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    padding-right: 10px;
  }
`;

const Point = styled.img`
    @media (max-width: 768px) {
        display: none;
    }
`

const CitySelector = styled.select`
  padding: 5px;
  border-radius: 4px;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  background: #212936;
  color: #49DCFF;

  &:hover {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    display: none; /* Скрываем на мобильных устройствах */
  }
`;

const LinkRow = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none; /* Скрываем на мобильных устройствах */
  }
`;

const LinkItem = styled.a`
  text-decoration: none;
  color: #ffffff;
  position: relative;
  padding-bottom: 4px;
  transition: all 0.3s ease-in-out;

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: #ffffff;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #ffffff;
    transition: width 0.3s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background: #1C232E;

  @media (max-width: 768px) {
    display: none; /* Скрываем нижний ряд на мобильных устройствах */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  padding-left: 30px;
  flex-wrap: wrap;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #49DCFF;
  position: relative;
  padding-bottom: 4px;
  transition: all 0.3s ease-in-out;

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: #49DCFF;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #49DCFF;
    transition: width 0.3s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }
`;

const SearchAndCart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SearchInput = styled.input`
  height: 28px;
  padding: 5px;
  border-radius: 4px;
  transition: all 0.3s ease;
  width: ${(props) => (props.visible ? '300px' : '0')};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  margin-right: ${(props) => (props.visible ? '10px' : '0')};
  padding: ${(props) => (props.visible ? '5px' : '0')};
  transition: all 0.3s ease;
  background: #ffffff;

  &:hover {
    border-color: #007bff;
  }
`;

const SearchIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;


const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  padding-right: 35px;
  
  & svg {
      width: 20px;
    height: 36px;
}

  &:hover svg path {
    fill: #007bff;
}
`;

const CartCounter = styled.div`
  position: absolute;
  top: -8px;
  right: 23px;
  color: #49DCFF;
  border-radius: 50%;
  border: 3px solid #49DCFF;
  padding: 0 2px;
  font-size: 10px;
  font-weight: bold;
`;


const City = styled.div`
  display: flex;
  gap: 12px;
  font-family: sans-serif;
  transition: all;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [city, setCity] = useState('Бишкек'); // Состояние для выбранного города
  const [searchVisible, setSearchVisible] = useState(false); // Состояние для отображения поля поиска
  const [cartItems] = useState(3); // Количество товаров в корзине

  const handleCityChange = (event) => {
    setCity(event.target.value); // Обновляем город при выборе
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible); // Показываем или скрываем поле поиска при нажатии на лупу
  };

  return (
    <HeaderContainer>
      <div></div>
      {/* Верхний ряд */}
      <TopRow>
        <ContactInfo>
          <Link to={""}><Logo src="assets/svg/headerIcon/logo.svg" alt="" /></Link>  
          <div className=' flex gap-3 font-sans pl-2 hover:scale-105 transition-all'>
            <img src="assets/svg/headerIcon/tel.svg" alt="" />
            +123 456 7890
          </div>
        <City>
            <Point src="assets/svg/headerIcon/point.svg" alt=""/>
            <CitySelector value={city} onChange={handleCityChange}>
              <option value="Бишкек">Бишкек</option>
              <option value="Ош">Ош</option>
              <option value="Талас">Талас</option>
              <option value="Нарын">Нарын</option>
              <option value="Каракол">Каракол</option>
            </CitySelector>
        </City>
        </ContactInfo>
        <LinkRow>
          <Link to={"articlesPage"}><LinkItem href="#news">СТАТЬИ</LinkItem></Link>
          <Link to={"aboutPage"}><LinkItem href="#about">О НАС ⁝</LinkItem></Link>
          <Link to={"clientsPage"}><LinkItem href="#clients ">КЛИЕНТАМ ⁝</LinkItem></Link>
          <Link to={"contactsPage"}><LinkItem href="#contact">КОНТАКТЫ</LinkItem></Link>
        </LinkRow>
      </TopRow>
      
      {/* Нижний ряд */}
      <BottomRow>
        <NavLinks>
          <Link to={"configurationPage"}><NavLink href="#computers">Конфигуратор ПК</NavLink></Link>
          <Link to={"inexpensivePage"}><NavLink href="#processors">Недорогие ПК</NavLink></Link>
          <Link to={"gamingPage"}><NavLink href="#laptops">Игровые ПК</NavLink></Link>
          <Link to={"powerfulPage"}><NavLink href="#laptops">Мощнейшие ПК</NavLink></Link>
          <Link to={"basedAmdPage"}><NavLink href="#laptops">ПК на базе AMD</NavLink></Link>
        </NavLinks>
        <SearchAndCart>
          {/* Лупа для открытия поиска */}
          <SearchIcon onClick={toggleSearch}><img src="assets/svg/headerIcon/lupa.svg" alt="" /></SearchIcon>
          {/* Поле поиска с анимацией */}
          <SearchInput
            type="text"
            placeholder="Поиск"
            visible={searchVisible} // Управляем отображением через состояние
          />
          <Link to={"cartPage"}>
            <CartIcon>
              {/* SVG Иконка корзины */}
              <img src="assets/svg/headerIcon/cart.svg" alt=""/>
              {/* Счётчик корзины */}
              <CartCounter>{cartItems}</CartCounter>
            </CartIcon>
          </Link>
        </SearchAndCart>
      </BottomRow>
    </HeaderContainer>
  );
};

export default Header;

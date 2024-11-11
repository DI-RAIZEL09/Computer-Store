import { PhoneAndroid, Search } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DropdownSelect from './UI/DropdownSelect';
import { Badge } from '@mui/material';
import { MdOutlineShoppingCart } from 'react-icons/md';


const cities = ['Бишкек', 'Чуй', 'Ош', 'Иссык-Куль', 'Талас', 'Жалал-Абад', 'Нарын', 'Баткен'];
const about = ['О КОМПАНИИ', 'FAQ', 'ОТЗЫВЫ'];
const clients = ['ТЕХ. ПОДДЕРЖКА'];


const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate();
  
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };


  return (
    <header>
      <div className='flex justify-between items-center py-3 bg-[#212936]'>
        <div className='flex w-1/3 justify-around items-center text-[rgb(73,220,255)]'>
          <img
            onClick={() => navigate('/client')}
            className='flex-1 h-14 cursor-pointer'
            src="/assets/svg/Logo.svg"
            alt="Logo"
          />
          <div className='flex gap-2 items-end text-[#49DCFF]'>
            <PhoneAndroid className='text-white' />
            +996 909 090 207
          </div>
          <DropdownSelect options={cities} />
        </div>
        <div className='flex justify-around w-1/3 items-center'>
          <Link to="articlesPage">СТАТЬИ</Link>
          <DropdownSelect
            onClick={() => navigate('aboutPage')}
            title='О НАС ⁝'
            options={about}
            isStatic
          />
          <DropdownSelect
            onClick={() => navigate('clientsPage')}
            title='КЛИЕНТАМ ⁝'
            options={clients}
            isStatic
          />
          <Link to="contactsPage">КОНТАКТЫ</Link>
        </div>
      </div>

      <div className='flex items-center justify-between p-3 bg-[#1C232E]'>
        <nav className='flex gap-4'>
          <Link to="configurationPage">Конфигуратор ПК</Link>
          <Link to="inexpensivePage">Недорогие ПК</Link>
          <Link to="gamingPage">Игровые ПК</Link>
          <Link to="powerfulPage">Мощнейшие ПК</Link>
          <Link to="basedAmdPage">ПК на базе AMD</Link>
        </nav>
        <div className='flex items-center gap-5'>
          <div
            className='size-6 cursor-pointer hover:text-[#49DCFF]'
            onClick={toggleSearch}
            >
            <Search />
          </div>
          <SearchInput
            type="text"
            placeholder="Поиск"
            className='p-1 h-7 rounded-lg'
            visible={searchVisible}
            />
          <Link to="cartPage">
            <CartIcon>
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
            </CartIcon>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


const SearchInput = styled.input`
  width: ${(props) => (props.visible ? '300px' : '0')};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  margin-right: ${(props) => (props.visible ? '10px' : '0')};
  transition: all 0.3s ease;
`;

const CartIcon = styled.div`
  & svg {
    width: 20px;
    height: 36px;
  }
`;

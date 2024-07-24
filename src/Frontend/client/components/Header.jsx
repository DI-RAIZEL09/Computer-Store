import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/assets/svg/headerIcon/logo.svg';
import tel from '../../../../public/assets/svg/headerIcon/tel.svg';
import point from '../../../../public/assets/svg/headerIcon/point.svg';
import lupa from '../../../../public/assets/svg/headerIcon/lupa.svg';
import vector from '../../../../public/assets/svg/headerIcon/vector.svg';
import CitySelect from './UI/CitySelect';
import Cart from './UI/Cart';
import './Header.css';

const Header = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeButton2, setActiveButton2] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Бишкек');
  const [cartItemCount] = useState(3);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    setActiveButton2(null);
  };

  const handleButtonClick2 = (index, label) => {
    setActiveButton2(index);
    setActiveButton(null);
    if (label === 'О нас ⁝') {
      setShowSubMenu(!showSubMenu);
    } else {
      setShowSubMenu(false);
    }
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleLogoClick = () => {
    setActiveButton(null);
    setActiveButton2(null);
  };

  const buttonLabels = ['Конфигуратор ПК', 'Недорогие ПК', 'Игровые ПК', 'Мощнейшие ПК', 'ПК на базе AMD'];
  const buttonLinks = ['ConfigurationPage', 'InexpensivePage', 'GamingPage', 'PowerfulPage', 'BasedAmdPage'];

  const buttonLabels2 = ['Статьи', 'Клиентам ⁝', 'О нас ⁝', 'Контакты'];
  const buttonLinks2 = ['ArticlesPage', 'ClientsPage', 'AboutPage', 'ContactsPage'];

  const subMenuLabels = {'О нас ⁝': ['О компании', 'FAQ', 'Отзывы'],};
  const subMenuLinks = {'О нас ⁝': ['CompanyPage', 'FAQPage', 'ReviewsPage'],};

  return (
    <div className='flex flex-col sticky top-0'>
      <div className='flex flex-row items-center justify-between bg-[#212936] px-14 py-4'>
        <div className='flex flex-row items-center gap-14'>
          <Link to='HomePage' onClick={handleLogoClick}><img className='h-[50px] pl-[30px]' src={logo} alt="" /></Link>
          <div className='flex gap-2 items-center'>
            <div className=' flex gap-2 hover:scale-105 hover:duration-200'>
              <img className='h-[22px]' src={tel} alt="" />
              <a className='text-[#49DCFF] text-base font-mono' href="">8 (800) 234 99 19</a>
            </div>
            <div className=' flex gap-2 hover:scale-105 hover:duration-200 items-center'>
              <img className='h-[22px] pl-3' src={point} alt="" />
              <CitySelect selectedCity={selectedCity} handleCityChange={handleCityChange}/>
            </div>
          </div>
        </div>

        <div className='flex flex-row flex-wrap items-center gap-6 text-white'>
          <div className="nav-buttons2 flex items-center gap-3 px-2">
            {buttonLabels2.map((label, index) => (
              <div className={`relative nav-button2-container ${label === 'О нас ⁝' ? 'nav-button2-container-about' : ''}`} key={index}>
                <Link
                  to={buttonLinks2[index]}
                  onClick={() => handleButtonClick2(index, label)}
                  className='nav-button2 px-3'
                >
                  {label}
                </Link>
                {subMenuLabels[label] && showSubMenu && activeButton2 === index && (
                  <div className="dropdown-content">
                    {subMenuLabels[label].map((subLabel, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subMenuLinks[label][subIndex]}
                        className="dropdown-item"
                      >
                        <div className='flex items-center gap-2'>
                          <img src={vector} alt="" className='flex self-start'/>
                          {subLabel}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {activeButton2 !== null && (
              <div
                className="underline2"
                style={{
                  left: `${(activeButton2 * 25)}%`,
                }}
              ></div>
            )}
          </div>
        </div>
      </div>

      <div className='bg-[#1C232E] flex flex-row items-center justify-between px-14 py-3'>
        <div className="nav-buttons">
          {buttonLabels.map((label, index) => (
            <Link
              key={index}
              to={buttonLinks[index]}
              onClick={() => handleButtonClick(index)}
              className={`nav-button ${activeButton === index ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
          {activeButton !== null && (
            <div
              className="underline"
              style={{
                left: `${(activeButton * 20)}%`,
              }}
            ></div>
          )}
        </div>
        <div className='w-1/2 flex items-center justify-end gap-4'>
          <div className={`search-box ${searchOpen ? 'open' : ''}`}>
            <input type="text" placeholder="Поиск..." className="search-text" />
          </div>
          <img
            src={lupa}
            alt=""
            onClick={handleSearchClick}
            className={`lupa ${searchOpen ? 'active' : ''}`}
          />
          <div className='hover:scale-110 hover:transform-ease-in-out hover:duration-200'>            
            <Cart itemCount={cartItemCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

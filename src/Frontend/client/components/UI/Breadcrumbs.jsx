import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Circle, Home } from '@mui/icons-material';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Стили для контейнера хлебных крошек
const BreadcrumbsContainer = styled('nav')({
  background: 'rgba(0, 0, 0, 0.4)',
  position: 'absolute',
  left: 0,
  right: 0,
  transition: 'opacity 0.3s ease-in-out',
  padding: '10px 48px',
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
});

// Стили для иконки "Дом"
const HomeLink = styled(Home)({
  display: 'flex',
  color: 'white',
  fontSize: '12px',
  cursor: 'pointer',
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    color: '#49DCFF',
  },
});

// Основной компонент хлебных крошек
const Breadcrumbs = ({ customNames = {} }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Если текущий путь - это главная страница или /client, не отображаем хлебные крошки
  if (location.pathname === '/client' || pathnames.length === 0) {
    return null;
  }

  return (
    <BreadcrumbsContainer>
      {/* Иконка "Дом" для возврата на главную страницу */}
      <Link to="/client">
        <HomeLink />
      </Link>
      {pathnames.map((value, index) => {

        if (value === 'client') return null;

        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const name = customNames[value] || value;

        return (
          <React.Fragment key={index}>
            {index > 0 && <Circle sx={{ fontSize: '4px', color: 'var(--bg-dark-gray)', }} />}
            {isLast ? (
              <span className='text-[#8490A4] text-[10px] '>{name}</span>
            ) : (
              <Link to={routeTo}>{name}</Link>
            )}
          </React.Fragment>
        );
      })}
    </BreadcrumbsContainer>
  );
};

Breadcrumbs.propTypes = {
  customNames: PropTypes.objectOf(PropTypes.string),
};

export default Breadcrumbs;

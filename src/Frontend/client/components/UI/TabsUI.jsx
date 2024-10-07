import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery'; // Хук для адаптива
import MySelectUI from '../../../UI-components/MySelectUI';

const TabsUI = ({ titles, children, onTabChange, background, useSelect }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Используем media query для мобильных экранов
  const isMobile = useMediaQuery('(max-width: 470px)');

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  const handleSelectChange = (selectedOption) => {
    const selectedIndex = selectedOption.value;
    setActiveTab(selectedIndex);
    onTabChange(selectedIndex);
  };

  // Опции для MySelectUI на основе вкладок
  const selectOptions = titles.map((title, index) => ({
    value: index,
    label: title.label,
  }));

  return (
    <TabsContainer>
      {isMobile && useSelect ? (
        <MySelectUI
          options={selectOptions}
          value={selectOptions.find(option => option.value === activeTab)}
          onChange={handleSelectChange}
          placeholder="Выберите вкладку"
        />
      ) : (
        <TabsHeader>
          {titles.map((title, index) => (
            <TabButton
              key={index}
              isActive={index === activeTab}
              onClick={() => handleTabClick(index)}
            >
              <IconWrapper isActive={index === activeTab}>
                {title.icon}
              </IconWrapper>
              <div className="text-start mt-1">{title.label}</div>
            </TabButton>
          ))}
        </TabsHeader>
      )}
      <TabContent background={background}>
        {React.Children.map(children, (child, index) => (
          <TabPane key={index} isActive={index === activeTab}>
            {child}
          </TabPane>
        ))}
      </TabContent>
    </TabsContainer>
  );
};

TabsUI.propTypes = {
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
  children: PropTypes.node.isRequired,
  onTabChange: PropTypes.func.isRequired,
  background: PropTypes.string,
  useSelect: PropTypes.bool,
};

TabsUI.defaultProps = {
  useSelect: false,
};

export default TabsUI;

const TabsContainer = styled('div')(() => ({
  background: 'var(--bg-dark)',
}));

const TabsHeader = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const TabButton = styled('button')(({ isActive }) => ({
  position: 'relative',
  cursor: 'pointer',
  background: isActive ? 'var(--bg-dark-gray)' : 'var(--bg-dark-blue)',
  width: 'clamp(300px, 20vw, 600px)', 
  height: '60px',
  transition: 'all 0.3s ease',
  overflow: 'visible',
  padding: '12px 20px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: isActive ? 'var(--bg-blue)' : 'none',
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    background: isActive ? '' : 'var(--bg-dark-hover)',
  },
}));

const IconWrapper = styled('div')(({ isActive }) => ({
  display: 'flex',
  "svg path": {
    fill: isActive ? 'var(--bg-blue)' : 'var(--bg-gray)',
    transition: 'fill 0.3s ease',
  },
}));

const TabContent = styled('div')(({ background }) => ({
  padding: '24px',
  background: background || 'var(--bg-dark-gray)',
}));

const TabPane = styled('div')(({ isActive }) => ({
  display: isActive ? 'block' : 'none',
}));

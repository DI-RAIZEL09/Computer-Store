import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';


const TabsUI = ({ titles, children, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };
  
  return (
    <TabsContainer>
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
              <div style={{textAlign:'start', marginTop: '5px'}}>{title.label}</div>
          </TabButton>
        ))}
      </TabsHeader>
      <TabContent>
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
      icon: PropTypes.elementType.isRequired,
    })
  ).isRequired,
  children: PropTypes.node.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default TabsUI;


const TabsContainer = styled('div')(() => ({
  background: 'var(--bg-dark)'
}));

const TabsHeader = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const TabButton = styled('button')(({ isActive }) => ({
  position: 'relative',
  cursor: 'pointer',
  background: isActive ? 'var(--bg-dark-gray)' : 'var(--bg-dark-blue)',
  width: '20%',
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

const TabContent = styled('div')({
  padding: '24px',
  background: 'var(--bg-dark-gray)',
});

const TabPane = styled('div')(({ isActive }) => ({
  display: isActive ? 'block' : 'none',
}));

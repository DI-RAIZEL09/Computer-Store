import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const StyledCounterContainer = styled('div')(({ backgroundColor,borderBottom}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: backgroundColor || 'var(--bg-dark)',
  borderRadius: 2,
  width: '110px', 
  marginTop:'5px',
  marginRight:'160px',
  borderBottom: borderBottom ? '1px solid #49DCFF' : 'none',
}));

const StyledButton = styled('button')(({ theme, color }) => ({
  backgroundColor: 'transparent',
  color: color || '#49DCFF',
  border: 'none',
  borderRadius: 2,
  width: '50px',
  height: '48px',
  cursor: 'pointer',
  fontSize:'32px',
  transition: theme.transitions.create(['background-color', 'color']),
  '&:hover': {
    color: 'var(--bg-dark)',
  },
}));

const StyledCountDisplay = styled('span')({
  fontSize: 20,
  color: 'var(--bg-light)',
});

const MyCountUI = ({
  initialCount = 1,
  min = 1,
  max = 100,
  step = 1,
  color,
  backgroundColor,
  onCountChange,
}) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    if (count < max) {
      const newCount = count + step;
      setCount(newCount);
      if (onCountChange) onCountChange(newCount);
    }
  };

  const decrement = () => {
    if (count > min) {
      const newCount = count - step;
      setCount(newCount);
      if (onCountChange) onCountChange(newCount);
    }
  };

  return (
    <StyledCounterContainer backgroundColor={backgroundColor}>
      <StyledButton 
        color={color} 
        onClick={decrement}
      >
        -
      </StyledButton>
      <StyledCountDisplay>{count}</StyledCountDisplay>
      <StyledButton 
        color={color} 
        onClick={increment}
      >
        +
      </StyledButton>
    </StyledCounterContainer>
  );
};

MyCountUI.propTypes = {
  initialCount: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onCountChange: PropTypes.func,
};

export default MyCountUI;




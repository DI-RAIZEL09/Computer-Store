import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';


const StyledInputContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const StyledLabel = styled('label')(({ labelColor }) => ({
  color: labelColor || 'white',
  fontSize: 14,
  padding: 2,
}));

const StyledInput = styled('input')(({ 
  theme,
  borderColor,
  border,
  focusBorderColor,
  focusBoxShadow,
  backgroundColor,
  width,
  height,

  
}) => ({
  marginBottom:20,
  borderRadius: 2,
  backgroundColor: backgroundColor || 'var(--bg-dark)',
  border: border || 'none',
  borderColor: borderColor || '#FFFFFF',
  fontSize: 12,
  width: width || '100%',
  height: height || 'auto',
  padding: '8px 10px',
  color: 'var(--bg-light)',
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  '&:focus': {
    boxShadow: `${alpha(focusBoxShadow || '#49DCFF', 0.25)} 0 0 0 0.2rem`,
    borderColor: focusBorderColor || '#49DCFF',
  },
}));

const MyInputUI = ({
  type = 'text',
  placeholder = '',
  label,
  borderColor,
  border,
  focusBoxShadow,
  focusBorderColor,
  backgroundColor,
  width,
  height,
  labelColor,
  ...props
}) => {
  return (
    <StyledInputContainer>
      {label && <StyledLabel labelColor={labelColor}>{label}</StyledLabel>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        borderColor={borderColor}
        border={border}
        focusBorderColor={focusBorderColor}
        focusBoxShadow={focusBoxShadow}
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        {...props}
      />
    </StyledInputContainer>
  );
};

MyInputUI.propTypes = {
  type: PropTypes.oneOf(['text']),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  borderColor: PropTypes.string,
  border: PropTypes.string,
  focusBorderColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  labelColor: PropTypes.string,
  focusBoxShadow: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default MyInputUI;

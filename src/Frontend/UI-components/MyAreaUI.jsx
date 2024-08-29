import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledTextAreaContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const StyledLabel = styled('label')(({ labelColor }) => ({
  color: labelColor || '#49DCFF',
  fontSize: 14,
  padding: 2,
}));

const StyledTextArea = styled('textarea')(({
  theme,
  borderColor,
  focusBorderColor,
  focusBoxShadow,
  backgroundColor,
  width,
  height,
  border
}) => ({
  borderRadius: 2,
  backgroundColor: backgroundColor || 'var(--bg-dark)',
  border: border || 'none',
  fontSize: 10,
  borderColor: borderColor || '#FFFFFF',
  width: width || '100%',
  height: height || 'auto',
  padding: 8,
  color: 'var(--bg-light)',
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  resize: 'none',
  overflowY: 'auto',
  '&:focus': {
    boxShadow: `${alpha(focusBoxShadow || '#49DCFF', 0.25)} 0 0 0 0.2rem`,
    borderColor: focusBorderColor || '#49DCFF',
  },
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'var(--bg-blue)',
    borderRadius: '4px',
  },
}));

const MyAreaUI = ({
  label,
  borderColor,
  border,
  focusBorderColor,
  focusBoxShadow,
  backgroundColor,
  placeholder,
  width,
  onChange,
  onClick,
  height,
  labelColor,
  maxLength,
  ...props
}) => {
  return (
    <StyledTextAreaContainer>
      {label && <StyledLabel labelColor={labelColor}>{label}</StyledLabel>}
      <StyledTextArea
        onChange={onChange}
        onClick={onClick}
        borderColor={borderColor}
        focusBorderColor={focusBorderColor}
        focusBoxShadow={focusBoxShadow}
        backgroundColor={backgroundColor}
        placeholder={placeholder || ''}
        width={width}
        height={height}
        border={border}
        maxLength={maxLength}
        {...props}
      />
    </StyledTextAreaContainer>
  );
};

MyAreaUI.propTypes = {
  label: PropTypes.string,
  borderColor: PropTypes.string,
  border: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  focusBorderColor: PropTypes.string,
  focusBoxShadow: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  labelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  maxLength: PropTypes.number,
};

export default MyAreaUI;

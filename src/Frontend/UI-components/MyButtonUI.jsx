import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const MyButtonUI = ({ 
  name,
  width,
  fontSize,
  backgroundColor,
  icon,
  color,
  disabled,
  disColor,
  disabled_bg,
  onClick,
  onChange,
  ...props
}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      onClick={onClick}
      onChange={onChange}
      disabled={disabled}
      sx={{
        width: width || 'auto',
        backgroundColor: backgroundColor || 'var(--bg-blue)',
        color: color || 'var(--bg-dark)',
        minWidth: 0, 
        padding: '1px 3px',
        fontSize: fontSize || '10px',
        borderRadius: '4px',
        fontWeight: 500,
        letterSpacing: '0.03em',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'var(--bg-blue)',
        },
        '&:disabled': {
          backgroundColor: disabled_bg || '#1A627B',
          color: disColor || 'var(--bg-dark)',
        },
      }}
      {...props}
    >
      {icon && <img src={icon} alt="icon" className="h-4 w-4" />}
      {name}
    </Button>
  );
};

MyButtonUI.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  disColor: PropTypes.string,
  disabled_bg: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  icon: PropTypes.string,
};

export default MyButtonUI;

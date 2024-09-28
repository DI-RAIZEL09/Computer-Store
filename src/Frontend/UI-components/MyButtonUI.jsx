import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const MyButtonUI = ({ 
  name,
  width,
  height,
  fontSize,
  backgroundColor,
  icon,
  color,
  hovBg,
  hovColor,
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
        fontSize: fontSize || '10px',
        height: height || 'auto',
        minWidth: 0, 
        padding: '1px 3px',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
          backgroundColor: hovBg || 'transparent',
          color: hovColor || 'var(--bg-blue)',
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
  hovBg: PropTypes.string,
  hovColor: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  icon: PropTypes.string,
};

export default MyButtonUI;

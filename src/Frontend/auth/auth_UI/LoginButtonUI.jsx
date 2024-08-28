import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoadingSpinnerUI from './LoadingSpinnerUI';
import PropTypes from 'prop-types';


const StyledButton = styled(Button)({
  backgroundColor: 'var(--bg-blue)',
  borderRadius: '4px',
  textTransform: 'capitalize',
  fontSize: '20px',
  width: '100%',
  fontWeight: '600',
  marginTop: '2em',
  letterSpacing: '0.03em',
  transition: "all 0.5s ease-in-out",
  '&:hover': {
    backgroundColor: 'var(--bg-blue)',
    boxShadow: '0px 0px 30px 0px var(--bg-blue)',
  },
  '&:disabled': {
    backgroundColor: '#1A627B',
    color: '#8C8C8C',
  },
});

const LoginButtonUI = ({ isSubmitting, disabled, name, ...props }) => {
  return (
    <StyledButton type="submit" variant="contained" disabled={disabled || isSubmitting} {...props}>
      {isSubmitting ? <LoadingSpinnerUI /> : name}
    </StyledButton>
  );
};

LoginButtonUI.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    name: PropTypes.string,
}

export default LoginButtonUI;

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoadingSpinnerUI from './LoadingSpinnerUI';
import PropTypes from 'prop-types';
import StatusResponse from '../../../Backend/utils/StatusResponse';
import { useSelector } from 'react-redux';
import { selectLogin } from '../../../Backend/store/auth/auth.selectors';


const StyledButton = styled(Button)({
  backgroundColor: 'var(--bg-blue)',
  borderRadius: '4px',
  textTransform: 'capitalize',
  fontSize: '20px',
  width: '100%',
  fontWeight: '600',
  marginTop: '2em',
  letterSpacing: '0.03em',
  transition: 'all 0.5s ease-in-out',
  '&:hover': {
    backgroundColor: 'var(--bg-blue)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  '&:disabled': {
    backgroundColor: '#1A627B',
    color: '#8C8C8C',
    fontSize: '1.1rem',
    padding: '0.75rem 2rem',
  },
});

const LoginButtonUI = ({
  name,
  disabled,
  onClick,
  disableLoadingCheck = false,
  ...props
}) => {
  const loading = useSelector(selectLogin).status === StatusResponse.LOADING;
  return (
    <StyledButton
      type="submit"
      variant="contained"
      disabled={!disableLoadingCheck && (loading || disabled)}
      onClick={onClick}
      {...props}
      >
      {!disableLoadingCheck && loading ? <LoadingSpinnerUI /> : name}
    </StyledButton>
  )
};

LoginButtonUI.propTypes = {
  status: PropTypes.oneOf([
    StatusResponse.LOADING,
    StatusResponse.SUCCESS,
    StatusResponse.ERROR,
    StatusResponse.INITIAL,
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  disableLoadingCheck: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default LoginButtonUI;

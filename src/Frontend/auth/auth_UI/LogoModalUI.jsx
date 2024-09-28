import PropTypes from 'prop-types';
import { styled, Modal } from '@mui/material';

const LogoModalUI = ({ open, children }) => (
  <ModalStyled
    open={open}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <Container>
      <div className='m-10'>
        <img src="assets/svg/Logo.svg" alt="LogoModal" />
      </div>
      <ModalContent>
        {children}
      </ModalContent>
    </Container>
  </ModalStyled>
);

LogoModalUI.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default LogoModalUI;


const ModalStyled = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: 'url(assets/image/Authorization.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

const Container = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  flexDirection: 'column',
  outline: 'none',
});

const ModalContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '3em 5em',
  color: 'var(--bg-light)',
  background: 'var(--bg-dark)',
  borderRadius: '4px',
  position: 'relative',
});

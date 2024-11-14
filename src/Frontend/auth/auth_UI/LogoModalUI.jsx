import PropTypes from 'prop-types';
import { styled, Modal } from '@mui/material';

const LogoModalUI = ({ open, children }) => (
  <ModalStyled
    open={open}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <Container>
      <div className=' mb-12'>
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
  backgroundBlendMode: 'darken',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // затемнение
});



const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '500px', // Для мобильных
  outline: 'none',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '700px', // Для планшетов
  },

  [theme.breakpoints.up('md')]: {
    maxWidth: '955px', // Для десктопов
  },
}));

const ModalContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '2em',
  color: 'var(--bg-light)',
  background: 'var(--bg-dark)',
  borderRadius: '8px',
  position: 'relative',
  width: '90%', // По умолчанию для маленьких экранов
  

  // Мобильные устройства
  [theme.breakpoints.down('sm')]: {
    padding: '1.5em',
    width: '90%',
  },

  // Планшеты
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '2.5em',
    width: '70%',
  },

  // Десктопы
  [theme.breakpoints.up('md')]: {
    padding: '3em 4em',
    width: '95%',
  },
}));

import { styled } from '@mui/material/styles';


const Loader = styled('div')({
  width: '2.2rem',
  aspectRatio: 1,
  display: 'grid',
  borderRadius: '50%',
  background: `linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 30%,
    transparent 0 70%,
    rgba(255, 255, 255, 1) 0
    )
    50% / 8% 100%,
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.25) 30%,
      transparent 0 70%,
      rgba(255, 255, 255, 0.75) 0
      )
      50% / 100% 8%`,
      backgroundRepeat: 'no-repeat',
      animation: 'l23 1s infinite steps(12)',
      
      '&::before, &::after': {
        content: '""',
        gridArea: '1 / 1',
        borderRadius: '50%',
        background: 'inherit',
        opacity: 0.915,
        transform: 'rotate(30deg)',
      },
      
      '&::after': {
        opacity: 0.83,
        transform: 'rotate(60deg)',
      },
      
      '@keyframes l23': {
        '100%': {
          transform: 'rotate(1turn)',
        },
      },
    });
    
const LoadingSpinnerUI = () => {
  return <Loader />;
};

export default LoadingSpinnerUI;
import { styled, TextField } from '@mui/material';

const TextFieldUI = styled(TextField)(() => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'var(--bg-dark-gray)',
    color: 'var(--bg-light)',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--bg-gray)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--bg-gray)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--bg-light)',
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--bg-red)',
    },
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: 'var(--bg-red)',
  },
  '& .MuiInputLabel-root': {
    color: 'var(--bg-gray)',
    '&.Mui-focused': {
      color: 'var(--bg-light)',
    },
  },
  '& .MuiFormHelperText-root': {
    position: 'absolute',
    bottom: '-20px',
  },
}));

export default TextFieldUI;
import PropTypes from 'prop-types';
import { MenuItem, FormControl, Select, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#49DCFF',
    },
    background: {
      paper: '#212936',
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          color: '#49DCFF',
          backgroundColor: 'transparent',
        },
        icon: {
          color: '#49DCFF',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#212936',
          color: '#49DCFF',
          '&:hover': {
            backgroundColor: '#1A1F26',
          },
        },
      },
    },
  },
});

const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: 'transparent',
  '& .MuiSelect-icon': {
    color: theme.palette.primary.main,
  },
  '& .MuiSelect-select': {
    padding: '8px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const CitySelect = ({ selectedCity, handleCityChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="outlined">
        <StyledSelect
          value={selectedCity}
          onChange={handleCityChange}
          label="Область"
          inputProps={{
            name: 'city',
            id: 'city-select',
          }}
        >
          <MenuItem value="Бишкек">Бишкек</MenuItem>
          <MenuItem value="Чуй">Чуй</MenuItem>
          <MenuItem value="Талас">Талас</MenuItem>
          <MenuItem value="Ош">Ош</MenuItem>
          <MenuItem value="Нарын">Нарын</MenuItem>
          <MenuItem value="Баткен">Баткен</MenuItem>
          <MenuItem value="Ысык-көл">Ысык-көл</MenuItem>
          <MenuItem value="Жалал-Абад">Жалал-Абад</MenuItem>
        </StyledSelect>
      </FormControl>
    </ThemeProvider>
  );
};

CitySelect.propTypes = {
    selectedCity: PropTypes.string.isRequired,
    handleCityChange: PropTypes.func.isRequired,
};

export default CitySelect;
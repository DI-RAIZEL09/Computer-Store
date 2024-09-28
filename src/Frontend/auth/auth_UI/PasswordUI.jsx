import { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import TextFieldUI from './TextFieldUI';
import PropTypes from 'prop-types';


const PasswordUI = ({ passwordValue, handleChange, handleBlur, touched, errors, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <TextFieldUI
      {...props}
      type={showPassword ? 'text' : 'password'}
      onChange={(e) => {
        handleChange(e);
      }}
      onBlur={handleBlur}
      error={touched.password && Boolean(errors.password)}
      helperText={touched.password && errors.password}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {passwordValue ? (showPassword ? 
                <Visibility sx={{ color: 'var(--bg-gray)' }} /> : 
                <VisibilityOff sx={{ color: 'var(--bg-gray)' }} />
              ) : null}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

PasswordUI.propTypes = {
  passwordValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default PasswordUI;

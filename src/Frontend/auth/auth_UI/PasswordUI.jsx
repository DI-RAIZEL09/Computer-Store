import { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import TextFieldUI from './TextFieldUI';
import PropTypes from 'prop-types';

const PasswordUI = ({ 
  handleChange,
  handleBlur,
  helperText,
  error,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextFieldUI
      type={showPassword ? 'text' : 'password'}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      value={value}
      helperText={helperText}
      {...props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((prev) => !prev)}
                onMouseDown={(event) => event.preventDefault()}
                edge="end"
              >
                {showPassword ? (
                  <Visibility sx={{ color: 'var(--bg-gray)' }} />
                ) : (
                  <VisibilityOff sx={{ color: 'var(--bg-gray)' }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  };

PasswordUI.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.string,
};

export default PasswordUI;

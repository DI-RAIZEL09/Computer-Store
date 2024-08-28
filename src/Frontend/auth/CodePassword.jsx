import { Box, Grid } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginTextUI from './auth_UI/LoginTextUI';
import LoginButtonUI from './auth_UI/LoginButtonUI';
import LogoModalUI from './auth_UI/LogoModalUI';

const CustomInput = ({ value, onChange, onKeyDown, inputRef, hasError }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={inputRef}
      maxLength="1"
      className={`w-[75px] h-[80px] text-3xl text-center bg-[var(--bg-dark-gray)] text-white border-2 rounded-lg 
        focus:outline-none ${hasError ? 'border-red-500 shadow-[0_0_1px_2px_rgba(255,0,0,0.5)]' : 'border-gray-300'}`}
    />
  );
};

CustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
};

const CodePassword = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [values, setValues] = useState({ code1: '', code2: '', code3: '', code4: '' });
  const [errors, setErrors] = useState({ code1: false, code2: false, code3: false, code4: false });

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      const newValues = { ...values, [`code${index + 1}`]: value };
      setValues(newValues);

      if (index < 3) {
        inputRefs.current[index + 1]?.focus();
      } else {
        handleSubmit(newValues);
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (values[`code${index + 1}`] === '') {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        const newValues = { ...values, [`code${index + 1}`]: '' };
        setValues(newValues);
      }
    }
  };

  const handleSubmit = (values) => {
    const code = `${values.code1}${values.code2}${values.code3}${values.code4}`;
    if (code === '1234') {
      console.log('Code is correct:', code);
      navigate('/reset-password');
    } else {
      setErrors({ code1: true, code2: true, code3: true, code4: true });
    }
  };

  return <LogoModalUI open={true}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap='1.5em'
        maxWidth="440px"
        padding="24px"
      >
        <LoginTextUI
          title="Введите 4-значный код"
          subtitle="На адрес электронной почты, который вы указали, должен был прийти четырехзначный код."
        />
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(values); }} className="w-full text-center">
          <Grid container spacing={3} justifyContent="center">
            {[1, 2, 3, 4].map((index) => (
              <Grid item key={index}>
                <CustomInput
                  value={values[`code${index}`]}
                  onChange={(e) => handleInputChange(e, index - 1)}
                  onKeyDown={(e) => handleKeyDown(e, index - 1)}
                  inputRef={(el) => (inputRefs.current[index - 1] = el)}
                  hasError={errors[`code${index}`]}
                />
              </Grid>
            ))}
          </Grid>

          <Box className="flex gap-8 mt-4 justify-center">
            <LoginButtonUI
              name="Отмена"
              onClick={() => navigate(-1)}
              isSubmitting={false}
            />
            <LoginButtonUI
              name="Подтвердить"
              onClick={() => handleSubmit(values)}
              isSubmitting={false}
            />
          </Box>
        </form>
      </Box>
    </LogoModalUI>
};

export default CodePassword;

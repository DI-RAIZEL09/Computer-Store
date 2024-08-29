import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Snackbar, Alert, Box, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import LogoModalUI from './auth_UI/LogoModalUI';
import TextFieldUI from './auth_UI/TextFieldUI';
import LoginTextUI from './auth_UI/LoginTextUI';
import LoginButtonUI from './auth_UI/LoginButtonUI';
import PasswordUI from './auth_UI/PasswordUI';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Недействительный адрес электронной почты').required('Введите адрес электронной почты'),
  password: Yup.string().required('Неправильный пароль'),
});


const AdminLogin = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [SwitchChecked, setSwitchChecked] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const navigate = useNavigate();
  
  const SwitchChange = (event) => {
    setSwitchChecked(event.target.checked);
  };
  
  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return <>
    <LogoModalUI open={true}>
    <LoginTextUI title="Добро пожаловать!" subtitle="Войдите в свой аккаунт" />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Форма успешно отправлена:', values);
          setTimeout(() => {
            setAlertOpen(true);
            setSubmitting(false);
          }, 500),
          setTimeout(() => {
            navigate('/client');
          }, 1500);
        }}
        >
        {({ isSubmitting, handleChange, handleBlur, touched, errors }) => (
          <Form autoComplete='off'>
            <Field
              as={TextFieldUI}
              variant="outlined"
              margin="normal"
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <PasswordUI
              variant="outlined"
              margin="normal"
              name="password"
              label="Пароль"
              id="password"
              passwordValue={passwordValue}
              handleChange={(e) => {
                handleChange(e);
                setPasswordValue(e.target.value);
              }}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
            />
            <FormFooter>
              <Box className="flex items-center gap-2 text-zinc-400">
                <CustomSwitch type='checkbox' checked={SwitchChecked} onChange={SwitchChange} />
                Запомнить
              </Box>
              <Box className="text-cyan-400 cursor-pointer" onClick={() => navigate('/forgot-password')}>
                Забыли пароль?
              </Box>
            </FormFooter>
            <LoginButtonUI
              isSubmitting={isSubmitting}
              disabled={!touched.email || Boolean(errors.email) || Boolean(errors.password)}
              name="Войти"
            />
          </Form>
        )}
      </Formik>
    </LogoModalUI>
    <Snackbar
      open={alertOpen}
      autoHideDuration={1500}
      onClose={handleAlertClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleAlertClose} severity="success">
        Форма успешно отправлена
      </Alert>
    </Snackbar>
  </>
};

export default AdminLogin;


const FormFooter = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1em',
});

const CustomSwitch = styled("input")({
  appearance: "none",
  width: "30px",
  height: "18px",
  borderRadius: "3em",
  position: "relative",
  cursor: "pointer",
  outline: "none",
  transition: "all 0.2s ease-in-out",
  border: "2px solid var(--bg-gray)",

  "&:checked": {
    background: "var(--bg-blue)",
    border: "2px solid var(bg-gray)",
  },

  "&:after": {
    position: "absolute",
    content: "''",
    width: "25px",
    height: "24px",
    borderRadius: "50%",
    background: "var(--bg-light)",
    border: "2.2px solid var(--bg-gray)",
    transform: "scale(0.6)",
    left: "-0.31em",
    top: "-0.31em",
    transition: "all 0.2s ease-in-out",
  },

  "&:checked:after": {
    left: "calc(100% - 20px)",
    borderColor: "var(--bg-light)",
  },
});
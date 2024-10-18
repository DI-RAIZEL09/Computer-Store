import React from 'react';
import * as Yup from 'yup';
import { login } from '../../Backend/store/auth/auth.thunk';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Box, styled } from '@mui/material';

import LoginButtonUI from './auth_UI/LoginButtonUI';
import PasswordUI from './auth_UI/PasswordUI';
import TextFieldUI from './auth_UI/TextFieldUI';
import LogoModalUI from './auth_UI/LogoModalUI';
import LoginTextUI from './auth_UI/LoginTextUI';
import { ToastContainer } from 'react-toastify';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Недействительный адрес электронной почты')
    .required('Введите адрес электронной почты'),
  password: Yup.string()
    .required('Введите пароль'),
});


const AdminLogin = () => {
  const [switchChecked, setSwitchChecked] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    dispatch(login({ userData: values, navigate }));
  };

  return (
    <LogoModalUI open={true}>
      <LoginTextUI
        title="Добро пожаловать!"
        subtitle="Войдите в свой аккаунт!"
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              as={TextFieldUI}
              id="email"
              name="email"
              margin="normal"
              label="E-mail"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <PasswordUI
              id="password"
              name="password"
              label="Пароль"
              margin="normal"
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <FormFooter>
              <Box className="flex items-center gap-2 text-zinc-400">
                <CustomSwitch
                  type="checkbox"
                  checked={switchChecked}
                  onChange={(event) => setSwitchChecked(event.target.checked)}
                />
                  Запомнить
              </Box>
              <Box
                className="text-cyan-400 cursor-pointer" 
                onClick={() => navigate('/forgot-password')}
              >
                Забыли пароль?
              </Box>
            </FormFooter>
            <LoginButtonUI
              name="Войти"
              disabled={!isValid || !dirty}
            />
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </LogoModalUI>
  );
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
    border: "2px solid var(--bg-gray)",
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

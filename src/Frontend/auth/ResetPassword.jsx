import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box } from '@mui/material';
import { West } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import LogoModalUI from './auth_UI/LogoModalUI';
import LoginButtonUI from './auth_UI/LoginButtonUI';
import LoginTextUI from './auth_UI/LoginTextUI';
import PasswordUI from './auth_UI/PasswordUI';

const PasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, 'Пароль должен быть не менее 8 символов')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну маленькую букву')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
    .matches(/[@$!%*?&#]/, 'Пароль должен содержать хотя бы один специальный символ')
    .required('Введите новый пароль'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Пароли должны совпадать')
    .required('Подтвердите пароль'),
});

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return <LogoModalUI open={true}>
    <Box maxWidth="430px">
      <Box
        onClick={handleClose}
        className="absolute top-5 left-5 cursor-pointer p-2 rounded-3xl transition ease-in-out hover:bg-gray-800"
      >
        <West />
      </Box>
      <LoginTextUI title="Создать пароль" subtitle="Выберите надежный пароль! Минимальная длина пароля 8 символов." />
      <Formik
        initialValues={{ newPassword: '', confirmPassword: '' }}
        validationSchema={PasswordSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Пароль успешно сброшен:', values);
          setTimeout(() => {
            setSubmitting(false);
            navigate('/login');
          }, 500);
        }}
      >
        {({ isSubmitting, touched, errors, handleChange, handleBlur, values }) => (
          <Form autoComplete="off">
            <PasswordUI
              variant="outlined"
              margin="normal"
              name="newPassword"
              label="Новый пароль"
              id="newPassword"
              passwordValue={values.newPassword}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
            />
            <PasswordUI
              variant="outlined"
              margin="normal"
              name="confirmPassword"
              label="Подтверждение пароля"
              id="confirmPassword"
              passwordValue={values.confirmPassword}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
            />
            <LoginButtonUI
              isSubmitting={isSubmitting}
              disabled={!isSubmitting || Boolean(errors.newPassword) || Boolean(errors.confirmPassword)}
              name="Сбросить пароль"
            />
          </Form>
        )}
      </Formik>
    </Box>
  </LogoModalUI>
};

export default ResetPassword;

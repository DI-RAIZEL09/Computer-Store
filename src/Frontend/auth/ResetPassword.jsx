import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box } from '@mui/material';
import { West } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../Backend/store/auth/auth.thunk';

import LogoModalUI from './auth_UI/LogoModalUI';
import LoginButtonUI from './auth_UI/LoginButtonUI';
import LoginTextUI from './auth_UI/LoginTextUI';
import PasswordUI from './auth_UI/PasswordUI';

const PasswordSchema = Yup.object().shape({
  new_password: Yup.string()
    .min(8, 'Пароль должен быть не менее 8 символов')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну маленькую букву')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
    .required('Введите новый пароль'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'Пароли должны совпадать')
    .required('Подтвердите пароль'),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {state} = useLocation();
  console.log(state)
  const onSubmit = (values) => {
    dispatch(resetPassword({
      new_password: values,
      token: state,
      navigate
    }));
  };

  return <LogoModalUI open={true}>
    <Box maxWidth="430px">
      <Box
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 cursor-pointer p-2 rounded-3xl transition ease-in-out hover:bg-gray-800"
      >
        <West />
      </Box>
      <LoginTextUI 
        title="Создать пароль" 
        subtitle="Выберите надежный пароль! Минимальная длина пароля 8 символов." 
      />
      <Formik
        initialValues={{ new_password: '', confirm_password: '' }}
        validationSchema={PasswordSchema}
        onSubmit={onSubmit}
      >
        {({
          touched, 
          errors, 
          handleChange, 
          handleBlur, 
          values, 
          isValid, 
          dirty 
        }) => (
          <Form>
            <PasswordUI
              variant="outlined"
              margin="normal"
              name="new_password"
              label="Новый пароль"
              id="new_password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.new_password}
              error={touched.new_password && Boolean(errors.new_password)}
              helperText={touched.new_password && errors.new_password}
            />
            <PasswordUI
              variant="outlined"
              margin="normal"
              name="confirm_password"
              label="Подтверждение пароля"
              id="confirm_password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.confirm_password}
              error={touched.confirm_password && Boolean(errors.confirm_password)}
              helperText={touched.confirm_password && errors.confirm_password}
            />
            <LoginButtonUI
              disabled={!isValid || !dirty}
              name="Сбросить пароль"
            />
          </Form>
        )}
      </Formik>
    </Box>
  </LogoModalUI>
};

export default ResetPassword;

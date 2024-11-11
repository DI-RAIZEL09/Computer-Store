import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import TextFieldUI from './auth_UI/TextFieldUI';
import LogoModalUI from './auth_UI/LogoModalUI';
import LoginButtonUI from './auth_UI/LoginButtonUI';
import { useNavigate } from 'react-router-dom';
import LoginTextUI from './auth_UI/LoginTextUI';
import { West } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../Backend/store/auth/auth.thunk';
import { setEmail } from '../../Backend/store/auth/auth.slice';


const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Недействительный адрес электронной почты')
    .required('Обезательное поле для ввода'),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(setEmail(values.email));
    dispatch(forgotPassword({ email: values, navigate, again: false }));
  };

  
  return <LogoModalUI open={true}>
      <Box
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 cursor-pointer p-2 rounded-3xl transition ease-in-out hover:bg-gray-800"
      >
        <West />
      </Box>
      <LoginTextUI
        title="Забыли пароль"
        subtitle="Введите свой аккаунт!"
      />
      <Formik
        initialValues={{ email: '' }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, dirty, isValid }) => (
          <Form>
            <Field
              as={TextFieldUI}
              variant="outlined"
              margin="normal"
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <LoginButtonUI
              disabled={!isValid || !dirty}
              name="Продолжать"
              sx={{ display: 'flex', width: '440px' }}
            />
          </Form>
        )}
      </Formik>
  </LogoModalUI>
};

export default ForgotPassword;

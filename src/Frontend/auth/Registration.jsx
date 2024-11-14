import { Box, Switch, Typography, useMediaQuery } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import LoginButtonUI from "./auth_UI/LoginButtonUI";
import PasswordUI from "./auth_UI/PasswordUI";
import { Field, Form, Formik } from "formik";
import TextFieldUI from "./auth_UI/TextFieldUI";
import LoginTextUI from "./auth_UI/LoginTextUI";
import LogoModalUI from "./auth_UI/LogoModalUI";
import { registerUser } from "../../Backend/store/regis/regis.thunk";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

const AdminRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [switchChecked, setSwitchChecked] = useState(false);

    // Media queries for responsiveness
    
    const isMobile = useMediaQuery('(max-width:500px)');
    const isTablet = useMediaQuery('(min-width:501px) and (max-width:1024px)');

    // Toggle switch state
    const handleSwitchChange = (event) => {
      setSwitchChecked(event.target.checked);
    };

    // Validation schema
    const validationSchema = Yup.object().shape({
      fullName: Yup.string()
        .required('Поле "ФИО" обязательно для заполнения')
        .min(3, 'ФИО должно содержать минимум 3 символа'),
      email: Yup.string()
        .email('Некорректный формат email')
        .required('Поле "E-mail" обязательно для заполнения'),
      password: Yup.string()
        .required('Поле "Пароль" обязательно для заполнения')
        .min(6, 'Пароль должен содержать минимум 6 символов'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
        .required('Поле "Подтверждение пароля" обязательно для заполнения')
    });

    // Handle form submission
    const onSubmit = async (values) => {
      try {
        await dispatch(registerUser({ userData: values, navigate }));
        toast.success("Регистрация прошла успешно!");
        navigate('/login'); // Navigate to login after successful registration
      } catch (error) {
        toast.error("Ошибка регистрации. Пожалуйста, попробуйте снова.");
      }
    };

    return (
        <LogoModalUI open={true} >
            <LoginTextUI
                title="Регистрация"
                subtitle="Создайте новый аккаунт"
                titleFontSize={isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem'}
                subtitleFontSize={isMobile ? '1rem' : isTablet ? '1.25rem' : '1.5rem'}
                sx={{ textAlign: 'center', mb: isMobile ? 1 : 1 }}
               marginTop='-8%'
            />
            <Formik
                initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
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
                    handleSubmit,
                }) => (
                    <Form onSubmit={handleSubmit} style={{ width: isMobile ? '90%' : isTablet ? '80%' : '60%', margin: 'auto' }}>
                        <Field
                            as={TextFieldUI}
                            id="fullName"
                            name="fullName"
                            margin="normal"
                            label="ФИО"
                            error={touched.fullName && Boolean(errors.fullName)}
                            helperText={touched.fullName && errors.fullName}
                            inputProps={{
                                style: { fontSize: isMobile ? '0.75rem' : isTablet ? '1.2rem' : '1.4rem' },
                            }}
                        />
                        <Field
                            as={TextFieldUI}
                            id="email"
                            name="email"
                            margin="normal"
                            label="E-mail"
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            inputProps={{
                                style: { fontSize: isMobile ? '0.75rem' : isTablet ? '1.2rem' : '1.4rem' },
                            }}
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
                            passwordVisible={passwordVisible}
                            setPasswordVisible={setPasswordVisible}
                            inputProps={{
                                style: { fontSize: isMobile ? '0.65rem' : isTablet ? '1.2rem' : '1.4rem' },
                            }}
                        />
                        <PasswordUI
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Подтвердите пароль"
                            margin="normal"
                            value={values.confirmPassword}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                            passwordVisible={passwordVisible}
                            setPasswordVisible={setPasswordVisible}
                            inputProps={{
                                style: { fontSize: isMobile ? '0.65rem' : isTablet ? '1.2rem' : '1.4rem' },
                            }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#ffff', mt: 2 }}>
                            <Switch
                                checked={switchChecked}
                                onChange={handleSwitchChange}
                                inputProps={{ 'aria-label': 'Запомнить' }}
                                sx={{
                                    '& .MuiSwitch-switchBase.Mui-checked': { color: '#1E90FF' },
                                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#1E90FF' },
                                }}
                            />
                            <Typography variant="body2" sx={{ ml: 1, fontSize: isMobile ? '0.75rem' : isTablet ? '0.95rem' : '1rem' }}>
                                Запомнить
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: -5 }}>
                            <LoginButtonUI
                                name="Зарегистрироваться"
                                disabled={!isValid || !dirty}
                                sx={{
                                    fontSize: isMobile ? '0.9rem' : isTablet ? '1rem' : '1.1rem',
                                    padding: isMobile ? '0.5rem 1.5rem'  : '0.75rem 2rem'
                                }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Typography variant="body2" color="#ffff" sx={{ fontSize: isMobile ? '0.75rem' : isTablet ? '0.95rem' : '1rem' }}>
                                Уже есть аккаунт?
                            </Typography>
                            <Typography
                                onClick={() => navigate('/login')}
                                sx={{
                                    color: '#1E90FF',
                                    marginLeft: '5px',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    fontSize: isMobile ? '0.75rem' : isTablet ? '0.95rem' : '1rem',
                                }}
                            >
                                Войти
                            </Typography>
                        </Box>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </LogoModalUI>
    );
};

export default AdminRegister;

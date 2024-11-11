import {useState, useEffect, useRef} from 'react';
import {Box, Grid2} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {resetPasswordCode} from '../../Backend/store/auth/auth.thunk';

import LoginTextUI from './auth_UI/LoginTextUI';
import LoginButtonUI from './auth_UI/LoginButtonUI';
import LogoModalUI from './auth_UI/LogoModalUI';
import ResendSmsButton from './auth_UI/ResendSmsButton';
import PropTypes from 'prop-types';


const CustomInput = ({
                         value,
                         onChange,
                         onKeyDown,
                         inputRef,
                         hasError
                     }) => (
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

CustomInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    inputRef: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired,
};

const CodePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRefs = useRef([]);
    const [errors, setErrors] = useState(false);
    const [values, setValues] = useState({
        code1: '',
        code2: '',
        code3: '',
        code4: ''
    });
    useEffect(() => inputRefs.current[0]?.focus(), []);

    const handleInputChange = (e, index) => {
        if (/^\d$/.test(e.target.value)) {
            const newValues = {...values, [`code${index + 1}`]: e.target.value};
            setValues(newValues);
            if (index < 3) {
                inputRefs.current[index + 1]?.focus();
            } else if (Object.values(newValues).every(val => val)) {
                handleSubmit(newValues);
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !values[`code${index + 1}`]) inputRefs.current[index - 1]?.focus();
        else setValues({...values, [`code${index + 1}`]: ''});
    };

    const handleSubmit = (values) => {
        const code = Object.values(values).join('');
        if (code.length === 4) {
            dispatch(resetPasswordCode({code, navigate}))
                .unwrap()
                .catch(() => setErrors(true));
        }
    };

    return (
        <LogoModalUI open={true}>
            <Box className="flex flex-col items-center gap-2 max-w-md p-6">
                <LoginTextUI
                    title="Введите 4-значный код"
                    subtitle="На адрес электронной почты, который вы указали, должен был прийти четырехзначный код."
                />
                <form onSubmit={handleSubmit}>
                    <Grid2
                        container
                        spacing={3}
                        justifyContent="center"
                    >
                        {[...Array(4)].map((_, index) => (
                            <div key={index}>
                                <CustomInput
                                    value={values[`code${index + 1}`]}
                                    onChange={(e) => handleInputChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    inputRef={(el) => (inputRefs.current[index] = el)}
                                    hasError={errors}
                                />
                            </div>
                        ))}
                    </Grid2>
                    <ResendSmsButton/>
                    <Box className="flex gap-8 justify-center">
                        <LoginButtonUI
                            name="Отмена"
                            disableLoadingCheck={true}
                            onClick={() => navigate('/forgot-password')}
                        />
                        <LoginButtonUI
                            name="Подтвердить"
                            disabled={!errors}
                        />
                    </Box>
                </form>
            </Box>
        </LogoModalUI>
    );
};

export default CodePassword;

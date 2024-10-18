import { useSelector } from 'react-redux';
import { forgotPassword } from '../../../Backend/store/auth/auth.thunk';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ResendSmsButton = ({ initialTimer = 5 }) => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(initialTimer);
  const [disabled, setDisabled] = useState(true);
  
  const email = useSelector((state) => state.auth.email);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    } else {
      setDisabled(false);
    }
  }, [timer]);

  const handleResend = () => {
    setDisabled(true);
    setTimer(initialTimer);
    const data = {email: email}
    dispatch(forgotPassword({ email: data, again: true }))
      .unwrap()
      .then(() => {
        console.log('SMS успешно отправлено!');
      })
  };

  return (
    <div className="flex justify-between items-center w-full mt-4">
      <button
        onClick={handleResend}
        disabled={disabled}
        className={`${
          disabled ? 'text-gray-400 cursor-default' : 'text-cyan-400 cursor-pointer'
        } border-none bg-transparent`}
      >
        {disabled ? 'SMS отправлено:' : 'Отправить SMS ещё раз'}
      </button>
      {disabled && <span className="text-cyan-400">{`00:${timer.toString().padStart(2, '0')}`}</span>}
    </div>
  );
};

ResendSmsButton.propTypes = {
  initialTimer: PropTypes.number,
};

export default ResendSmsButton;

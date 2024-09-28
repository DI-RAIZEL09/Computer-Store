import PropTypes from 'prop-types';

const LoginTextUI = ({ 
  title,
  subtitle,
  ...props
}) => (
  <div 
    style={{...props}}
    className="flex flex-col text-center"
  >
    <h1 className="text-3xl font-semibold leading-snug tracking-wide">
      {title}
    </h1>
    <div className="text-base m-6 ml-10 mr-10 leading-snug tracking-wide">
      {subtitle}
    </div>
  </div>
);

LoginTextUI.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default LoginTextUI;

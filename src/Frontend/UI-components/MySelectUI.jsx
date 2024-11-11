import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Select, { components } from 'react-select';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import PropTypes from 'prop-types';

const SelectContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '600px',
}));

const StyledLabel = styled('label')(({ labelColor }) => ({
  color: labelColor || '#FFFFFF',
  fontSize: 14,
  padding: 2,
}));

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.menuIsOpen ? (
        <ArrowDropUp style={{ color: '#49DCFF' }} />
      ) : (
        <ArrowDropDown style={{ color: '#49DCFF' }} />
      )}
    </components.DropdownIndicator>
  );
};

DropdownIndicator.propTypes = {
  selectProps: PropTypes.shape({
    menuIsOpen: PropTypes.bool.isRequired,
  }).isRequired,
};

const MySelectUI = ({
  border,
  width,
  height,
  label,
  labelColor,
  background,
  placeholder,
  onChange,
  options = [],
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option); 
    if (onChange) {
      onChange(option);
    }
  };
  
  const appliedStyles = {
    ...customStyles,
    control: (provided, state) => ({
      ...customStyles.control(provided, state),
      border: border || 'none',
      backgroundColor: background || 'var(--bg-dark)',
      width: width || 'auto',
      height: height || 'auto',
      borderRadius: 2,
      fontSize: 12,
    }),
  };
  
  return (
    <SelectContainer>
      {label && <StyledLabel labelColor={labelColor}>{label}</StyledLabel>}
      <Select
        value={selectedOption} 
        onChange={handleChange} 
        options={options} 
        styles={appliedStyles}
        components={{ DropdownIndicator }}
        placeholder={placeholder || ""}
      />
    </SelectContainer>
  );
};

MySelectUI.propTypes = {
  label: PropTypes.string,
  labelColor: PropTypes.string,
  border: PropTypes.string,
  background: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      label: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
};

export default MySelectUI;

const customStyles = {
  control: (provided, { isFocused }) => ({
    ...provided,
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#2A323D',
    color: '#FFFFFF',
    boxShadow: isFocused ? 'none' : 'none',
    '&:hover': {
      border: 'none',
    },
    minHeight: '40px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#1C232E' : '#2A323D',
    color: state.isFocused ? '#ffffff' : '#49DCFF',
    padding: '5px 10px',
    margin: 0,
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '&:hover': {
      backgroundColor: '#1C232E',
      color: '#ffffff',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#2A323D',
    borderRadius: '8px',
    padding: 0, 
    margin: '4px 0',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0, 
    margin: 0,
    display: 'flex',
    flexDirection: 'column', 
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#FFFFFF',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};  

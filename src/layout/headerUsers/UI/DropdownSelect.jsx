import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowDropDown, ArrowDropUp, Place, SubdirectoryArrowRight } from '@mui/icons-material';
import { Button, Fade, Menu, MenuItem } from '@mui/material';

const StyledButton = styled(Button)`
  padding: 0;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    background: none;
  }
`;

const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background: #151A22;
    color: #fff;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  transition: background 0.3s ease, color 0.3s ease;
  &:hover {
    color: #49DCFF;
    svg {
      color: #fff;
    }
  }
  svg {
    color: ${({ isStatic }) => (isStatic ? '#49DCFF' : 'inherit')};
    margin-right: 8px;
  }
`;

export default function DropdownSelect({
  options = [],
  title = "",
  isStatic = false,
  onClick
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(options[0] || title);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option) => {
    if (!isStatic) {
      setSelectedOption(option);
    }
    handleClose();
  };

  return (
    <>
      <StyledButton
        isStatic={isStatic}
        onClick={onClick}
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
        sx={{ color: isStatic ? '#fff' : '#49DCFF' }}
        endIcon={
          open
            ? isStatic ? null : <ArrowDropUp sx={{ color: "#49DCFF" }} />
            : isStatic ? null : <ArrowDropDown sx={{ color: "#49DCFF" }} />
        }
      >
        {!isStatic && <Place sx={{ color: "#fff" }} />}
        {isStatic ? title : selectedOption}
      </StyledButton>

      <StyledMenu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        TransitionProps={{
          onEntering: (node) => {
            node.style.transform = 'scaleY(1.1)';
            node.style.transition = '0.5s ease-in-out';
            node.style.opacity = '1';
          },
          onExiting: (node) => {
            node.style.transform = 'scaleX(1.1)';
            node.style.transition = '0.5s ease-in-out';
            node.style.opacity = '0';
          },
        }}
      >
        {options.map((option, index) => (
          <StyledMenuItem 
            key={index}
            onClick={() => handleSelect(option)}
            isStatic={isStatic}
          >
            {isStatic && <SubdirectoryArrowRight sx={{ fontSize: "16px" }} />}
            {option}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  );
}

DropdownSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])).isRequired,
  onClick: PropTypes.func,
  isStatic: PropTypes.bool,
  title: PropTypes.string,
};

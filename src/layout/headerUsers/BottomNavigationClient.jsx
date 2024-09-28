import styled from "styled-components";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ConstructionIcon from "@mui/icons-material/Construction";
import MemoryIcon from "@mui/icons-material/Memory";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CartIconStack from "./CartIconStack";
import PropTypes from "prop-types";


const BottomNavigationClient = ({ value, onChange, openModal }) => {
  return (
    <BottomNavigationContainer>
      <BottomNavigation
        sx={{
          width: "100%",
          backgroundColor: "#1c232e",
          ".MuiBottomNavigationAction-root": { color: "#49dcff" },
          ".MuiBottomNavigationAction-root.Mui-selected": {
            color: "#ffffff",
          },
          ".MuiBottomNavigationAction-label": { color: "#ffffff" },
          ".MuiBottomNavigationAction-label.Mui-selected": {
            color: "#49dcff",
          },
        }}
        value={value}
        onChange={onChange}
      >
        <BottomNavigationAction
          label="Конфигуратор ПК"
          value="recents"
          icon={<ConstructionIcon />}
        />
        <BottomNavigationAction
          label="Недорогие ПК"
          value="cheap"
          icon={<MemoryIcon />}
        />
        <BottomNavigationAction
          label="Меню"
          value="menu"
          icon={<MenuIcon />}
        />
        <BottomNavigationAction
          label="Поиск"
          value="search"
          icon={<SearchIcon />}
          onClick={openModal}
        />
        <BottomNavigationAction
          label="Корзина"
          value="cart"
          icon={<CartIconStack />}
        />
      </BottomNavigation>
    </BottomNavigationContainer>
  );
};


BottomNavigationClient.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default BottomNavigationClient;


const BottomNavigationContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #1c232e;
    z-index: 1000;
  }
`;

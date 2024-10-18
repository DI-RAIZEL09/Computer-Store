import styled from "styled-components";
import CartIconStack from "./CartIconStack";
import PropTypes from "prop-types";
import { BottomNavigation, BottomNavigationAction, Menu } from "@mui/material";
import { Construction, Memory, Search } from "@mui/icons-material";


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
          value="configurationPage"
          icon={<Construction />}
        />
        <BottomNavigationAction
          label="Недорогие ПК"
          value="inexpensivePage"
          icon={<Memory />}
        />
        <BottomNavigationAction
          label="Меню"
          value="menu"
          icon={<Menu />}
        />
        <BottomNavigationAction
          label="Поиск"
          value="search"
          icon={<Search />}
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

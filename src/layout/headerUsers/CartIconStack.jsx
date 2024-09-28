import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";

const CartIconStack = () => {
  return (
    <IconContainer>
      <Stack spacing={4} direction="row" sx={{ color: "#49dcff" }}>
        <Badge color="primary" badgeContent={0} showZero>
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Stack>
    </IconContainer>
  );
};

export default CartIconStack;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover .underline {
    opacity: 1;
  }
`;

// const Underline = styled.div`
//   position: absolute;
//   bottom: -13px;
//   height: 2px;
//   width: 300%;
//   background-color: #49dcff;
//   opacity: 0;
//   transition: opacity 0.3s ease-in-out;
// `;

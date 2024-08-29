import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';
import {GlobalStyles} from '@mui/material';

const globalStyles = (
  <GlobalStyles
    styles={{
      '.css-zza0ns-MuiBadge-badge': {
      backgroundColor: '#1e2632 !important',
      border: '3px solid rgb(73, 220, 255)',
      color: "aqua !important",
      right: "-3px !important",
      top: "-2px !important",
      }
    }}
  />
);

const Cart = (
  { itemCount }

) => {
  return (
    <IconButton aria-label="cart">
      {globalStyles}
      <Badge
        badgeContent={itemCount} 
        color="primary" 
        >
        <ShoppingCartIcon className="text-[#49DCFF] h-[38px]" /> 
      </Badge>
    </IconButton>
  );
};

Cart.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default Cart;
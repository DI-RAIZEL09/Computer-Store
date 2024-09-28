import React from "react";
import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const CustomMenu = styled(Menu)({
  "& .MuiPaper-root": {
    background: "var(--bg-dark-blue)",
    color: "#F3F4F6",
  },
});

const CustomMenuItem = styled(MenuItem)({
  background: "var(--bg-dark-blue)",
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
  },
});

const IconBtnStyled = styled(IconButton)({
  position: "absolute",
  transform: "rotate(90deg)",
  top: "8px",
  right: "8px",
});

const ContainsGoods = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  overflowY: "auto",
  maxHeight: "70vh",
});

const goods = [
  {id: 1,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 2,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 3,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 4,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 5,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 6,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 7,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 8,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 9,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 10,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 11,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 12,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 13,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
  {id: 14,image: "/assets/svg/chip.svg",label: "Материнская плата",name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00",},  
];

const optionsMenu = [
  { label: "Все" },
  { label: "Раздел" },
  { label: "Добавить новый товар", link: "goods-layout" },
];

const ITEM_HEIGHT = 48;

const Goods = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className="bg-gray-800 p-10 rounded-lg relative">
      <IconBtnStyled
        aria-label="more"
        aria-controls={open ? "center-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert className="text-white" />
      </IconBtnStyled>
      <CustomMenu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          style: { maxHeight: ITEM_HEIGHT * 4.5, width: "24ch" },
        }}
      >
        {optionsMenu.map((optionMenu, index) => (
          <Link to={optionMenu.link || "#"} key={index}>
            <CustomMenuItem onClick={handleClose} className="gap-2">
              <FiEdit color="var(--bg-light)" />
              {optionMenu.label}
            </CustomMenuItem>
          </Link>
        ))}
      </CustomMenu>

      <ContainsGoods>
        {goods.map((good, index) => (
          <div
            key={index}
            className="flex mr-3 justify-around items-center p-2 hover:bg-white/15 rounded-md cursor-pointer flex-wrap"
          >
            <img src={good.image} alt="image" className="w-9" />
            <span>{good.label}</span>
            <span className="max-w-64 truncate">{good.name}</span>
            <span>{good.date}</span>
            <span className="text-gray-400">{good.time}</span>
          </div>
        ))}
      </ContainsGoods>
    </div>
  );
};

export default Goods;

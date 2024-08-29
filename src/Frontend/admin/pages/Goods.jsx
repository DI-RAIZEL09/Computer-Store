{/* Товары */}
import React from "react";
import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { styled } from "@mui/material/styles";

const CustomMenu = styled(Menu)({
  "& .MuiPaper-root": {
    background: "var(--bg-dark-blue)",
    color: "#F3F4F6",
  },
});

const CustomMenuItem = styled(MenuItem) ({
  background:"var(--bg-dark-blue)",
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
  right: "8px"
})

const goods = [
  { image: "assets/svg/chip.svg", label: "Материнская плата", name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00" },
  { image: "assets/svg/chip.svg", label: "Материнская плата", name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00" },
  { image: "assets/svg/chip.svg", label: "Материнская плата", name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00" },
  { image: "assets/svg/chip.svg", label: "Материнская плата", name: "Gigabyte X570S AORUS PRO AX", date: "Вт 17 Июнь", time: "12:00" },
];

const optionsMenu = [
  { label: "Все", link: "" },
  { label: "Раздел" },
  { label: "Добавить новый товар", link: "" },
];
const ITEM_HEIGHT = 48;

const Goods = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className="bg-gray-800 p-10 m-5 rounded-lg relative">
        <IconBtnStyled
          aria-label="more"
          aria-controls={open ? 'center-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
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
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            horizontal: 'right',
            
          }}
          MenuListProps={{
            style: { maxHeight: ITEM_HEIGHT * 4.5, width: '24ch' },
          }}
        >
          {optionsMenu.map((optionMenu, index) => (
            <CustomMenuItem
              key={index}
              onClick={handleClose}
              className="gap-2">
              <FiEdit color="var(--bg-light)" />
              {optionMenu.label}
            </CustomMenuItem>
          ))}
        </CustomMenu>

      <div className="flex flex-col gap-2">
        {goods.map((good, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-4 flex-wrap p-2 text-center hover:bg-white/15 rounded-md"
          >
            <img
              src={good.image}
              alt="icon"
              className="w-9 mr-2"
            />
            <p className="pr-8 text-[var(--bg-blue)]">
              {good.label}
            </p>
            <p className="pr-5">
              {good.name}
            </p>
            <p className="">
              {good.date}
            </p>
            <p className="text-gray-400">
              {good.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goods;
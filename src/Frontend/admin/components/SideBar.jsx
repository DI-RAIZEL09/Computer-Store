import { useEffect, useState } from "react";
import MyButtonUI from "../../UI-components/MyButtonUI";
import {
  NavLink,
  useLocation,
  useNavigate
} from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled
} from "@mui/material";

import { FiFileText, FiMessageSquare, FiUser } from "react-icons/fi";
import { FaPersonWalking } from "react-icons/fa6";
import { LiaSignInAltSolid } from "react-icons/lia";

const navItems = [
  { title: 'Отзывы', path: 'reviews', icon: <FiMessageSquare /> },
  { title: 'Заказы', path: 'orders', icon: <FiFileText /> },
  { title: 'Доставка', path: 'delivery', icon: <FaPersonWalking /> },
  { title: 'Товар', path: 'goods', icon: <FiUser /> },
];

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const currentPath = location.pathname.replace('/admin', '');

  useEffect(() => {
    if (location.pathname === '/admin') {
      navigate('/admin/reviews');
    }
  }, [location, navigate]);

  const handleLogout = (confirm) => {
    confirm ? navigate('/login') : setModalOpen(false);
  };

  return (
    <SidebarContainer>
      <img
        className="object-cover w-16"
        src="/assets/svg/adminLogo.svg"
        alt="logo"
      />

      <nav className="flex flex-col gap-2">
        {navItems.map(({ title, path, icon }) => (
          <StyledNavLink
            key={path}
            to={`/admin/${path}`}
            className={currentPath === path ? 'active' : ''}
          >
            {icon}
            {title}
          </StyledNavLink>
        ))}
      </nav>

      <LogoutButton onClick={() => setModalOpen(true)}>
        <LiaSignInAltSolid fontSize="24px" />
        Выйти
      </LogoutButton>

      <Dialog
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <DialogTitle>Подтвердите выход</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы уверены, что хотите выйти?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MyButtonUIStyled
            onClick={() => handleLogout(false)}
            hovBg="var(--bg-dark-gray)"
            name="Отмена"
          />
          <MyButtonUIStyled
            onClick={() => handleLogout(true)}
            hovBg="#ff5252"
            name="Выйти"
          />
        </DialogActions>
      </Dialog>
    </SidebarContainer>
  );
};

export default SideBar;


const SidebarContainer = styled('div')({
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#21252bbc',
  padding: '1.75rem',
});

const StyledNavLink = styled(NavLink)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.7em',
  padding: '0.75rem',
  borderRadius: '8px',
  fontWeight: 'bold',
  transition: 'transform 0.3s ease-out',
  '&.active': {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: 'var(--bg-dark-hover)',
  },
}));

const LogoutButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  cursor: 'pointer',
  marginBottom: '2em',
  color: '#49DCFF',
  transition: 'transform 0.3s ease-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const MyButtonUIStyled = styled(MyButtonUI)({
  width: '7em',
  height: "3em",
});

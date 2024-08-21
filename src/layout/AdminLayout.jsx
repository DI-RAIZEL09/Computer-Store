import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import HeaderAdmin from '../Frontend/admin/components/HeaderAdmin';
import SideBar from '../Frontend/admin/components/SideBar';

export const AdminLayout = () => {
  return (
    <BodyAdminLayout>
    <AdminLayoutContainer>
      <SideBar/>
      <HeaderAndContent>
        <HeaderAdmin/>
        <Outlet/>
      </HeaderAndContent>
    </AdminLayoutContainer>
    </BodyAdminLayout>
  );
};

const BodyAdminLayout = styled('div')(() => ({
  backgroundImage: "url('./assets/image/Keyboard.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const AdminLayoutContainer = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '15em 1fr',
  gridTemplateRows: '100dvh',
  color: "var(--bg-light)",
  maxWidth: '1200px',
  margin: '0 auto',
  gap: '5px',
}));

const HeaderAndContent = styled('div')(() => ({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
}));

export default AdminLayout;

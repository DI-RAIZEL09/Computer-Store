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
        <OutletContent>
          <Outlet/>
        </OutletContent>
      </HeaderAndContent>
    </AdminLayoutContainer>
    </BodyAdminLayout>
  );
};

const BodyAdminLayout = styled('div')({
  backgroundImage: "url('/assets/image/Keyboard.jpg')",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

const AdminLayoutContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '15em 1fr',
  color: "var(--bg-light)",
  maxWidth: '1200px',
  margin: '0 auto',
});

const HeaderAndContent = styled('div')({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  margin: '4px',
});

const OutletContent = styled('div')({
  display: 'grid',
  minHeight: '70vh',
  padding: "24px 12px",
  overflowY: 'auto',
  overflowX: 'hidden',
  height: '640px'
});

export default AdminLayout;

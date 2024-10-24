import { styled } from "@mui/system";
import AddProduct from './AddProduct';
import SidebarLayout from './SidebarLayout';
import GoodsContent from "./GoodsContent";
import { components } from "./SidebarLayout"

const GoodsLayout = () => {

  return (
    <Container>
      <AddProduct />
      <MainContent>
        <SidebarLayout />
        <Content>
          {components.map((el,index) => {
            return (
              <GoodsContent key={el.id} objkey={el.key} data={el.data} title={el.title} img={el.imgSrc}/>
            )
          })}
        </Content>
      </MainContent>
    </Container>
  );
};

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',

});

const MainContent = styled('div')({
  display: 'grid',
  gridTemplateColumns: '280px 1fr',
  gap: '0.5em',
});

const Content = styled('main')({
  backgroundColor: 'var(--bg-dark-blue)',
  padding: '0.3em 1.5em 0.3em 1em',
});


export default GoodsLayout;

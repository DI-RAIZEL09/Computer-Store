import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

 const AddBasket = () => {
  return (



         <DIVS>
                  <div style={{display:'flex',marginLeft:'40px'}}> <HomeIcon/> <FiberManualRecordIcon style={{width:'8px',color:'rgba(255, 255, 255, 0.2)'}}/>
                   
                   <p>Корзина</p></div>
        <DIV><H1>Корзина</H1>
<P>Посмотрите предложения на главной странице или перейдите в
конфигуратор ПК</P>

<a style={{textAlign:'center',}} href='admin'>Ваша корзина пустая</a>

</DIV>

</DIVS>



  )
}

export default AddBasket ;
const DIVS = styled.div`
         
background-color: rgba(0, 0, 0, 0.793);


`



const DIV = styled.div`
         
background-image: url('https://s3-alpha-sig.figma.com/img/d74b/6d46/887e27e9c00a916be67300bfee8cc42e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi~3QuKXeP6cT0M2dl62LXvPWJU3vYZZ0ZDHvWtGU8-vQ0sBGBk1D9AF-m0ckm0ppvgAw~bK4Ave8anAwaxBC2asvqUpQFKH~m8TJXklwzwKw0gPUw03kN4hs76teGLUZNmrNsdlRcuBQU~giRLHeFT9ncxj1IlJuMOGgpC2E~9DXHfs92H6Ok2ci7UCYaF8u-Ss-7uqbHgPUON-Qo8fUcOhQvE2eUyIcyYPUwtwnsl3I8h~Y93HPdYq7h0gR4xhnCkAdJ9Krhjl5ewcSSTdZJL2yykB1afaC7hibQbaUDHFQ80NQLSqa5S-eA2kPJPrYo-KqP0PXnHD7Ckr1nUiig__');
background-position: 0%;
background-size: cover;
width: 100%;
height: 500px;
/* opacity: 0.4; */

`
const H1 = styled.h1`
         text-align: center;
         font-size: 64px;
         font-weight: 400;
         padding-top: 70px;
         color: rgba(255, 255, 255, 1);
`
const P = styled.p`
text-align: center;
font-size: 36px;
font-weight: 400;
color: rgba(254, 255, 255, 1);
`
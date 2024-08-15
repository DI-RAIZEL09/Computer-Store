
import { CheckboxOutline } from 'react-ionicons'
import styled from 'styled-components';
import img1 from '../../../../public/assets/svg/OurAdvant_svg/class.svg'
import img2 from '../../../../public/assets/svg/OurAdvant_svg/message.svg'
import img3 from '../../../../public/assets/svg/OurAdvant_svg/vector.svg'


const data = [
  {
    id: 1,
    title: "Профессиональная сборка ПК",
    description: "Качественная сборка компьютеров и индивидуальная настройка от инженеров компании EDELWEISS.Персонификация системных блоков",
    number: "01",
    img: img1
  },
  {
    id: 2,
    title: "Фирменная гарантия",
    description: "Расширенная гарантия на компьютер 1 год + 2 года бесплатного сервисного обслуживания от интернетмагазина EDELWEISS",
    number: "02",
    img: img3

  },
  {
    id: 3,
    title: "Техническая поддержка",
    description: "Оперативно ответим на любые вопросы по настройке оборудования и программного обеспечения при необходимости удаленно настроим ваш ПК",
    number: "03",
    img: img2


    
  },
  {
    id: 4,
    title: "Доставка по всей России",
    description: "Доставка по всей территории РФ. 100 % страховка грузана полную стоимость. Бесплатная доставка по Москве собственной логистической службой",
    number: "04",
    img: img3

  },
  {
    id: 5,
    title: "Официальный партнер",
    description: "Компания EDELWEISS является сертифицированным партнером INTEL, ASUS, MSI, NVIDIA по сборке готовых игровых решений на базе GEFORCE RTX",
    number: "05",
    img: img1

   

  },
  {
    id: 6,
    title: "Акции Скидки Подарки",
    description: "На сайте регулярно проводятся акции, действует специальная система скидок и спецпредложений,разыгрываются ценные подарки",
    number: "06",
    img:img2


  },

];




const OurAdvant = () => {
  return (
    <>
      <H1>Наши преимущества</H1>
      <div style={{display:'flex',justifyContent:'center',marginTop:'40px',}}>

     
     <CARDS>
           {data.map((item) => (
             <CARD key={item.id}>
              
              <Icon src={item.img} alt="" />       
              <DAVE>
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                   <p style={{ color: 'rgba(73, 220, 255, 1)', }}>{item.number}</p>
                   <div style={{ border: "1px solid rgba(73,220,255,1)", height: "2px", width: "50px", borderRadius: "2px", marginLeft: '10px' }} />
                 </div>
                 <CheckboxOutline
                   color={'rgba(73, 220, 255, 1)'}
                   height="20px"
                   width="20px"
                 />
               </DAVE>
               <H2>{item.title}</H2>
               <P>{item.description}</P>
            
             </CARD>
           ))}
         </CARDS>
     
      </div>
    </>
      )
    }
    
    export default OurAdvant


   

 const CARDS = styled.div`
  display: grid;
  grid-template-columns:repeat(3,1fr);    
   
  gap:5px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns:repeat(auto-fit,
      min-max(min(11.25rem,100%),1fr));  
  }


  @media screen and (max-width: 480px) {
    gap: 10px;


  }

`
const CARD = styled.div`
  background-color: rgba(28, 35, 46, 1);
  border: 1px solid #606266;
  padding: 20px;
  max-width: 680px;
  height: 230px;
  position: relative;
  z-index: 2;
  background-image: url(${props => props.img});
  background-size: 130px;
  background-position: right 20px;
  background-repeat: no-repeat;


  @media screen and (max-width: 768px) {
    background-position: center;
    background-size: 100px;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    background-position: center;
    background-size: 80px;
    width: 350px;
  }

  @media screen and (max-width: 320px) {
    padding: 5px;
    background-size: 60px;
  }


`
const DAVE = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:90%;
  margin-left: 18px;
  
  @media screen and (max-width: 768px) {
    width: 90%;
  }

`

const Icon = styled.img`
position: absolute;
right: 20px;
top:60px;
z-index: 1;


`

const H1 = styled.h1`
   color: white;
   font-size: 30px;
   margin-top: 20px;
   margin-left: 25px;

   @media screen and (max-width: 420px){
    font-size: 20px;
   }
 `




const H2 = styled.h2`
   color: rgba(255, 255, 255, 1);
  font-size: 20px;
  padding: 10px 0;
  line-height: 32px;
  font-weight: 400;
margin-left: 18px;
position: relative;
z-index: 2;

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`
const P = styled.p` 
 color: rgba(132, 144, 164, 1);
  font-size: 14px;
  padding: 0px 0px 10px 20px;
  line-height: 24px;
  font-weight: 400;
  width: 400px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 480px) {
    font-size: 9px;
    width: 300px;

  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }

`






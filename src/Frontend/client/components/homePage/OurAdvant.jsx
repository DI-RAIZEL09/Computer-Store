import { BiLike } from 'react-icons/bi';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { TbMessage } from 'react-icons/tb';
import styled from 'styled-components';

const ourAdvant = [
  {
    id: 1,
    title: "Профессиональная сборка ПК",
    description: "Качественная сборка компьютеров и индивидуальная настройка от инженеров компании EDELWEISS. Персонификация системных блоков",
    icon: <BiLike />
  },
  {
    id: 2,
    title: "Фирменная гарантия",
    description: "Расширенная гарантия на компьютер 1 год + 2 года бесплатного сервисного обслуживания от интернет-магазина EDELWEISS",
    icon: <MdOutlineVerifiedUser />
  },
  {
    id: 3,
    title: "Техническая поддержка",
    description: "Оперативно ответим на любые вопросы по настройке оборудования и программного обеспечения. При необходимости удаленно настроим ваш ПК.",
    icon: <TbMessage />
  },
  {
    id: 4,
    title: "Доставка по всей России",
    description: "Доставка по всей территории РФ. 100 % страховка груза на полную стоимость. Бесплатная доставка по Москве собственной логистической службой.",
    icon: <MdOutlineVerifiedUser />
  },
  {
    id: 5,
    title: "Официальный партнер",
    description: "Компания EDELWEISS является сертифицированным партнером INTEL, ASUS, MSI, NVIDIA по сборке готовых игровых решений на базе GEFORCE RTX.",
    icon: <BiLike />
  },
  {
    id: 6,
    title: "Акции Скидки Подарки",
    description: "На сайте регулярно проводятся акции, действует специальная система скидок и спецпредложений, разыгрываются ценные подарки.",
    icon: <TbMessage />
  },
];


const OurAdvant = () => {
  return <>
    <h1 className='text-3xl my-8'>Наши преимущества</h1>
    <Cards>
      {ourAdvant.map((item) => (
        <Card key={item.id}>
          <div className='flex items-center gap-3 text-[var(--bg-blue)]'>
            {'0' + item.id}
            <span className='w-10 border-[1px] border-[var(--bg-blue)]' />
            <span className='ml-auto'>{item.icon}</span>
          </div>
            <h2 className='text-2xl z-10'>{item.title}</h2>
            <p className='text-sm h-14 z-10 text-gray-400'>{item.description}</p>
          <IconWrapper>{item.icon}</IconWrapper>
        </Card>
      ))}
    </Cards>
  </>
};

export default OurAdvant;


const Cards = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1px;
`
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: clamp(320px, 100%, 475px);
  padding: 36px 24px;
  gap: 1em;
  background: var(--bg-dark-blue);
`
const IconWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 45px;
  font-size: 135px;
  color: var(--bg-dark);
`

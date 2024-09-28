import { useState } from 'react';
import { styled } from '@mui/material';
import TabsUI from '../components/UI/TabsUI';

import Carousel from '../components/homePage/Carousel.jsx';
import OurAdvant from '../components/homePage/OurAdvant.jsx';
import OurComp from '../components/homePage/OurComp.jsx';

import { Recommendations } from '../components/homePage/Recommendations.jsx';
import { ContentForProduct } from '../components/homePage/ContentForProduct.jsx';


const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const titles = [
    { label: 'Ноутбуки', icon: <svg width="15" height="14" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.072 5.57462V3.65619C13.072 2.97462 12.5149 2.41747 11.8343 2.41747H6.88126L5.64348 1.17969H1.92919C1.24855 1.17969 0.691406 1.73683 0.691406 2.41747V9.84604C0.691406 10.5276 1.24855 11.0848 1.92919 11.0848H6.38633C7.12919 12.199 8.49141 12.9419 9.97712 12.9419C12.3914 12.9419 14.3098 11.0225 14.3098 8.60826C14.3098 7.43176 13.8149 6.37969 13.072 5.57462ZM5.82919 9.84604H1.92919V3.65619H11.8343V4.70826C11.2771 4.39904 10.6578 4.27462 9.97712 4.27462C9.40702 4.27104 8.84188 4.38069 8.31449 4.59721C7.78709 4.81373 7.30793 5.13281 6.9048 5.53594C6.50167 5.93907 6.18259 6.41823 5.96607 6.94562C5.74955 7.47302 5.6399 8.03816 5.64348 8.60826C5.64348 9.0419 5.70569 9.47462 5.82919 9.84604ZM9.97712 11.7032C9.56947 11.7074 9.16508 11.6302 8.78763 11.4762C8.41017 11.3222 8.06725 11.0944 7.77894 10.8062C7.49063 10.5179 7.26273 10.1751 7.10859 9.79768C6.95445 9.42028 6.87716 9.01591 6.88126 8.60826C6.87729 8.20064 6.95466 7.79633 7.10885 7.41898C7.26304 7.04163 7.49094 6.69883 7.77922 6.41063C8.06751 6.12243 8.41038 5.89463 8.78778 5.74056C9.16517 5.58649 9.56951 5.50924 9.97712 5.51333C10.3847 5.50923 10.789 5.58649 11.1663 5.74057C11.5437 5.89466 11.8865 6.12247 12.1747 6.41068C12.4629 6.69889 12.6907 7.04171 12.8448 7.41905C12.9989 7.7964 13.0761 8.20069 13.072 8.60826C13.0761 9.01583 12.9989 9.42012 12.8448 9.79747C12.6907 10.1748 12.4629 10.5176 12.1747 10.8058C11.8865 11.094 11.5437 11.3219 11.1663 11.4759C10.789 11.63 10.3847 11.7073 9.97712 11.7032ZM10.5955 7.37047H9.35776V6.13176H10.5955V7.37047ZM10.5955 11.0848H9.35776V7.9889H10.5955V11.0848Z" fill="currentColor" />
    </svg> },
    { label: 'ПК', icon: <svg width="10" height="10" viewBox="0 0 12 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5725 9.85157C11.5728 9.96357 11.5424 10.0735 11.4847 10.1694C11.4269 10.2654 11.3439 10.3436 11.2448 10.3957L6.35398 13.1443C6.25151 13.2186 6.1277 13.2577 6.00112 13.2557C5.87454 13.2577 5.75073 13.2186 5.64826 13.1443L0.757478 10.3957C0.658339 10.3436 0.575369 10.2654 0.517581 10.1694C0.459793 10.0735 0.429396 9.96357 0.429693 9.85157V4.28015C0.429226 4.168 0.459543 4.05787 0.51734 3.96176C0.575137 3.86565 0.658199 3.78724 0.757478 3.73507L5.64826 0.986503C5.75073 0.912159 5.87454 0.87306 6.00112 0.875074C6.13112 0.875074 6.25462 0.912217 6.35398 0.986503L11.2448 3.73507C11.344 3.78724 11.4271 3.86565 11.4849 3.96176C11.5427 4.05787 11.573 4.168 11.5725 4.28015V9.85157ZM6.00112 2.20572L4.83112 2.86872L8.47762 4.96729L9.69033 4.28015L6.00112 2.20572ZM2.31191 4.28015L6.00112 6.35365L7.21476 5.673L3.57476 3.56793L2.31191 4.28015ZM1.66748 9.48572L5.38176 11.5787V7.42429L1.66748 5.33872V9.48572ZM10.3348 9.48572V5.33872L6.62048 7.42429V11.5787L10.3348 9.48572Z" fill="currentColor"/>
    </svg> },
  ];
  const headers = ['Производитель игровых Ноутбуков', 'Производитель игровых ПК'];

  return (
    <div>
      <Carousel />
      <TabsText>{headers[activeTab]}</TabsText>
      <TabsUI titles={titles} onTabChange={setActiveTab}>

         <div>
          <Recommendations />
          <div className='mt-[100px]'><ContentForProduct /></div>
         </div>

         <div>
          <Recommendations />
          <div className='mt-[100px]'><ContentForProduct /></div>
         </div>

      </TabsUI>
      <OurAdvant />
      <OurComp />
    </div>
  );
};

export default HomePage;

const TabsText = styled('h1')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  padding: '20px 0',
  background: 'var(--bg-dark)',
})
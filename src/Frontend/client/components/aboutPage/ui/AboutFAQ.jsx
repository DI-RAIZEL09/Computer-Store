import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';

const accordionData = [
  {
    category: 'Вопросы по доставке',
    questions: [
      { question: 'Сколько ждать доставку если я живу в другом городе?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Как долго ждать доставку компьютера по Бишкеку?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Сколько стоит доставка по бишкеку?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Сколько стоит доставка до моего города?', answer: 'Lorem ipsum dolor sit amet...' }
    ]
  },
  {
    category: 'Вопросы по сборке',
    questions: [
      { question: 'Могу ли я заказать компьютер с комплектующими которые не представлены на вашем сайте?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Компьютер будет опломбирован?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Тестируете ли вы собранные компьютеры?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Можно ли добавить в сборку мои комплектующие?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Можно ли вносить изменения в представленные на сайте конфигурации?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Сколько времени занимает изготовление компьютеров EDELWEISS?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Если я соберу ПК в конфигураторе, нужно ли мне собирать его самому?', answer: 'Lorem ipsum dolor sit amet...' }
    ]
  },
  {
    category: 'Вопросы по оплате',
    questions: [
      { question: 'Не повредят ли мой заказ во время транспортировки?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Каковы гарантии что после внесения предоплаты я получу свой заказ?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Нужно ли мне вносить предоплату если я заказываю компьютер с доставкой по Кыргызстану?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Как я могу оплатить свой заказ?', answer: 'Lorem ipsum dolor sit amet...' }
    ]
  },
  {
    category: 'Вопросы по гарантии',
    questions: [
      { question: 'Можете ли вы приехать ко мне домой/работу и устранить неисправность?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Сколько времени уходит на решение проблемы в случае возникновения гарантийного случая?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Какая гарантия дается на компьютеры?', answer: 'Lorem ipsum dolor sit amet...' }
    ]
  },
  {
    category: 'Вопросы по кредиту',
    questions: [
      { question: 'Как узнать одобрили ли мне кредит?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Какой будет ежемесячный платеж?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Для оформления кредита мне нужно приезжать в ваш магазин?', answer: 'Lorem ipsum dolor sit amet...' },
      { question: 'Можно ли купить компьютер в кредит?', answer: 'Lorem ipsum dolor sit amet...' }
    ]
  }
];

export default function AccordionUsage() {
  return (
    <div className='space-y-8'>
      {accordionData.map((categoryData, index) => (
        <div key={index} className='mb-4'>
          <h3 className='text-lg sm:text-xl font-semibold text-[#49dcff] mb-4'>{categoryData.category}</h3>
          {categoryData.questions.map((item, qIndex) => (
            <Accordion key={qIndex} sx={{ backgroundColor: '#2C3449', color: '#8490A4' }}>
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: '#49dcff' }} />}
                aria-controls={`panel${qIndex}-content`}
                id={`panel${qIndex}-header`}
                sx={{ backgroundColor: '#2C3449', color: '#8490A4' }}
              >
                <span className='text-sm sm:text-base'>{item.question}</span>
              </AccordionSummary>
              <AccordionDetails>
                <span className='text-xs sm:text-sm'>{item.answer}</span>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ))}
    </div>
  );
}
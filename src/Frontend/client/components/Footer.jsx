import whatsapp from '/assets/svg/whatsapp.svg'
import telegram from '/assets/svg/telegram.svg'
import instagram from '/assets/svg/instagram.svg'
import '../../../index.css'

const Footer = () => {
  return (
    <footer className=" w-full">
      <div className=' w-full bg-[#212936] px-14 pt-7 pb-10 flex flex-col-reverse gap-4 laptop:flex-row'>
        <article className=' w-[20%] flex flex-col items-start justify-center gap-3'>
          <div className=' flex gap-2'>
            <img src={whatsapp} alt="" />
            <img src={telegram} alt="" />
            <a href="https://www.instagram.com/amin_stors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img src={instagram} alt="" />
            </a>
          </div>

          <span className=' font-sans py-3 text-[#49DCFF] pr-3'>г. Бишкек, Буденного 138/1 Токтогула 211</span>
          <span className=' text-[#5F697A] text-sm pr-3'>Обработка и прием заказов по телефону:</span>
          <span className=' text-[#49DCFF] font-sans text-lg'>+ 996 700 99 19 23</span>
          <span className=' text-[#5F697A] text-sm pr-3'>Пн-Пт: 09:00 - 20:00</span>
          <span className=' text-[#5F697A] text-sm pr-3'>Сб-Вс: 09:00 - 20:00</span>
        </article>

        <article className=' w-full laptop:w-[80%]'>
          <h1 className=' text-[#5F697A]'>Каталог AMIN STORS</h1>
          <div className=' footer-scrollbar custom-list-color w-full flex laptop:flex-wrap justify-between items-start  pt-7 pb-2 overflow-x-scroll touch-auto whitespace-nowrap mobile:gap-5 '>
            <ul className=' flex flex-col gap-5 list-disc list-inside font-sans text-xs'>
              <li>АКСЕССУАРЫ ДЛЯ ПК</li>
              <li>КОМПЬЮТЕРЫ В РАССРОЧКУ</li>
              <li>ЭКСТРЕМАЛЬНАЯ СЕРИЯ</li>
              <li>ГРАФИЧЕСКИЕ СТАНЦИИ</li>
              <li>КОМПЬЮТЕРЫ ДЛЯ ФОТО</li>
            </ul>
            <ul className=' flex flex-col gap-5 list-disc list-inside font-sans text-xs'>
              <li>ПК с GEFORCE GTX 16XX</li>
              <li>ПК с GEFORCE RTX 4060</li>
              <li>ПК с GEFORCE RTX 4070</li>
              <li>ПК с GEFORCE RTX 4080</li>
              <li>ПК с GEFORCE RTX 4090</li>
            </ul>
            <ul className=' flex flex-col gap-5 list-disc list-inside font-sans text-xs'>
              <li>Игровые станции от 30 000</li>
              <li>Игровые станции от 100 000</li>
              <li>Игровые станции от 200 000</li>
              <li>Подобрать игровой ПК</li>
            </ul>
            <ul className=' flex flex-col gap-5 list-disc list-inside font-sans text-xs'>
              <li>КОМПЬЮТЕРЫ с INTEL CORE i3</li>
              <li>КОМПЬЮТЕРЫ с INTEL CORE i5</li>
              <li>КОМПЬЮТЕРЫ с INTEL CORE i7</li>
              <li>КОМПЬЮТЕРЫ с INTEL CORE i9</li>
              <li>ПК с ВОДЯНЫМ ОХЛАЖДЕНИЕМ</li>
            </ul>
            <ul className=' flex flex-col gap-5 list-disc list-inside font-sans text-xs'>
              <li>Офисный</li>
              <li>Игровой</li>
              <li>Для бизнеса</li>
              <li>Для программирование</li>
              <li>3д моделирование</li>
              <li>Для монтажа</li>
            </ul>
          </div>
        </article>
      </div>
    </footer>
  )
}

export default Footer
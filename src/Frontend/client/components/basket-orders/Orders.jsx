import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const data = [
    {
        id: 0,
        img: '/assets/image/pcOrder.png',
        name: 'HUNTER',
        text: ' HUNTER - недорогой компьютер для игр. Прекрасно справляется с CS:GO, Dota 2, Fortnite, Minecraft   и другим современными игровыми приложениями, показывая достаточно высоким показатели FPS. Прекрасный помощник в учебе для школьника.',
        price: 54900
    },
    {
        id: 1,
        img: '/assets/image/pcOrder.png',
        name: 'HUNTER',
        text: ' HUNTER - недорогой компьютер для игр. Прекрасно справляется с CS:GO, Dota 2, Fortnite, Minecraft   и другим современными игровыми приложениями, показывая достаточно высоким показатели FPS. Прекрасный помощник в учебе для школьника.',
        price: 54900
    },
    {
        id: 2,
        img: '/assets/image/pcOrder.png',
        name: 'HUNTER',
        text: ' HUNTER - недорогой компьютер для игр. Прекрасно справляется с CS:GO, Dota 2, Fortnite, Minecraft   и другим современными игровыми приложениями, показывая достаточно высоким показатели FPS. Прекрасный помощник в учебе для школьника.',
        price: 54900
    },
    {
        id: 3,
        img: '/assets/image/pcOrder.png',
        name: 'HUNTER',
        text: ' HUNTER - недорогой компьютер для игр. Прекрасно справляется с CS:GO, Dota 2, Fortnite, Minecraft   и другим современными игровыми приложениями, показывая достаточно высоким показатели FPS. Прекрасный помощник в учебе для школьника.',
        price: 54900
    },
    {
        id: 4,
        img: '/assets/image/pcOrder.png',
        name: 'HUNTER',
        text: ' HUNTER - недорогой компьютер для игр. Прекрасно справляется с CS:GO, Dota 2, Fortnite, Minecraft   и другим современными игровыми приложениями, показывая достаточно высоким показатели FPS. Прекрасный помощник в учебе для школьника.',
        price: 54900
    },
    {
        id: 2,
        img: '/assets/image/pcOrder.png',
        name: 'HUNTER',
        text: ' HUNTER - недорогой компьютер для игр. Прекрасно справляется с CS:GO, Dota 2, Fortnite, Minecraft   и другим современными игровыми приложениями, показывая достаточно высоким показатели FPS. Прекрасный помощник в учебе для школьника.',
        price: 54900
    },
]

export const Orders = () => {
    const [counts, setCounts] = useState(Array(data.length).fill(0));

    const totalItems = counts.reduce((acc, count) => acc + count, 0);
    const totalPrice = counts.reduce((acc, count, index) => acc + count * Number(data[index].price), 0);

    const handleIncrement = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    const handleDecrement = (index) => {
        const newCounts = [...counts];
        if (newCounts[index] > 0) {
        newCounts[index] -= 1;
        }
        setCounts(newCounts);
    };

    const calculateMonthlyPayment = (price) => {
        return price / 10;
    };

  return (
    <div className=" w-full h-fit flex flex-col items-center justify-between px-5">
        {data.map((item, index) => (
            <div 
                key={index} 
                className={`flex items-center justify-between ${index < data.length - 1 ? 'border-b-2 border-[#5A5A5A]' : ''} py-10`}>
                <section className=" w-[40%] py-10 flex">
                    <div className=" flex items-center justify-between">
                        <img
                            src={item.img}
                            alt="img"
                            className=" h-fit cover"
                        />
                        <div className=" h-full flex flex-col items-start justify-start">
                            <h1 className=" text-4xl font-sans ">{item.name}</h1>
                            <span className=" text-sm font-sans text-[#8490A4] pt-7">{item.text}</span>
                        </div>                
                    </div>
                </section>
                <section className=" h-full flex flex-col items-start justify-between gap-16 mobile:py-0 tablet:py-10 ">
                    <article className=" flex justify-end place-self-end pr-5">
                        <div className=" flex items-center justify-center gap-5">
                            <button className=" border-r border-[#EBEBEB] text-5xl text-[#49DCFF] pr-5" onClick={() => handleDecrement(index)}><RemoveIcon/></button>
                            <p className=" text-3xl font-sans">{counts[index]}</p>
                            <button className=" border-l border-[#EBEBEB] text-5xl text-[#49DCFF] pl-5" onClick={() => handleIncrement(index)}><AddIcon/></button>
                        </div>
                        <img src="/assets/svg/Close.svg" alt="close" className="pl-10 cursor-pointer"/>
                    </article>
                    <div className=" flex flex-col gap-7">
                        <article className=" flex gap-6flex-row">
                            <button className=" text-black font-mono tracking-wider bg-[#49DCFF] rounded-md px-10 py-3" onClick={() => handleIncrement(index)}>КУПИТЬ</button>
                            <div className=" flex flex-col items-start">
                                <div className=" flex items-center justify-center gap-3">
                                    <h3 className=" flex items-center font-sans text-[#49DCFF] text-3xl">{item.price.toLocaleString('ru-RU')}</h3>
                                    <img src="/assets/svg/som.svg" alt="" />
                                </div>
                                <div className=" flex gap-1">
                                    <span className=" font-sans text-[#8490A4] text-[9px]">от {calculateMonthlyPayment(totalPrice)} сом в месяц</span>
                                    <img src="/assets/svg/info.svg" alt="" />
                                </div>
                            </div>
                        </article>
                        <div className=" flex gap-4">
                            <button className=" uppercase text-[#49DCFF] bg-[#2C3849] px-5 py-2 font-sans rounded-md">изменить конфигурацию</button>
                            <button className=" uppercase text-[#49DCFF] bg-[#2C3849] px-5 py-2 font-sans rounded-md">помощь специалиста</button>
                        </div>
                    </div>
                </section>
            </div>
        ))}

        <div className=" bg-[#18171A] w-full flex flex-col justify-center items-center gap-20 pb-10 pt-10">
            <div className=" w-full flex flex-row justify-between px-20">
                <div className=" text-3xl">
                    <h3 className=" font-sans font-normal">Товары , {totalItems} шт</h3>
                    <h2 className=" font-sans font-normal">Итого</h2>
                </div>
                <div className=" flex flex-col items-start gap-1">
                    <div className=" flex items-center justify-center gap-1">
                        <h3 className=" flex items-center font-sans text-4xl font-normal text-[#49DCFF]">{totalPrice.toLocaleString('ru-RU')}</h3>
                        <img src="/assets/svg/som.svg" alt="" />
                    </div>
                    <div className=" flex gap-1">
                        <span className=" font-sans text-[#8490A4] text-[9px] text-xs">от 5 490 сом в месяц</span>
                        <img src="/assets/svg/info.svg" alt="" />
                    </div>
                </div>
            </div>
            <button className=" w-[30%] text-black font-sans tracking-wider bg-[#49DCFF] rounded-md px-10 py-3 uppercase">Оформить заказ</button>
        </div>

    </div>
  )
}
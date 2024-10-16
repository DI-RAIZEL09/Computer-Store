export const TotalPrice = () => {
  return (
    <div className=" bg-[#18171A] flex flex-col justify-center items-center gap-20 pb-10 pt-10">
        <div className=" w-full flex flex-row justify-between px-20">
            <div className=" text-3xl">
                <h3>Товары , 4 шт</h3>
                <h2>Итого</h2>
            </div>
            <div className=" flex flex-col items-start gap-1">
                <div className=" flex items-center justify-center gap-1">
                    <h3 className=" flex items-center font-sans text-4xl font-normal text-[#49DCFF]">54 900</h3>
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
  )
}

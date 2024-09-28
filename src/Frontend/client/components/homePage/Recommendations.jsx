const data = [
  {
      img: '/assets/image/Picture.png',
      title: "КОМПЬЮТЕРЫ С СВО",
      text: "Мощнейшие игровые станции с жидкостным охлаждением процессора и видеокарты."
  },
  {
      img: '/assets/image/Picture.png',
      title: "ПК Powered by Asus",
      text: "Мощнейшие и надежные игровые ПК собранные на отборных комплектующих ASUS Republic of Gamers"
  },
  {
      img: '/assets/image/Picture.png',
      title: "Графические станции",
      text: "Компьютеры для графики и тяжелых инженерных расчетов, 3D программ"
  },
]

export const Recommendations = () => {
  return (
    <div className="w-full h-auto mx-auto gap-10 grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 mt-9">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-full flex flex-col mobile:flex-row items-center justify-end relative bg-[#1C232E] p-[14px] pb-[60px] capitalize md:uppercase hover:bg-[var(--bg-blue)] transition-colors duration-300 ease-in-out hover:text-black group"
        >
          <img
            src={item.img}
            alt="img"
            className="absolute top-[-20px] left-0 z-0 w-[40%] h-full object-fill"
          />
          <div className="w-[60%] mobile:w-[60%] h-full mobile:gap-1 mobile:px-2 mobile:py-0 gap-4 z-10 p-5">
            <h3 className="text-[#49DCFF] mobile:text-[10px] tablet:text-xl desktop:text-base transition-colors duration-300 ease-in-out group-hover:text-[var(--bg-dark-blue)]">{item.title}</h3>
            <p className="text-[#8490A4] mobile:text-[10px] tablet:text-lg desktop:text-base font-sans pt-3 leading-relaxed transition-colors duration-300 ease-in-out group-hover:text-black">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

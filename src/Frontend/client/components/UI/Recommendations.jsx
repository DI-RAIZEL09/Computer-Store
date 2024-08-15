export const Recommendations = () => {
    const data = [
        {
          img: '/assets/svg/pc.svg',
          title: "КОМПЬЮТЕРЫ С СВО",
          text: "Мощнейшие игровые станции с жидкостным охлаждением процессора и видеокарты."
        },
        {
          img: '/assets/svg/pc.svg',
          title: "КОМПЬЮТЕРЫ С СВО",
          text: "Мощнейшие игровые станции с жидкостным охлаждением процессора и видеокарты."
        },
        {
          img: '/assets/svg/pc.svg',
          title: "КОМПЬЮТЕРЫ С СВО",
          text: "Мощнейшие игровые станции с жидкостным охлаждением процессора и видеокарты."
        },
      ]

  return (
    <div className="w-[96%] h-auto mx-auto gap-10 grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3">
      {data.map((item, index) => (
        <div
        key={index}
        className="w-full flex flex-col mobile:flex-row items-center justify-end relative bg-[#1C232E] p-[24px] pb-[60px]"
        >
            <img
              src={item.img}
              alt="img"
              className="absolute top-[-20px] left-0 z-0 w-[40%] h-full object-fill"
            />
          <div className="w-[60%] mobile:w-[60%] h-full mobile:gap-1 mobile:px-1 mobile:py-0 gap-4 z-10 p-5">
            <h3 className="text-[#49DCFF] mobile:text-[10px] tablet:text-xl desktop:text-base">{item.title}</h3>
            <p className="text-[#8490A4] text-sm mobile:text-[10px] tablet:text-lg desktop:text-base font-sans pt-3 leading-relaxed">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
)
}

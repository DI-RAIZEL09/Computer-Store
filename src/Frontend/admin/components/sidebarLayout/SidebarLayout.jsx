import { styled } from '@mui/material/styles'
const components = [
    {
        id: 1,
        imgSrc: "assets/svg/spares/cpu.svg",
        title: "Процессор",
        description: "AMD Ryzen 5 3600 3600 МГц"
    },
    {
        id: 2,
        imgSrc: "assets/svg/spares/cooler.svg",
        title: "Охлаждение ",
        description: "AMD Original TM"
    },
    {
        id: 3,
        imgSrc: "assets/svg/spares/gigabyte.svg",
        title: "Материнская плата",
        description: "Gigabyte A520M"
    },
    {
        id: 4,
        imgSrc: "assets/svg/spares/pamiat.svg",
        title: "Оперативная память",
        description: "8Гб DDR4 3000 МГц"
    },
    {
        id: 5,
        imgSrc: "assets/svg/spares/graphic.svg",
        title: "Видеокарта ",
        description: "GEFORCE GT 1030 2Гб "
    },
    {
        id: 6,
        imgSrc: "assets/svg/spares/hardDrive.svg",
        title: "",
        description: "Жёсткий диск"
    },
    {
        id: 7,
        imgSrc: "assets/svg/spares/hewlett.svg",
        title: "SSD диск 1",
        description: "480 Гб Hewlett-Packard"
    },
    {
        id: 8,
        imgSrc: "assets/svg/spares/hewlett.svg",
        title: " ",
        description: "SSD диск 2 "
    },
    {
        id: 9,
        imgSrc: "assets/svg/spares/withoutDrive.svg",
        title: "DVD-привод",
        description: "Без привода"
    },
    {
        id: 10,
        imgSrc: "assets/svg/spares/powerCase.svg",
        title: "Корпус ",
        description: " POWERCASE MISTRAL X4 W  "
    },
    {
        id: 11,
        imgSrc: "assets/svg/spares/raidMax.svg",
        title: "Блок питания",
        description: "500W RaidMax"
    },
    {
        id: 12,
        imgSrc: "assets/svg/spares/wiFi.svg",
        title: "Wi-Fi адаптер",
        description: "Не установлено"
    },
    {
        id: 13,
        imgSrc: "assets/svg/spares/graphic.svg",
        title: "Звуковая карта",
        description: "Звуковая карта"
    },
    {
        id: 13,
        imgSrc: "assets/svg/spares/windows.svg",
        title: "Блок питания",
        description: "Corsair RM750x 750W"
    },
    {
        id: 14,
        imgSrc: "assets/svg/spares/mouse.svg",
        title: "",
        description: "Мышь "
    }
];


const SidebarLayout = () => {
    return (
        <SidebarLayoutStyled className="w-[20vw] h-[80vh] bg-gray-700 overflow-y-auto overflow-x-hidden">
            {components.map((component) => (
                <div key={component.id} className="">

                    <div className="flex items-center pt-5">
                        <img className="ml-[20px] mr-4" src={component.imgSrc} alt="img"/>
                        <nav>
                            <p className="text-[10px] font-normal text-[#8490A4]">{component.title}</p>
                            <h1 className="text-[15px] font-normal">{component.description}</h1>

                        </nav>
                    </div>
                    <hr className="w-[355px] items-center ml-5 mt-[17px] border-t-1 border-[#8490A4] "/>


                </div>
            ))}

        </SidebarLayoutStyled>
    );
};

export default SidebarLayout;

const SidebarLayoutStyled = styled('div')({
    '&::-webkit-scrollbar': {
        width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'var(--bg-blue)',
        borderRadius: '4px',
    },
})

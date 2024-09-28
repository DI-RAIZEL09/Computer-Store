const components = [
    { id: 1, imgSrc: "/assets/svg/spares/cpu.svg", title: "Процессор", description: "AMD Ryzen 5 3600 3600 МГц" },
    { id: 2, imgSrc: "/assets/svg/spares/cooler.svg", title: "Охлаждение", description: "AMD Original TM" },
    { id: 3, imgSrc: "/assets/svg/spares/gigabyte.svg", title: "Материнская плата", description: "Gigabyte A520M" },
    { id: 4, imgSrc: "/assets/svg/spares/pamiat.svg", title: "Оперативная память", description: "8Гб DDR4 3000 МГц" },
    { id: 5, imgSrc: "/assets/svg/spares/graphic.svg", title: "Видеокарта", description: "GEFORCE GT 1030 2Гб" },
    { id: 6, imgSrc: "/assets/svg/spares/hardDrive.svg", title: "Жёсткий диск", description: "" },
    { id: 7, imgSrc: "/assets/svg/spares/hewlett.svg", title: "SSD диск 1", description: "480 Гб Hewlett-Packard" },
    { id: 8, imgSrc: "/assets/svg/spares/hewlett.svg", title: "SSD диск 2", description: "" },
    { id: 9, imgSrc: "/assets/svg/spares/withoutDrive.svg", title: "DVD-привод", description: "Без привода" },
    { id: 10, imgSrc: "/assets/svg/spares/powerCase.svg", title: "Корпус", description: "POWERCASE MISTRAL X4 W" },
    { id: 11, imgSrc: "/assets/svg/spares/raidMax.svg", title: "Блок питания", description: "500W RaidMax" },
    { id: 12, imgSrc: "/assets/svg/spares/wiFi.svg", title: "Wi-Fi адаптер", description: "Не установлено" },
    { id: 13, imgSrc: "/assets/svg/spares/graphic.svg", title: "Звуковая карта", description: "Звуковая карта" },
    { id: 14, imgSrc: "/assets/svg/spares/windows.svg", title: "Блок питания", description: "Corsair RM750x 750W" },
    { id: 15, imgSrc: "/assets/svg/spares/mouse.svg", title: "Мышь", description: "" },
];

const SidebarLayout = () => {
    return (
        <div className="h-[100vh] pr-2 overflow-y-auto overflow-hidden">
            {components.map((component) => (
                <div key={component.id} className="py-3">
                    <div className="flex items-center">
                        <img className="w-8 h-8 mr-4" src={component.imgSrc} alt={component.title || "Component Image"} />
                        <nav>
                            {component.title && <p className="text-xs font-medium text-gray-400">{component.title}</p>}
                            <h1 className="text-sm">
                                {component.description || "Описание отсутствует"}
                            </h1>
                        </nav>
                    </div>
                    <hr className="mt-3 mx-1 border-gray-600" />
                </div>
            ))}
        </div>
    );
};

export default SidebarLayout;

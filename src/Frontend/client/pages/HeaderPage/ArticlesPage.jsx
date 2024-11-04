import bg from "../../../../../public/assets/image/bg3.png";

const ArticleCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-[#1c232e] shadow-lg rounded-lg overflow-hidden w-80 m-4">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};
const ArticlesPage = () => {
  const articles = [
    {
      title: 'Сборка игрового ПК',
      description: 'Руководство по сборке мощного игрового компьютера.',
      imageUrl: '/assets/image/mirage.png',
    },
    {
      title: 'Обзор процессоров 2023 года',
      description: 'Сравнение лучших процессоров для игр и работы.',
      imageUrl: '/assets/image/mirage.png',
    },
    {
      title: 'Выбор видеокарты',
      description: 'Как выбрать видеокарту для ваших нужд.',
      imageUrl: '/assets/image/mirage.png',
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(16, 14, 14, 0.772), rgba(0, 0, 0, 0.871)),url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          
          backgroundRepeat: "no-repeat",
          height: "321px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="text-[64px] font-normal text-white ">Новости</h1>
        <h6 className="text-[32px] md:text-[20px] font-normal text-center text-white">
          Наши статьи на тему сборки компьютеров и не только
        </h6>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start p-4 sm:p-8">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
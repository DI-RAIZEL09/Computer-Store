const ClientsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      <div
        style={{
          backgroundImage: 'url(/assets/image/bg5.png)',
          backgroundSize: 'cover',
          height: '321px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: "100%",
        }}
        className="text-center px-4"
      >
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'normal',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.878)',
          }}
          className="text-[32px] md:text-[20px] lg:text-xl font-normal text-center text-white"
        >
          Тех.поддержка
        </h1>
      </div>

      <div className="flex flex-col items-center w-[90%] md:w-[80%] gap-10 md:gap-20 py-10 md:py-20 text-center">
        <img src="/assets/image/bg10.png" alt="" className="w-full md:w-[70%]" />
        <article className="w-full md:w-[70%] flex flex-col gap-5 text-center">
          <h1 className="text-2xl md:text-3xl">Служба поддержки клиентов</h1>
          <p className="text-[#8490A4] text-sm md:text-base">
            Специалисты компании AMIN STORS стремится обеспечить своим клиентам услуги наивысшего качества. Вы можете получить квалифицированную помощь в режиме реального времени любым удобным для вас способом.
          </p>
          <span className="text-[#8490A4] text-sm md:text-base">
            • Телефон: +996 700-48-56-39;
          </span>
        </article>
      </div>
    </div>
  );
}

export default ClientsPage;

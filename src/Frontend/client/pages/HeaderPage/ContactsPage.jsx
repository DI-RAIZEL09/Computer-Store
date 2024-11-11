const ContactsPage = () => {
  return (
    <div className="">
      {/* Header Section with Background Image */}
      <div
        style={{
          backgroundImage: "url(/assets/image/bg.png)",
          backgroundSize: "cover",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-[32px] md:text-[64px] font-normal text-center text-white">
          Контакты интернет-магазин <br /> Amin store
        </h1>
      </div>

      <div className="flex flex-wrap lg:flex-row justify-center my-[50px] lg:my-[100px] gap-12 lg:gap-48 px-4">
        {/* Contact Information Section */}
        <div className="border p-6">
          <h3 className="text-[20px] lg:text-[24px] font-normal mb-4">Контактная информация</h3>

          {/* Store Location */}
          <div className="text-[16px] lg:text-[20px] text-[#49dcff]">
            <p>г. Бишкек, улица Буденного 138/1</p>
            <p>улица Токтогула 211</p>
          </div>

          {/* Store Working Hours */}
          <div style={{ marginTop: "20px", gap: "10px" }}>
            <h6 className="text-[20px] lg:text-[24px]">Время работы магазина:</h6>
            <div className="text-[16px] lg:text-[20px] text-[#49dcff]">
              <p>Понедельник 09:00 - 20:00</p>
              <p>Вторник 09:00 - 20:00</p>
              <p>Среда 09:00 - 20:00</p>
              <p>Четверг 09:00 - 20:00</p>
              <p>Пятница 09:00 - 20:00</p>
              <p>Суббота 09:00 - 20:00</p>
              <p>Воскресенье 09:00 - 20:00</p>
            </div>
          </div>

          {/* Contact Number and Email */}
          <div style={{ marginTop: "20px", gap: "10px" }}>
            <h6 className="text-[20px] lg:text-[24px]">Контактный телефон</h6>
            <p className="text-[24px] lg:text-[32px] text-[#49dcff]">+996 700 99 19 23</p>
            <h6 className="text-[20px] lg:text-[24px]">Электронная почта</h6>
            <p className="text-[16px] lg:text-[20px] text-[#49dcff]">rodger913@aol.com</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex justify-center flex-col items-center" >
          <h3 className="text-[20px] lg:text-[24px] font-normal mb-4">Местоположение</h3>
          <div className="" >
            {/* Location 1 */}
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.015217019029!2d-71.10561768454482!3d42.35049977918757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b2e027e5a1d9c43!2zQm9zdG9uIENvbW1vbiBQbGFjZQ!5e0!3m2!1sen!2sus!4v1630666751117!5m2!1sen!2sus"
                className="w-full max-w-[500px] h-[200px] border-0 mx-auto"
                allowFullScreen=""
                loading="lazy"
               
              ></iframe>
            </div>
            <p className="text-center">Буденного 138/1</p>

            {/* Location 2 */}
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.015217019029!2d-71.10561768454482!3d42.35049977918757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b2e027e5a1d9c43!2zQm9zdG9uIENvbW1vbiBQbGFjZQ!5e0!3m2!1sen!2sus!4v1630666751117!5m2!1sen!2sus"
                className="w-full max-w-[500px] h-[200px] border-0 mx-auto"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-center">Токтогула 211</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;







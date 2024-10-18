import { styled } from "@mui/system";
import { Instagram, Telegram, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ContactSection>
          <div className="flex gap-2">
              <WhatsApp />
              <Telegram />
            <a href="https://www.instagram.com/amin_stors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <Instagram />
            </a>
          </div>
          <span className="font-sans py-3 text-[#49DCFF] pr-3">г. Бишкек, Буденного 138/1 Токтогула 211</span>
          <span className="text-[#5F697A] text-sm pr-3">Обработка и прием заказов по телефону:</span>
          <span className="text-[#49DCFF] font-sans text-lg">+ 996 700 99 19 23</span>
          <span className="text-[#5F697A] text-sm pr-3">Пн-Пт: 09:00 - 20:00</span>
          <span className="text-[#5F697A] text-sm pr-3">Сб-Вс: 09:00 - 20:00</span>
        </ContactSection>

        <CatalogSection>
          <h1 className="text-[#5F697A]">Каталог AMIN STORS</h1>
          <CustomScrollbar className="footer-scrollbar">
            <CustomList>
              <li>АКСЕССУАРЫ ДЛЯ ПК</li>
              <li>КОМПЬЮТЕРЫ В РАССРОЧКУ</li>
              <li>ЭКСТРЕМАЛЬНАЯ СЕРИЯ</li>
              <li>ГРАФИЧЕСКИЕ СТАНЦИИ</li>
              <li>КОМПЬЮТЕРЫ ДЛЯ ФОТО</li>
            </CustomList>
            <CustomList>
              <li>ПК с GEFORCE GTX 16XX</li>
              <li>ПК с GEFORCE RTX 4060</li>
              <li>ПК с GEFORCE RTX 4070</li>
              <li>ПК с GEFORCE RTX 4080</li>
              <li>ПК с GEFORCE RTX 4090</li>
            </CustomList>
            <CustomList>
              <li>Игровые станции от 30 000</li>
              <li>Игровые станции от 100 000</li>
              <li>Игровые станции от 200 000</li>
              <li>Подобрать игровой ПК</li>
            </CustomList>
            <CustomList>
              <li>КОМПЬЮТЕРЫ с INTEL CORE i3</li>
              <li>КОМПЬЮТЕРЫ с INTEL CORE i5</li>
              <li>КОМПЬЮТЕРЫ с INTEL CORE i7</li>
              <li>КОМПЬЮТЕРЫ с INTEL CORE i9</li>
              <li>ПК с ВОДЯНЫМ ОХЛАЖДЕНИЕМ</li>
            </CustomList>
            <CustomList>
              <li>Офисный</li>
              <li>Игровой</li>
              <li>Для бизнеса</li>
              <li>Для программирование</li>
              <li>3д моделирование</li>
              <li>Для монтажа</li>
            </CustomList>
          </CustomScrollbar>
        </CatalogSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled("footer")({
  width: "100%",
});

const FooterContent = styled("div")({
  width: "100%",
  backgroundColor: "#212936",
  padding: "1.75rem 3.5rem",
  display: "flex",
  flexDirection: "column-reverse",
  gap: "1rem",
  "@media (min-width: 1024px)": {
    flexDirection: "row",
  },
});

const ContactSection = styled("article")({
  width: "20%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "0.75rem",
});

const CatalogSection = styled("article")({
  width: "100%",
  "@media (min-width: 1024px)": {
    width: "80%",
  },
});

const CustomScrollbar = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  paddingTop: "1.75rem",
  paddingBottom: "0.5rem",
  overflowX: "auto",
  whiteSpace: "nowrap",
  gap: "1.25rem",
  "&::-webkit-scrollbar": {
    width: "0px",
    height: "2px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#49DCFF",
    borderRadius: "1px",
  },
});

const CustomList = styled("ul")({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  listStyleType: "disc",
  listStylePosition: "inside",
  fontFamily: "sans-serif",
  fontSize: "0.75rem",
  "& li::marker": {
    color: "#5F697A",
  },
});

import { Outlet } from "react-router-dom"
import { styled } from "@mui/material"
import Footer from "./footerUsers/Footer"
import Breadcrumbs from "../Frontend/client/components/UI/Breadcrumbs"
import BottomBar from "./headerUsers/BottomBar"
import Header from "./headerUsers/Header"


export const ClientLayout = () => {
  return (
    <BodyClientLayout>
    <ClientLayoutContainer>
      <Header/>
        <div className="sticky top-0 z-50">
          <Breadcrumbs
            customNames={{
            /* HeaderPage */
              'ArticlesPage': 'Новости',
              'AboutPage': 'О нас',
              'ClientsPage': 'Условия доставки и оплаты',
              'ContactsPage': 'Контакты',
            /* HeaderPCPage */
              'ConfigurationPage': 'Конфигуратор ПК, собрать компьютер онлайн с проверкой совместимости',
              'InexpensivePage': 'Недорогие игровые компьютеры',
              'GamingPage': 'Мощные игровые компьютеры',
              'PowerfulPage': 'Сверхмощные компьютеры',
              'BasedAmdPage': 'Мощные ПК на базе AMD Ryzen 9 (АМД)',
            }}
          />
          <BottomBar />
        </div>
        <Outlet/>
      <Footer/>
    </ClientLayoutContainer>
    </BodyClientLayout>
  )
}

const BodyClientLayout = styled('div')(() => ({
  backgroundColor: "var(--bg-dark-blue)",
}))

const ClientLayoutContainer = styled('div')(() => ({
  color: "var(--bg-light)",
  margin: '0 auto',
  backgroundColor: "var(--bg-dark-gray)",
}))

import { Outlet } from "react-router-dom"
import { styled } from "@mui/material"
import Header from "../Frontend/client/components/Header"
import Footer from "../Frontend/client/components/Footer"
import Breadcrumbs from "../Frontend/client/components/UI/Breadcrumbs"

export const ClientLayout = () => {
  return (
    <BodyClientLayout>
    <ClientLayoutContainer>
      <Header/>
        <div className="sticky top-36">
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
  maxWidth: '1440px',
  margin: '0 auto',
  backgroundColor: "var(--bg-dark-gray)",
}))
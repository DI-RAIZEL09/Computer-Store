import { Outlet } from "react-router-dom"
import { styled } from "@mui/material"
// import Header from "../Frontend/client/components/Header"
import Footer from "../Frontend/client/components/Footer"

export const ClientLayout = () => {
  return (
    <BodyClientLayout>
    <ClientLayoutContainer>
          {/* <Header/> */}
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
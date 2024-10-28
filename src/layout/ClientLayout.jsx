import { Outlet } from "react-router-dom"
import { styled } from "@mui/material"
import Header from "./usersHeader/Header"
import Footer from "../Frontend/client/components/Footer"
import BottomBar from "./usersHeader/BottomBar"

export const ClientLayout = () => {
  return (
    <BodyClientLayout>
    <ClientLayoutContainer>
        <Header/>
        <div className=" md:hidden bottom-0 fixed z-50 w-full">
          <BottomBar/>
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
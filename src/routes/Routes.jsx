import { createBrowserRouter, Outlet } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";
import { ClientLayout } from "../layout/ClientLayout";

import Reviews from "../Frontend/admin/pages/Reviews";
import Orders from "../Frontend/admin/pages/Orders";
import Delivery from "../Frontend/admin/pages/Delivery";
import Goods from "../Frontend/admin/pages/Goods";

import HomePage from "../Frontend/client/pages/HomePage";
import PowerfulPage from "../Frontend/client/pages/HeaderPCPage/PowerfulPage";
import InexpensivePage from "../Frontend/client/pages/HeaderPCPage/InexpensivePage";
import BasedAmdPage from "../Frontend/client/pages/HeaderPCPage/BasedAmdPage";
import ConfigurationPage from "../Frontend/client/pages/HeaderPCPage/ConfigurationPage";
import GamingPage from "../Frontend/client/pages/HeaderPCPage/GamingPage";
import ArticlesPage from "../Frontend/client/pages/HeaderPage/ArticlesPage";
import AboutPage from "../Frontend/client/pages/HeaderPage/AboutPage";
import ClientsPage from "../Frontend/client/pages/HeaderPage/ClientsPage";
import ContactsPage from "../Frontend/client/pages/HeaderPage/ContactsPage";

import AdminLogin from "../Frontend/auth/AdminLogin";
import ForgotPassword from "../Frontend/auth/ForgotPassword";
import ResetPassword from "../Frontend/auth/ResetPassword";
import CodePassword from "../Frontend/auth/CodePassword";
import AddProduct from "../Frontend/admin/components/GoodsLayout/AddProduct";
import GoodsLayout from "../Frontend/admin/components/GoodsLayout/GoodsLayout";


export const router = createBrowserRouter([

    /* Аутентификация */
    {
        path: "/login",
        element: <AdminLogin />
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />
    },
    {
        path: "/code-password",
        element: <CodePassword />
    },
    {
        path: "/reset-password",
        element: <ResetPassword />
    },

    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                path: "reviews",
                element: <Reviews/>
            },
            {
                path: "orders",
                element: <Orders/>
            },
            {
                path: "delivery",
                element: <Delivery/>
            },
            {
                path: "goods",
                element: <Outlet/>,
                children: [
                    {
                        path: "",
                        element: <Goods/>,
                    },
                    {
                        path: "goods-layout",
                        element: <GoodsLayout/>
                    },             
                    /* Children Goods */
                    {
                        path: ":id",
                        element: <AddProduct/>
                    }
                ]
            },
            
        ]
    },
    {
        path: "/client",
        element: <ClientLayout/>,
        children: [
            {
                path: "",
                element: <HomePage/>,
            },
            /* HeaderPage */
            {
                path: "articlesPage",
                element: <ArticlesPage/>
            },
            {
                path: "aboutPage",
                element: <AboutPage/>
            },
            {
                path: "clientsPage",
                element: <ClientsPage/>
            },
            {
                path: "contactsPage",
                element: <ContactsPage/>
            },

            /* HeaderPCPage */
            {
                path: "configurationPage",
                element: <ConfigurationPage/>
            },
            {
                path: "inexpensivePage",
                element: <InexpensivePage/>
            },
            {
                path: "gamingPage",
                element: <GamingPage/>
            },
            {
                path: "powerfulPage",
                element: <PowerfulPage/>
            },
            {
                path: "basedAmdPage",
                element: <BasedAmdPage/>
            },

        ]
    },
])
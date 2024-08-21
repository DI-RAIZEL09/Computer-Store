import { createBrowserRouter } from "react-router-dom";
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


export const router = createBrowserRouter([
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                path: "Reviews",
                element: <Reviews/>
            },
            {
                path: "Orders",
                element: <Orders/>
            },
            {
                path: "Delivery",
                element: <Delivery/>
            },
            {
                path: "",
                element: <Goods/>
            },
        ]
    },
    {
        path: "/client",
        element: <ClientLayout/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            },
            
            /* HeaderPage */
            {
                path: "ArticlesPage",
                element: <ArticlesPage/>
            },
            {
                path: "AboutPage",
                element: <AboutPage/>
            },
            {
                path: "ClientsPage",
                element: <ClientsPage/>
            },
            {
                path: "ContactsPage",
                element: <ContactsPage/>
            },

            /* HeaderPCPage */
            {
                path: "ConfigurationPage",
                element: <ConfigurationPage/>
            },
            {
                path: "InexpensivePage",
                element: <InexpensivePage/>
            },
            {
                path: "GamingPage",
                element: <GamingPage/>
            },
            {
                path: "PowerfulPage",
                element: <PowerfulPage/>
            },
            {
                path: "BasedAmdPage",
                element: <BasedAmdPage/>
            },
        ]
    },
])
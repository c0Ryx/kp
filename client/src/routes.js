import Basket from "./pages/Basket"
import Admin from "./pages/Admin"
import Home from "./pages/home"
import Auth from "./pages/Auth"
import ServicesPage from "./pages/ServicesPage"
import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SERVICES_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: SERVICES_ROUTE,
        element: <ServicesPage/>
    }
    
]
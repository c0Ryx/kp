import Basket from "./pages/Basket"
import Admin from "./pages/Admin"
import home from "./pages/home"
import Auth from "./pages/Auth"
import ServicesPage from "./pages/ServicesPage"
import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SERVICES_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: SERVICES_ROUTE + '/:id',
        Component: ServicesPage
    }
    
]
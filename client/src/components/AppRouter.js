import React, { useContext } from "react";
import {Route, Routes} from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import Home from "../pages/Home";


const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {(user.user.role === 'ADMIN' || user.user.role === 'LAWYER') && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            {publicRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} exact/>
            )}
            <Route  path='*' element={<Home/>} exact/>
        </Routes>
    );
};

export default AppRouter;
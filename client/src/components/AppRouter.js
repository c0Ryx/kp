import React, { useContext } from "react";
import {Route, Routes} from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";


const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} exact/>
            )}
            {publicRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} exact/>
            )}
            
        </Routes>
    );
};

export default AppRouter;
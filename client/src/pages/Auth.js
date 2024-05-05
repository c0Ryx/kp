import React, {useContext, useEffect, useState} from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import LoginForm from "../components/LoginForm";
import RegForm from "../components/RegForm";
import './auth.css'
const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const checkLogin = () => location.pathname === LOGIN_ROUTE ? setIsLogin(true) : setIsLogin(false)

  useEffect(() => {
    checkLogin()
  }, [location.pathname]);

  return (
      <div className='auth_wrapper'>
        {
          isLogin ?
              <LoginForm/> :
              <RegForm/>
        }
      </div>
  );
});

export default Auth;
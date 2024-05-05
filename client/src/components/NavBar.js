import React, { useContext } from "react";
import {Button, Container} from "react-bootstrap";
import {Nav, Navbar} from 'react-bootstrap'
import { Context } from "..";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logout = async () => {
        await user.logout(user.user.id)
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <NavLink style={{color: "white"}} to={HOME_ROUTE}>LawPro</NavLink>
        {user.isAuth ? 
        <Nav className="ml-auto" style={{color: "white"}}>
            {user.user.role !== "USER" && <Button
            variant="outline_white" 
            style={{color: "lightgrey"}} 
            onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>}
            <Button 
            variant="outline_white" 
            style={{color: "lightgrey"}}
            onClick={logout}
            className="ml-3">Выйти</Button>
        </Nav>
        :
        <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant="outline_white" style={{color: "lightgrey"}} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
        </Nav>
        }
        </Container> 
        
      </Navbar>
      
      
    );
 });

export default NavBar;
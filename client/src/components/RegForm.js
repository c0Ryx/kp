import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Context} from "../index";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const RegForm = () => {
    const {user} = useContext(Context)
    const [phone, setPhone] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    
    const navigate = useNavigate()


    const registration = async () => {
        await user.registration(phone, fullName, password, 'USER')
        navigate(HOME_ROUTE)
    }

    const registrationByAdmin = async () => {
        await user.add(phone, fullName, password, role)
        navigate(ADMIN_ROUTE)
    }


    return (
        <Form className='w-25'>
            <Form.Group className="mb-3">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="text" placeholder="Введите телефон" value={phone}
                              onChange={e => setPhone(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>ФИО</Form.Label>
                <Form.Control type="text" placeholder="Иванов Иван Иваныч" value={fullName}
                              onChange={e => setFullName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password}
                              onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            {user.isAuth && user.user.role && <Form.Group className="mb-3">
                <Form.Select aria-label="Default select example" onChange={e => setRole(e.target.value)}>
                    <option>Выберите роль</option>
                    {['USER', 'ADMIN', 'LAWYER'].map(role => <option value={role}>{role}</option>)}
                </Form.Select>
            </Form.Group>}

            <Button variant="primary" type="button" onClick={() => user.isAuth ? registrationByAdmin() : registration()}>
                Зарегистрироваться
            </Button>
            {!user.isAuth && <p>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink></p>}
        </Form>
    );
};

export default RegForm;
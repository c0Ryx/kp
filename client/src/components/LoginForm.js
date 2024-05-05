import React, {useContext, useState} from 'react';
import {Context} from "../index";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {HOME_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useNavigate} from "react-router-dom";

const LoginForm = () => {
    const {user} = useContext(Context)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const login = async () => {
        await user.login(phone, password)
        navigate(HOME_ROUTE)
    }


    return (
        <Form className='w-25'>
            <Form.Group className="mb-3">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="text" placeholder="Введите телефон" value={phone} onChange={e => setPhone(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="button" onClick={login}>
                Войти
            </Button>
            <p>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></p>
        </Form>
    );
};

export default LoginForm;
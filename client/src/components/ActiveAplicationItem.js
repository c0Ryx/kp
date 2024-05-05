import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Button, Form} from "react-bootstrap";

const ActiveAplicationItem = ({aplication}) => {
    const {lawyer} = useContext(Context)
    const [user, setUser] = useState(aplication.userId)
    const [show, setShow] = useState(false)
    const deleteAplication = async () => {
        await lawyer.delLawyer(aplication.id)
    }

    const updUser = async () => {
        await lawyer.updUser(+aplication.id, +user)
        setShow(false)
    }

    const changeUser = (e) => {
        setUser(e.target.value)
        setShow(true)
    }
    return (

        <tr>
            <td>{aplication.id}</td>
            <td>{aplication.aplicationId}</td>
            <td><Form.Control type='text' value={user} onChange={changeUser}/></td>
            <td>{show ? <Button onClick={updUser} variant='success'>Сохраннить</Button> :<Button onClick={deleteAplication}>Удалить</Button>}</td>
        </tr>
    );
};

export default ActiveAplicationItem;
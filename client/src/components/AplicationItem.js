import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Button, Form} from "react-bootstrap";

const AplicationItem = ({aplicationItem}) => {
    const {aplication, lawyer, user} = useContext(Context)
    const [userId, setUserId] = useState(aplicationItem.userId)
    const [service, setService] = useState(aplicationItem.serviceId)
    const [show, setShow] = useState('')

    const updUser = async () => {
        await aplication.updUser(+aplicationItem.id, +userId)
        setShow('')
    }
    const updService = async () => {
        await aplication.updService(+aplicationItem.id, +service)
        setShow('')
    }
    const changeService = (e) => {
        setService(e.target.value)
        setShow('service')
    }

    const createActiveAplication = async () => {
        await lawyer.create(aplicationItem.id, user.user.id)
    }

    const changeUser = (e) => {
        setUserId(e.target.value)
        setShow('user')
    }
    const deleteService = async () => {
        await aplication.delAplication(aplicationItem.id)
    }
    return (

        <tr>
            <td>{aplicationItem.id}</td>
            <td><Form.Control type='text' value={service} onChange={changeService}/></td>
            <td><Form.Control type='text' value={userId} onChange={changeUser}/></td>
            <td>{aplicationItem.price}</td>
            <td>
                <Button onClick={createActiveAplication}>Откликнуться</Button>
            </td>
            <td>
                {show === 'user' && <Button onClick={updUser} variant='success'>Сохранить</Button>}
                {show === 'service' && <Button onClick={updService} variant='success'>Сохранить</Button>}
                {show === '' && <Button onClick={deleteService}>Удалить</Button>}
            </td>
        </tr>
    );
};

export default AplicationItem;
import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button} from "react-bootstrap";
import {Context} from "../index";
const CreateService = () => {
    const {services} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const createService = async () => {
        await services.create(name, price, description)
    }
    return (
            <Form className='w-25 create_service'>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Название услуги</Form.Label>
                    <Form.Control type="text" placeholder="Название услуги" value={name} onChange={e => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Описание услуги</Form.Label>
                    <Form.Control type="text" placeholder="Описание услуги" value={description} onChange={e => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Цена услуги</Form.Label>
                    <Form.Control type="text" placeholder="Цена услуги" value={price} onChange={e => setPrice(e.target.value)}/>
                </Form.Group>
                <Button onClick={createService}>Добавить услугу</Button>
            </Form>
    );
};

export default CreateService;
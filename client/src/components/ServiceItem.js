import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Context} from "../index";
import AcceptAplication from "./AcceptAplication";
const ServiceItem = ({service}) => {
    const {aplication, user} = useContext(Context)
    const [show, setShow] = useState(false)
    const createAplication = async () => {
        await aplication.create(service.id, user.user.id, service.price).then(res => setShow(true))
    }

    return (
        <Card className='mb-3 w-100'>
            <Card.Header as="h5">Услуга</Card.Header>
            <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                    {service.description}
                </Card.Text>
                <Card.Title>{service.price}</Card.Title>
                <Button variant="primary" onClick={createAplication}>Записаться</Button>
            </Card.Body>
            <AcceptAplication show={show} hide={() => setShow(false)}/>
        </Card>
    );
};

export default ServiceItem;
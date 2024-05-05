import React, {useContext} from 'react';
import {Context} from "../index";
import {Button} from "react-bootstrap";

const ServiceTableItem = ({service}) => {
    const {services} = useContext(Context)
    const deleteService = async () => {
        await services.delService(service.id)
    }
    console.log(service)

    return (
        <tr>
            <td>{service.id}</td>
            <td>{service.name}</td>
            <td>{service.price}</td>
            <td>{service.description}</td>
            <td><Button onClick={deleteService}>Удалить</Button></td>
        </tr>
    );
};

export default ServiceTableItem;
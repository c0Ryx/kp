import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import Table from "react-bootstrap/Table";
import LawyerItem from "./LawyerItem";
import {observer} from "mobx-react-lite";
import ServiceTableItem from "./ServiceTableItem";

const ServiceTable = () => {
    const {services} = useContext(Context)
    const getServices = async () => {
        await services.getAll()
    }
    useEffect(() => {
        getServices()
    }, [services._serviceList.length]);



    return (
        <Table striped bordered hover className='w-100 align-self-start'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Описание</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {services._serviceList.length > 0 && services._serviceList.map(service =>
                <ServiceTableItem key={service.id} service={service}/>
            )}

            </tbody>
        </Table>
    );
};

export default observer(ServiceTable);
import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import ServiceItem from "./ServiceItem";
import {observer} from "mobx-react-lite";

const ServiceList = () => {
    const {services} = useContext(Context)
    const getService = async () => {
        await services.getAll()
    }

    useEffect(() => {
        getService()
    }, [services._serviceList.length]);

    return (
        <div className='w-75 d-flex flex-column justify-content-center mt-4'>
            {
                services._serviceList.length > 0 && services._serviceList.map(service =>
                <ServiceItem service={service}/>)
            }
        </div>
    );
};

export default observer(ServiceList);
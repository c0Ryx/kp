import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Col , Row } from "react-bootstrap";
import ServicesItem from "./ServicesItem";
import { Context } from "..";

const ServicesList = observer(() => {
    const {services} = useContext(Context)
    return (
        <Row className="d-flex">
            {services.services.map(services =>
                <ServicesItem key={services.id} services={services}/>
            )}
        </Row>
    );
    });

export default ServicesList;
import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom";
import { SERVICES_ROUTE } from "../utils/consts";



const ServicesItem = ({services}) => {
    const navigate = useNavigate()
    
    
    return (
        <Col md={4} className="mt-3" onClick={() => navigate(SERVICES_ROUTE )}>
            <Card style={{width: 150, cursor: "pointer"}} border="light">
                <Image width={250} height={150} src={process.env.REACT_APP_API_URL + services.img}/>
                <div className="text-black-50 mt-1 d-flex align-items-center">
                    <div>...</div>
                </div>
                <div>{services.name}</div>

            </Card>
        </Col>
    );
    };

export default ServicesItem;
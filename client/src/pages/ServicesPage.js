import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import { fetchOneServices } from "../http/servicesAPI";

const ServicesPage = () => {
  const [services, setServices] = useState({info: []})
  const {id} = useParams()
  
  useEffect(() => {
    fetchOneServices(id).then(data => setServices(data))
  }, [])
    return (
      <Container className="mt-3">
        <Row>
          <Col md={4}>
              <Image width={300} height={300} src={process.env.REACT_APP_API_URL + services.img}/>
            </Col>
            <Col md={4}>
              <Row className=" align-items-cente mt-3">
                <h2 >{services.name}</h2>
                <div>{services.lawyer}</div>
          
                <Card className="d-flex mt-3 flex-column align-items-center justify-content-around"
                style={{width: 250, height: 100, fontSize: 24, border: "2px solid lightgrey"}}>

                <h3>{services.price} руб.</h3>
                <Button variant={"outline-dark"} className="ml-3">Приобрести услугу</Button>
                </Card>
                
              </Row>
            </Col>
        </Row>
        <Row  className="d-flex flex-column justify-content-around">
          <h2>Описание услуги</h2>
          {services.info.description}
        </Row>
      </Container>
    );
};

export default ServicesPage;
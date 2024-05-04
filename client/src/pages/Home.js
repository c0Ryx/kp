import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import { Col , Row } from "react-bootstrap";
import ServicesList from "../components/ServicesList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchLawyer, fetchServices, fetchType } from "../http/servicesAPI";

const home = observer(() => {
  const {services} = useContext(Context)

  useEffect(() => {
    fetchType().then(data => services.setTypes(data))
    fetchLawyer().then(data => services.setLawyer(data))
    fetchServices().then(data => services.setServices(data.rows))
  }, [])
  return (
    <Container>
        <Row className="mt-2">
          <Col md={3}>
            <TypeBar/>
          </Col>
          <Col md={9}>
            <ServicesList/>
          </Col>
        </Row>
    </Container>
  );
});

export default home;
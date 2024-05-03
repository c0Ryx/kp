import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateLawyer from "../components/modals/CreateLawyer";
import CreateType from "../components/modals/CreateType";
import CreateServices from "../components/modals/CreateServices";

const Admin = () => {
  const [lawyerVisible, setLawyerVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [servicesVisible, setServicesVisible] = useState(false)
  return (
    <Container className="d-flex flex-column">
        <Button 
        variant={"outline-dark"}
         className="mt-2 p-2"
        onClick={() => setTypeVisible(true)}
         >Добавить категорию</Button>

        <Button 
        variant={"outline-dark"} 
        className="mt-2 p-2"
        onClick={() => setLawyerVisible(true)}
        >Добавить специалиста</Button>

        <Button 
        variant={"outline-dark"} 
        className="mt-2 p-2"
        onClick={() => setServicesVisible(true)}
        >Добавить услугу</Button>
        <CreateLawyer show={lawyerVisible} onHide={() => setLawyerVisible(false)}/>
        <CreateServices show={servicesVisible} onHide={() => setServicesVisible(false)}/>
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>

    </Container>
  );
};

export default Admin;
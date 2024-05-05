import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Col , Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import ServiceList from "../components/ServiceList";

const Home = observer(() => {

  return (
      <div className='home_wrapper d-flex flex-column align-items-center'>
          <h1 className='text-center mt-2'>Доступные услуги</h1>
          <ServiceList/>
      </div>
  );
});

export default Home;
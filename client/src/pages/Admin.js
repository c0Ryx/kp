import React, {useContext, useState} from "react";
import { Button, Container } from "react-bootstrap";
import CreateService from "../components/CreateService";
import LawyerList from "../components/LawyerList";
import ServiceTable from "../components/ServiceTable";
import AplicationsList from "../components/AplicationsList";
import ActiveAplicationList from "../components/ActiveAplicationList";
import {Context} from "../index";
import './admin.css'
import {useNavigate} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
const Admin = () => {
  const {user} = useContext(Context)
  const [currentState, setCurrentState] = useState('create')
  const navigate = useNavigate()
  return (
      <div className='w-100 d-flex flex-column align-items-center'>
          <div className='w-100 mt-5 d-flex justify-content-around align-items-center'>
              {user.user.role === 'ADMIN' && <Button variant="primary" onClick={() => setCurrentState('create')}>
                  Создать услугу
              </Button>}
              {user.user.role === 'ADMIN' && <Button variant="primary" onClick={() => setCurrentState('lawyer')}>
                  Список юристов
              </Button>}
              {user.user.role === 'ADMIN' && <Button variant="primary" onClick={() => setCurrentState('service')}>
                  Список услуг
              </Button>}
              <Button variant="primary" onClick={() => setCurrentState('apli')}>
                  Список заявок
              </Button>
              <Button variant="primary" onClick={() => setCurrentState('activeApli')}>
                  Список активных заявок
              </Button>
              {user.user.role === 'ADMIN' && <Button onClick={() => navigate(REGISTRATION_ROUTE)}>
                  Зарегистрировать сотрудника
              </Button>}
          </div>
          <div className='w-75 admin_tab mt-5 d-flex justify-content-center align-items-center'>
              {currentState === 'create' && user.user.role === 'ADMIN' && <CreateService/>}
              {currentState === 'lawyer' && user.user.role === 'ADMIN' && <LawyerList/>}
              {currentState === 'service' && user.user.role === 'ADMIN' && <ServiceTable/>}
              {currentState === 'apli' && <AplicationsList/>}
              {currentState === 'activeApli' && <ActiveAplicationList/>}

          </div>
      </div>
  );
};

export default observer(Admin);
import React, { useContext, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormControl, Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Context } from "../..";

const CreateServices = ({show, onHide}) => {
    const {services} = useContext(Context)
    const [info, setInfo] = useState([])
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить услугу
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className="mt-2 mb-2">
                <DropdownToggle>Выберети категорию</DropdownToggle>
                <DropdownMenu>
                    {services.types.map(type =>
                        <DropdownItem key={type.id}>{type.name}</DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
            <Dropdown className="mt-2 mb-2">
                <DropdownToggle>Выберети специалиста</DropdownToggle>
                <DropdownMenu>
                    {services.lawyer.map(lawyer =>
                        <DropdownItem key={lawyer.id}>{lawyer.name}</DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
            <FormControl
            className="mt-3"
            placeholder="Введите название услуги"
            
            />
             <FormControl
            className="mt-3"
            placeholder="Введите описание услуги"
            
            />
            <FormControl
            className="mt-3"
            placeholder="Введите стоимость услуги"
            type="number"
            />
            <FormControl
            className="mt-3"
            type="file"
            />
        
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateServices;
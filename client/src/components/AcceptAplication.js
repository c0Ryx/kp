import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const AcceptAplication = ({show, hide}) => {
    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>Вы записались!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Наш сотрудник свяжется с вами</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hide}>
                    ОК
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AcceptAplication;
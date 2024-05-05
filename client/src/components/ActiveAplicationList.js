import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import Table from "react-bootstrap/Table";
import LawyerItem from "./LawyerItem";
import ActiveAplicationItem from "./ActiveAplicationItem";

const ActiveAplicationList = () => {

    const {lawyer} = useContext(Context)
    const getAplication = async () => {
        await lawyer.getAll()
    }
    useEffect(() => {
        getAplication()
    }, [lawyer._lawyerList.length, lawyer._lawyer.id]);



    return (
        <Table striped bordered hover className='w-100 align-self-start'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Номер заявки</th>
                <th>Номер клиента</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {lawyer._lawyerList.length > 0 && lawyer._lawyerList.map(aplication =>
                <ActiveAplicationItem aplication={aplication}/>
            )}

            </tbody>
        </Table>
    );
};

export default ActiveAplicationList;
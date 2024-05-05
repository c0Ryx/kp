import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import Table from "react-bootstrap/Table";
import AplicationItem from "./AplicationItem";

const AplicationsList = () => {
    const {aplication} = useContext(Context)
    const getAplication = async () => {
        await aplication.getAll()
    }
    useEffect(() => {
        getAplication()
    }, [aplication._aplicationList.length, aplication._aplication.id]);



    return (
        <Table striped bordered hover className='w-100 align-self-start'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Номер услуги</th>
                <th>Номер клиента</th>
                <th>Цена</th>
                <th>Отккликнуться</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {aplication._aplicationList.length > 0 && aplication._aplicationList.map(aplicationItem =>
                <AplicationItem aplicationItem={aplicationItem}/>
            )}

            </tbody>
        </Table>
    );
};

export default AplicationsList;
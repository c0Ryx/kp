import React, {useContext, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {Context} from "../index";
import LawyerItem from "./LawyerItem";
import {observer} from "mobx-react-lite";
const LawyerList = () => {
    const {user} = useContext(Context)
    const getLawyers = async () => {
        await user.getAllLawyers()
    }
    useEffect(() => {
        getLawyers()
    }, [user.userList.length]);



    return (
        <Table striped bordered hover className='w-100 align-self-start'>
            <thead>
            <tr>
                <th>ID</th>
                <th>ФИО</th>
                <th>Телефон</th>
                <th>Роль</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {user.userList.length > 0 && user.userList.map(lawyer =>
                <LawyerItem lawyer={lawyer}/>
            )}

            </tbody>
        </Table>
    );
};

export default observer(LawyerList);
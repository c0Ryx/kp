import React, {useContext} from 'react';
import {Context} from "../index";
import {Button} from "react-bootstrap";

const LawyerItem = ({lawyer}) => {
    const {user} = useContext(Context)
    const delUser = async () => {
        await user.deleteUser(lawyer.id)
    }
    return (

    <tr>
        <td>{lawyer.id}</td>
        <td>{lawyer.fullName}</td>
        <td>{lawyer.phone}</td>
        <td>{lawyer.role}</td>
        <td><Button onClick={delUser}>Уволить</Button></td>
    </tr>
    );
};

export default LawyerItem;
import React, { useContext } from "react";
import {observer} from 'mobx-react-lite';
import { ListGroup } from "react-bootstrap";
import { Context } from "..";


const TypeBar = observer(() => {
    const {services} = useContext(Context)
    return (
        <ListGroup>
            {services.types.map(type =>
               <ListGroup.Item 
                style={{cursor: 'pointer'}}
                active={type.id === services.setSelectedType.id}
                onClick={() => services.setSelectedType(type)}
                key={type.id}>

                    {type.name}
               </ListGroup.Item> 
            )}
        </ListGroup>
    );
    });

export default TypeBar;
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { IWeekday } from "../../types";
import TodoBody from "./todoBody";

const MyTodos = ({todos}) => {
    const weekdays:IWeekday[] = [
        {id: 'monday', name: 'Понедельник'},
        {id: 'tuesday', name: 'Вторник'},
        {id: 'wednesday', name: 'Среда'},
        {id: 'thursday', name: 'Четверг'},
        {id: 'friday', name: 'Пятница'},
        {id: 'saturday', name: 'Суббота'},
        {id: 'sunday', name: 'Воскресенье'},
    ];

    return(
        <Container>
            <Row>
                {weekdays.map(({ name, id })=>
                    <Col md={6} lg={4} key={id}>
                        <h2>{name}</h2>
                        <TodoBody
                            dayId={id}
                            todos={todos}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default MyTodos;

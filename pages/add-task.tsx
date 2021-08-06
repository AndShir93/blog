import React from 'react';
import {Button, Form, Row, Col, Container} from "react-bootstrap";
import Layout from "../components/Layout";

interface IWeekday {
    id: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday",
    name: "Понедельник" | "Вторник" | "Среда" | "Четверг" | "Пятница" | "Суббота" | "Воскресенье",
}

const AddTask = () => {
    const weekdays:IWeekday[] = [
        {id: 'monday', name: 'Понедельник'},
        {id: 'tuesday', name: 'Вторник'},
        {id: 'wednesday', name: 'Среда'},
        {id: 'thursday', name: 'Четверг'},
        {id: 'friday', name: 'Пятница'},
        {id: 'saturday', name: 'Суббота'},
        {id: 'sunday', name: 'Воскресенье'},
    ]

    return (
        <Layout>
            <div className={"d-flex flex-column align-items-center justify-content-center"}>
                <h1>Добавить задачу</h1>
                <Container>
                    <Row className={"justify-content-center"}>
                        <Col lg={6} md={8}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Выберите день недели</Form.Label>
                                    <Form.Control as="select">
                                        {weekdays.map( day =>
                                            <option key={day.id} value={day.id}>{day.name}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className={"mt-3"}>
                                    <Form.Label>Текст задачи</Form.Label>
                                    <Form.Control type={"text"}></Form.Control>
                                </Form.Group>
                                <Button className={"mt-3 d-block m-auto"} type={"submit"} variant={"success"}>Отправить</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}
export default AddTask;

import React from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import Layout from "../components/Layout";

const SignIn = () => {

    return (
        <Layout>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col lg={4} md={8}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Ваш email: </Form.Label>
                                <Form.Control type={"email"} placeholder={"Введите email"} />
                            </Form.Group>
                            <Form.Group className={"mt-3"}>
                                <Form.Label>Пароль:</Form.Label>
                                <Form.Control type={"password"}/>
                            </Form.Group>
                            <Button variant={"success"} className={"mt-3 d-flex m-auto"}>Войти</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default SignIn;

import React from 'react';
import Layout from "../components/Layout";
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import {GetServerSideProps} from "next";
import prisma from "../lib/prisma";
import {IFormData, IUser, IValidFields} from "../types";

const Signup = ({ usersEmail }) => {
    const [formData, setFormData] = React.useState<IFormData>({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });
    const [validFields, setValidFields] = React.useState<IValidFields>({
        name: false,
        email: false,
        password: false,
        repeatPassword: false,
    });
    const handleFormData = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value});
    };
    const sendDataUser = async (name, email, password) => {
        try{
            const dataUser = { name, email, password };
            await fetch('./api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataUser),
            });
        } catch (error){
            console.log(error);
        }
    };
    const isValidForm = (email, name, password, repeatPassword) => {
        let invalidFields: IValidFields = {};
        if (usersEmail.indexOf(email) !== -1 || email.trim() === '') {
            invalidFields = {...invalidFields, email: true};
        }
        if (name.trim() === '') {
            invalidFields = {...invalidFields, name: true};
        }
        if (password.trim() === '' || password !== repeatPassword) {
            invalidFields = {...invalidFields, password: true, repeatPassword: true};
        }
        setValidFields(invalidFields);
        return invalidFields;
    }
    const submitForm = async (e) => {
        e.preventDefault();
        const { name, email, password, repeatPassword } = formData;
        if (Object.keys(isValidForm(email, name, password, repeatPassword)).length) return;
        sendDataUser(name, email, password);
    };

    return (
      <>
        <title>Регистрация</title>
        <Layout>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col lg={6} md={8}>
                        <Form onSubmit={submitForm}>
                            <Form.Group>
                                <Form.Label>Введите ваш email:</Form.Label>
                                <Form.Control
                                  onChange={handleFormData}
                                  value={formData.email}
                                  name={"email"}
                                  type={"email"}
                                  placeholder={"ivan@mail.com"}
                                  isInvalid={validFields.email}
                                />
                            </Form.Group>
                            <Form.Group className={"mt-3"}>
                                <Form.Label>Введите ваше имя:</Form.Label>
                                <Form.Control
                                  onChange={handleFormData}
                                  value={formData.name}
                                  name={"name"}
                                  type={"text"}
                                  placeholder={"Иван"}
                                  isInvalid={validFields.name}
                                />
                            </Form.Group>
                            <Form.Group className={"mt-3"}>
                                <Form.Label>Введите пароль:</Form.Label>
                                <Form.Control
                                  onChange={handleFormData}
                                  value={formData.password}
                                  name={"password"}
                                  type={"password"}
                                  isInvalid={validFields.password}
                                />
                            </Form.Group>
                            <Form.Group className={"mt-3"}>
                                <Form.Label>Повторите пароль:</Form.Label>
                                <Form.Control
                                  onChange={handleFormData}
                                  value={formData.repeatPassword}
                                  name={"repeatPassword"}
                                  type={"password"}
                                  isInvalid={validFields.repeatPassword}
                                />
                            </Form.Group>
                            <Button type={"submit"} variant={"success"} className={"mt-3 d-block m-auto"}>Регистрация</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
      </>
    );
};

export default Signup;

export const getServerSideProps: GetServerSideProps = async () => {
    const users: IUser = await prisma.user.findMany();
    const usersEmail = users.map((user) => user.email);

    return {
        props: {usersEmail},
    }
}

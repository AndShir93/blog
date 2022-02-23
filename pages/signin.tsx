import React from 'react';
import {Container, Row, Col, Form, Button, Alert} from "react-bootstrap";
import Layout from "../components/Layout";

interface IAuthData {
  email: string,
  password: string,
}

const SignIn = () => {
  const [isInvalidCredentials, setIsInvalidCredentials] = React.useState(false);
  const [authData, setAuthData] = React.useState<IAuthData>({
    email: '',
    password: '',
  });
  const {email, password} = authData;
  const authentication = async (e) => {
    e.preventDefault();
    try {
      setIsInvalidCredentials(false);
      const data = {email, password};
      const res = await fetch('./api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })
        .then((t) => {
          return t.json()
        })
        .then((data) => {
          localStorage.setItem('token', data.token);
          window.location.pathname = '';
        });
    } catch {
      setIsInvalidCredentials(true);
    }
  }

  return (
    <>
        <title>Авторизация</title>
        <Layout>
        <Container>
          <Row className={"justify-content-center"}>
            <Col lg={6} md={8}>
              <Form onSubmit={authentication}>
                <Form.Group>
                  <Form.Label>Ваш email: </Form.Label>
                  <Form.Control
                    type={"email"}
                    value={authData.email}
                    onChange={(e) =>
                      setAuthData({...authData, email: e.target.value})}
                    placeholder={"Введите email"}
                    isInvalid={isInvalidCredentials}
                  />
                </Form.Group>
                <Form.Group className={"mt-3"}>
                  <Form.Label>Пароль:</Form.Label>
                  <Form.Control
                    type={"password"}
                    value={authData.password}
                    onChange={(e) =>
                      setAuthData({...authData, password: e.target.value})}
                    isInvalid={isInvalidCredentials}
                  />
                </Form.Group>
                {
                  isInvalidCredentials &&
                  <Alert className={"mt-2"} variant={"danger"}>Неправильный email или пароль</Alert>
                }
                <Button type={"submit"} variant={"success"} className={"mt-3 d-flex m-auto"}>Войти</Button>
              </Form>
            </Col>
          </Row>
        </Container>
    </Layout>
    </>
  )
}

export default SignIn;

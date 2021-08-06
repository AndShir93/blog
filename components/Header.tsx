import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';

const Header: React.FC = () => {

    return (
        <Container>
            <Navbar className="justify-content-between">
                <Navbar.Brand href={"/"}>Todos</Navbar.Brand>
                <Nav>
                    <Nav.Item className="d-flex align-items-center">
                        <Nav.Link href={"/add-task"}>Добавить задачу</Nav.Link>
                        <Nav.Link href="/signin">Войти</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Header

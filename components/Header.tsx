import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import jwt from 'jsonwebtoken';

const Header: React.FC = () => {
    const [user, setUser] = React.useState('');
    const signOut = () => {
        window.localStorage.setItem('token', '');
    }
    React.useEffect(() => {
        setUser(jwt.decode(window.localStorage.token));
    }, []);
    
    return (
        <Container>
            <Navbar className={"justify-content-between"}>
                <Navbar.Brand href={"/"}>Todos</Navbar.Brand>
                <Nav>
                    <Nav.Item className={"d-flex align-items-center"}>
                        {user
                            ?
                            <>
                                <Nav.Link href={"/add-task"}>Добавить задачу</Nav.Link>
                                <Nav.Link href={"/user"}>{user.name}</Nav.Link>
                                <Nav.Link href={"/"} onClick={signOut}>Выйти</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link href={"/add-task"}>Добавить задачу</Nav.Link>
                                <Nav.Link href={"/signin"}>Войти</Nav.Link>
                                <Nav.Link href={"/signup"}>Регистрация</Nav.Link>
                            </>
                        }
                    </Nav.Item>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Header

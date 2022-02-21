import React, {useContext, useEffect} from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import Context from "../Context.js";

const Header: React.FC = () => {
  const signOut = () => {
    window.localStorage.setItem('token', '');
  }
  const currentUser = useContext(Context);

  return (
    <Container>
      <Navbar className={"justify-content-between"}>
        <Navbar.Brand href={"/"}>Todos</Navbar.Brand>
        <Nav>
          <Nav.Item className={"d-flex align-items-center"}>
            {currentUser.name
              ?
              <>
                <Nav.Link href={"/add-task"}>Добавить задачу</Nav.Link>
                <Nav.Link href={"/user"}>{currentUser.name}</Nav.Link>
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

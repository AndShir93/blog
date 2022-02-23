import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";


export interface ICategories {
  name: string;
  id: number;
  subcategories: [];
}

interface IProps {
  categories: ICategories[];
}

type TView = ({ categories }: IProps) => JSX.Element;

const Menu: TView = ({ categories }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            {categories.map(({ id, name}) => <p key={id}>{name}</p>)}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;

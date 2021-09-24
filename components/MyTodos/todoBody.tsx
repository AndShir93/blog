import React from 'react';
import {Accordion, Card, ListGroup, ListGroupItem} from "react-bootstrap";

const TodoBody = ({dayId, todos}) => {
    const dayTodos = todos.filter(({day}) => dayId === day);

    return (
        dayTodos.map(({text, description, author}) =>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        {text}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <ListGroup>
                            <ListGroupItem>{description}</ListGroupItem>
                            <ListGroupItem>{author.name}</ListGroupItem>
                        </ListGroup>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    );
};

export default TodoBody;
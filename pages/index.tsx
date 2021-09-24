import React from 'react';
import Layout from "../components/Layout";
import MyTodos from "../components/MyTodos";
import prisma from '../lib/prisma';
import {IData} from "../types";
import {GetServerSideProps} from "next";
import jwt from 'jsonwebtoken';

interface IProps {
    todos: Array<IData>,
}

type TTodos = (props: IProps) => JSX.Element;

const Todos: TTodos = ({todos}) => {
    const [userTodos, setUserTodos] = React.useState([]);
    React.useEffect(() => {
        const user = jwt.decode(window.localStorage.token);
        setUserTodos(() => {
            if (!window.localStorage.token) return [];

            return todos.filter((todo) => {
                if(todo.author.name === user.name) return todo;
            });
        });
    }, []);

    return (
        <Layout>
            <div className={"d-flex align-items-center justify-content-center"}>
                <h1>Todos</h1>
            </div>
            <MyTodos todos={userTodos}/>
        </Layout>
    )
}

export default Todos;

export const getServerSideProps: GetServerSideProps = async () => {
    const todos: Array<IData> = await prisma.todos.findMany({
        include: {
            author: {
                select: {
                    name: true,
                },
            },
        },
    });
    return {
        props: {todos},
    }
}

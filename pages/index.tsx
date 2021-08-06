import React from 'react';
import Layout from "../components/Layout";
import MyTodos from "../components/MyTodos";

const Todos = () => {

  return (
      <Layout>
          <div className={"d-flex align-items-center justify-content-center"}>
            <h1>Todos</h1>
          </div>
          <MyTodos/>
      </Layout>
  )
}

export default Todos;

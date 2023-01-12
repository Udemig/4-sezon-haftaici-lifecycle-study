import React, { useEffect, useState } from "react";

/* 
    Component içerisine dışarıdan (API'den) veri çekilecekse
    componentDidMount içerisinde çekilir.
*/

const FunctionBasedComponent = () => {
  const [todos, setTodos] = useState([]);
  console.log("constructor");
  useEffect(() => {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.log(err));

    /* componentWillUnmount, clean function */
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);
  return (
    <div>
      {console.log("render")}
      <h1>function component</h1>
      {todos.map((item) => (
        <div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FunctionBasedComponent;

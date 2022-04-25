import React, {useReducer} from "react";
import { TodoContext } from "./Context/TodoContext";
import TodoReducer from "./Context/Reducer";

import TodoForm from "./Components/TodoForm";
import TodosList from "./Components/Todos";

import {Container} from "reactstrap";
import todo from "./images/todo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
    const [todos, dispatch] = useReducer(TodoReducer, []);
    return(
      <TodoContext.Provider value={{todos, dispatch}}>
        <Container fluid>
          <div className="size">
          <img src={todo} alt={"this is logo"}/>
          </div>
          <h1>Todo App with Context API</h1>
          <TodosList/>
          <TodoForm/>
        </Container>
      </TodoContext.Provider>
    )
}

export default App;

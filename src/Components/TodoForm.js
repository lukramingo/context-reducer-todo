import React, {useState, useContext} from "react";
import {
    Form, FormGroup, Input, Button, InputGroup, InputGroupAddon
} from "reactstrap";
import {v4} from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/Action";

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const submitForm = e => {
        e.preventDefault();
        if(todoString === ""){
            return alert("Please enter your todo");
        }
        const todo = {
            todoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("");
    }
    return(
        <Form onSubmit={submitForm}>
            <FormGroup>
                <InputGroup>
                <Input type="text" name="todo" id="todo" placeholder="Enter your todo" 
                value={todoString}
                onChange={ e => setTodoString(e.target.value)} />
                <InputGroupAddon addonType="prepend">
                <Button color="primary">Add</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;
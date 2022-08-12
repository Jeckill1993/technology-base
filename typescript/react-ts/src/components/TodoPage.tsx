import React, {useEffect, useState} from 'react';
import List from "./List";
import {TodoInterface} from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoPage = () => {

    useEffect(() => {
        fetchTodos().then((response) => {
            if (response) setTodos(response.data);
        })
    }, []);

    const [todos, setTodos] = useState<TodoInterface[]>([]);

    async function fetchTodos() {
        try {
            const response = await axios.get<TodoInterface[]>('https://jsonplaceholder.typicode.com/todos');
            return response;
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            {/* global component for render lists of users, massages etc */}
            <List
                items={todos}
                renderItem={ (todo: TodoInterface) => <TodoItem key={todo.id} todo={todo} /> }
            />
        </div>
    );
};

export default TodoPage;
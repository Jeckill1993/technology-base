import React, {FC} from 'react';
import {TodoInterface} from "../types/types";

interface TodoItemProps {
    todo: TodoInterface;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div>
            <div>
                {todo.id}. {todo.title} {todo.completed ? 'completed' : 'in progress'} by user {todo.userId}
            </div>
        </div>
    );
};

export default TodoItem;
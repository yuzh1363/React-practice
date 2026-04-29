import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

export default function TodoWarpper() {
    const [todos, setTodos] = useState([
        { content: "打掃廁所", id: Math.random(), isComplete: false ,isEditing:false },
        { content: "寫作業", id: Math.random(), isComplete: false,isEditing:false },
    ]);
    const addTodo = (content) => {
        setTodos([
            ...todos,
            { content: content, id: Math.random, isComplete: false,isEditing:false },
        ]);
    };

    const deleteTodo = (id) => {
        setTodos(
            todos.filter((todo) => {
                return todo.id !== id;
            }),
        );
    };

    const toggleComplete = (id)=>{
        setTodos(todos.map((todo)=>{
            return todo.id === id ? {...todo,isComplete: !todo.isComplete} : todo
        }))
    }
    const toggleEditing = (id)=>{
        setTodos(todos.map((todo)=>{
            return todo.id === id ? {...todo,isEditing: !todo.isEditing} : todo
        }))
    }
    const edittodo = (id , newContent)=>{
        setTodos(todos.map((todo)=>{
            return todo.id === id ? {...todo,content: newContent, isEditing:false} : todo
        }))
    }

    return (
        <div className="warpper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {todos.map((todo) => {
                return (
                    <Todo 
                    todo={todo} 
                    key={todo.id} 
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    toggleEditing={toggleEditing}
                    edittodo={edittodo} />
                );
            })}
        </div>
    );
}

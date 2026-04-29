import EditForm from "./EditForm";

export default function Todo({
    todo,
    deleteTodo,
    toggleComplete,
    toggleEditing,
    edittodo
}) {
    return (
        todo.isEditing ? <EditForm todo={todo} edittodo={edittodo}/> :
        <div className={`todo ${todo.isComplete ? "complete" : ""}`}>
            <p
                onClick={() => {
                    toggleComplete(todo.id);
                }}
            >
                {todo.content}
            </p>
            <div>
                <i
                    class="fa-solid fa-pen-to-square"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        toggleEditing(todo.id);
                    }}
                ></i>
                <i
                    class="fa-solid fa-trash"
                    style={{ cursor: "pointer", marginLeft: "5px" }}
                    onClick={() => {
                        deleteTodo(todo.id);
                    }}
                ></i>
            </div>
        </div>)
}

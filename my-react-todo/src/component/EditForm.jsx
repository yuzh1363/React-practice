import { useState } from "react";

export default function EditForm({todo ,edittodo}){
    const [content, setContent] = useState(todo.content);
    const handleSubmit = (e)=>{
        e.preventDefault()
        edittodo(todo.id,content)
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="請輸入待辦事項" 
            value={content}
            onChange={(e)=>{setContent(e.target.value)}}/>
            <button type="submit">完成</button>
        </form>
    );
}
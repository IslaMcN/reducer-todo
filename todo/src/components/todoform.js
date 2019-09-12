import React, {useState} from 'react';

export default function TodoForm(props){
    const [input, setInput] = useState("");
    const handleChanges = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(input)
        setInput('')
    }
    const clearCompleted = e => {
        e.preventDefault();
        props.clearCompleted();
    }
    return (
        <form>
            <input type="text"
            name="todo"
            value={input}
            onChange={handleChanges} />
            <button type="submit">Click</button>
            <button onClick={clearCompleted}>Clear</button>
        </form>
    );
}
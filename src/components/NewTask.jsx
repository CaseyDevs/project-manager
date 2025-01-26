import { useState } from "react"

export default function NewTask({ onAddTask }) {

    const [enteredTask, setEnteredTask] = useState("");

    // Grab the inputs value
    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    // Add task using input value, reset value to empty state
    function handleClick() {
        onAddTask(enteredTask);
        setEnteredTask("");
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm" onChange={handleChange} value={enteredTask} />
            <button onClick={handleClick}>Add Task</button>
        </div>
    )
}
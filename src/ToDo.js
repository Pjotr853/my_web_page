import React, {useState}  from "react";

function ToDo() {
    const [task, setTask] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewtask] = useState("");

    function handleInputChange(event){
        setNewtask(event.target.value);
    }

    function addTask(){
        if(newTask !== ""){
            setTask([...task,newTask]);
            setNewtask("");
        }
        

    }

    function deleteTask(index){
        const updateTask = task.filter((_, i)=>i !== index);
        setTask(updateTask);

    }

    function moveTaskUp(index){
        if(index > 0){
            const updateTask =[...task];
            [updateTask[index],updateTask[index - 1]] = [updateTask[index-1], updateTask[index]];
            setTask(updateTask);
        }

    }

    function moveTaskDown(index){

        if(index < task.length - 1){
            const updateTask =[...task];
            [updateTask[index],updateTask[index + 1]] = [updateTask[index+1], updateTask[index]];
            setTask(updateTask);
        }

    }

    return (
    <div>
        <h1>ToDo App</h1>

        <input
            type="text"
            placeholder="Ebter a task..."
            value={newTask}
            onChange={handleInputChange}>
        </input>

        <button 
            className="add_button"
            onClick={addTask}> 
            Add
        </button>

        <ol>
            {task.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button 
                className="delete_button"
                onClick={()=>deleteTask(index)}>
                    Delete
                </button>

                <button 
                className="move_button"
                onClick={()=>moveTaskUp(index)}>
                    Up
                </button>

                <button 
                className="move_button"
                onClick={()=>moveTaskDown(index)}>
                    Down
                </button>

                
            </li>)}
        </ol>

    </div>
    );
}

        


export default ToDo;
import React, {useState}  from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

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
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}>
        </input>

        <button 
            className="add_button"
            onClick={addTask}> 
            Add
        </button>

        <ListGroup>
            {task.map((task,index)=>
            <ListGroup.Item key={index}>
                <span className="text" style={{ marginRight: "20px" }}>{index+1}. {task }</span>
                

                <Button  
                    variant="outline-secondary"
                    onClick={()=>moveTaskUp(index)}>
                    Up
                </Button>{' '}

                <Button 
                    variant="outline-secondary"
                    onClick={()=>moveTaskDown(index)}>
                    Down
                </Button>{' '}

                <Button 
                    variant="outline-danger"
                    onClick={()=>deleteTask(index)}>
                    Delete
                </Button>{' '}

                
            </ListGroup.Item>)}
        </ListGroup>

    </div>
    );
}

        


export default ToDo;
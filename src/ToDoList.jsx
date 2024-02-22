
import { useState } from "react";

const ToDoList=()=>{

    const [tasks,setTasks]  = useState([])
    const [newTask,setNewTask] = useState('')


    function handleInputChange(event){

         setNewTask(event.target.value)
    }

    function addTask(){

        if(newTask.trim()!==''){
        setTasks((prevTasks)=>[...prevTasks,newTask])
        setNewTask('');

        }
    }

    function deleteTask(index){
    
     setTasks(tasks.filter((task,i)=> i!==index))
    }


function moveTaskUp(index) {
  if (index > 0) {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      return updatedTasks;
    });
  }
}


    function moveTaskDown(index){

        if(index<tasks.length-1){

                setTasks((prevTasks) => {
                  const updatedTasks = [...prevTasks];
                  
                  [
                    updatedTasks[index], updatedTasks[index + 1]
                  ] = [updatedTasks[index + 1], updatedTasks[index]];

                  return updatedTasks;
                }); 
        }
    


    }

     
    return (
      <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
          <input
            type="text"
            placeholder="Enter new task..."
            value={newTask}
            onChange={handleInputChange}
          />

          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                onClick={() => deleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
              <button
                onClick={() => moveTaskUp(index)}
                className="move-button"
              >
                👆
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="move-button"
              >   
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    );


}


export default ToDoList;
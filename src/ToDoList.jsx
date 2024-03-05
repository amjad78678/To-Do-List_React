
import { useEffect, useState } from "react";

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

    const [mode,setMode]=useState('black')
    const [textColor,setTextColor]=useState('white')

    useEffect(()=>{
      document.body.style.backgroundColor=mode
    })

    const bgChange = ()=>{  
     
     setMode(document.body.style.backgroundColor==='black'?'white':'black');
     setTextColor(textColor=='white'?'black':'white');
   

    }

  const className = `text-6xl font-bold text-${textColor}`;
    
    return (
      <div className="to-do-list">
        <span>
          <h1 className={className}>To-Do-List</h1>

          <button onClick={bgChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
        </span>
        <div>
          <input
            className=""
            type="text"
            placeholder="Enter new task..."
            value={newTask}
            onChange={handleInputChange}
          />

          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <div className="w-6/12 mx-auto shadow-lg">  
          <ol>
            {tasks.map((task, index) => (
              <li className="bg-gray-300" key={index}>
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
      </div>
    );


}


export default ToDoList;
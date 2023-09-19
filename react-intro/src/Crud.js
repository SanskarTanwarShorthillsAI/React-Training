import { useState } from "react";

const Crud = () => {

    const [newTask, setNewTask] = useState("")
    const [todoList, setTodoList] = useState([])

    const inputHandler = (event) =>{
        setNewTask(event.target.value);
    }
    const addTask = () =>{
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName : newTask,
            completed : false
        }
        const newTodoList = [...todoList, task];
        setTodoList(newTodoList);
    }

    const deleteTask = (id) =>{
        const newTodoList = todoList.filter((task)=>{
            if(task.id === id){
                return false;
            }else{
                return true;
            }
        })
        setTodoList(newTodoList);
    }

    const completeTask = (id) =>{
        setTodoList(
            todoList.map((task) => {
                if(task.id === id ){
                    return {...task, completed:true};
                }else{
                    return task;
                }
            })
        );
    }

    return ( 
        <div className="Crud">
            <div className="addTask">
                <input type="text" onChange={inputHandler}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="listTask">
                {
                    todoList.map((task)=>{
                        return (
                            <div className="task" style={{backgroundColor: task.completed ? "green":"white"  }}>
                                <h1>{task.taskName}</h1>
                                <button onClick={() => completeTask(task.id)}>Completed</button>
                                <button onClick={() => deleteTask(task.id)}>Delete this Task.</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
     );
}
 
export default Crud;
import { FaTimes } from "react-icons/fa";

const Task = ({ task, toggleDone, onDelete}) => {
  return (
    <div className={`task ${task.isDone? "done":""}`} onDoubleClick={()=>{
            toggleDone(task.id)}
        }>
              
        <h3>
        {task.text}
        <FaTimes style={{ color: "red", cursor: "pointer" }}
        onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{task.day}</p>
          
    </div>
  );
};

export default Task;
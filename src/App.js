import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import data from "./helper/starterData";


const App = () => {
  const [tasks, setTasks] = useState(data);

  const [showAddTask, setShowAddTask] = useState(true);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

   const toggleDone=(toggleDoneId)=>{
        setTasks(
          tasks.map((task)=>task.id ===toggleDoneId?{...task, isDone:!task.isDone}:task)
        )
    }
  
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        toggleShow={toggleShow}
      />

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} toggleDone={toggleDone} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
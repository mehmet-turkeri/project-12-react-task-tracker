import Task from './Task';

const Tasks = ({ tasks, onDelete, toggleDone }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} toggleDone={toggleDone}/>
      ))}
    </div>
  );
};

export default Tasks
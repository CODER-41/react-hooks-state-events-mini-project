import React from "react";
import Task from "./Task";

// Receive the list of tasks and the delete handler as props
function TaskList({ tasks, onDeleteTask }) {
  // Map over the tasks array to create a Task component for each
  const taskElements = tasks.map((task) => (
    <Task
      // Use the task's text as the key 
      key={task.text}
      text={task.text} // Pass text as individual prop
      category={task.category} // Pass category as individual prop
      onDeleteTask={onDeleteTask} // Pass the delete handler down to the Task
    />
  ));

  return (
    <div className="tasks">
      {/* Display the list of Task components */}
      {taskElements}
    </div>
  );
}

export default TaskList;
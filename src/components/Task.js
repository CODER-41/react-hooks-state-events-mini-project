import React from "react";

// Receive text, category, and the delete handler as individual props
function Task({text, category, onDeleteTask}) {

  // Handler for delete button click
  const handleDeleteClick = () => {
    onDeleteTask(text); 
  };

  return (
    <div className="task">
      {/* Display the task's category */}
      <div className="label">{category}</div>
      {/* Display the task's text */}
      <div className="text">{text}</div>
      {/* Attach the click handler to the delete button */}
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;

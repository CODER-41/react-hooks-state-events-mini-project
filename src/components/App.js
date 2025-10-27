import React, { useState } from "react"; 
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // State to hold the current list of tasks
  const [tasks, setTasks] = useState(TASKS);
  // State to hold the currently selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  const handleDeleteTask = (taskText) => {
    // Filter out the task whose text matches the provided taskText
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    // Update the tasks state with the new array
    setTasks(updatedTasks);
  };

  
  const handleTaskFormSubmit = (newTask) => {
    // Add the new task to the beginning of the tasks array
    setTasks([...tasks, newTask]);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

 
  // Filter the tasks based on the selectedCategory
  const filteredTasks = tasks.filter((task) => {
    // If "All" is selected, return true for all tasks
    if (selectedCategory === "All") {
      return true;
    }
    // Otherwise, only return tasks whose category matches the selectedCategory
    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* Pass CATEGORIES and the handler for selecting a category */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      {/* Pass CATEGORIES (excluding "All") and the handler for form submission */}
      <NewTaskForm
        categories={CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      {/* Pass the filtered list of tasks and the handler for deleting a task */}
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

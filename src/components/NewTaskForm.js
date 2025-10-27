import React,{useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit}){
  //state  for the controlled component to track input values
  const [text,setText]=useState("");
  const [category,setCategory]=useState(categories[0] ||"");

  //handler changes for the text input 
  const handleTextChange=(e)=>{ 
    setText(e.target.value);
  };
  //handle changes for the category  input
  const handleCategoryChange=(e)=>{
    setCategory(e.target.value);
  };
  
  //handle form submission
  const handleSubmit=(e)=>{
    e.preventDefault(); // prevent the default form submission 
    //create a new task object
    const newTask={
      text:text,
      category:category
    };
    onTaskFormSubmit(newTask); //call the callback prop with new task object

    //reset the form inputs
    setText("");
    setCategory(categories[0] ||"");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        {/* Controlled input: value is set by state, onChange updates state */}
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        {/* Controlled select: value is set by state, onChange updates state */}
        <select name="category" value={category} onChange={handleCategoryChange}>
          {/* Map categories to option elements (excluding "All" is handled in App) */}
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
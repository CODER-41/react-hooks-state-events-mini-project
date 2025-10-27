import React from "react";

// Receive categories, selectedCategory, and the selection handler as props
function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  // Map over the categories array to create a button for each one
  const categoryButtons = categories.map((category) => {
    // Determine if the current button is the selected one
    const className = category === selectedCategory ? "selected" : "";

    return (
      // Set the key to the category string as required by the test
      <button
        key={category}
        className={className}
        
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Render the array of category buttons */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

// Function to add a new todo item
function addTodoItem(text) {
    const todoList = document.querySelector('.todo-2 ul');
    const newItem = document.createElement('li');
    newItem.textContent = text;
    todoList.appendChild(newItem);
  }
  
  // Function to delete a todo item
  function deleteTodoItem(index) {
    const todoList = document.querySelector('.todo-2 ul');
    const items = todoList.querySelectorAll('li');
    
    if (index >= 0 && index < items.length) {
      todoList.removeChild(items[index]);
    } else {
      console.error('Invalid index for deletion');
    }
  }
  
  // Example usage
  addTodoItem('Complete Todo App on Frontend Mentor');
  deleteTodoItem(0); // Delete the first item
  
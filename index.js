
  // Function to add a new todo item
  function addTodoItem(text) {
    const todoList = document.querySelector('.todo-2 ul');
    const newItem = document.createElement('li');
    newItem.textContent = text;
    todoList.appendChild(newItem);
  }

  // Function to handle form submission
  document.getElementById('add-newTodo').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const newTodoText = this.querySelector('input[type="text"]').value.trim();
    
    if (newTodoText !== '') {
      addTodoItem(newTodoText); // Add new todo item
      this.reset(); // Reset form
    } else {
      alert('Please enter a valid todo item.');
    }
  });

  
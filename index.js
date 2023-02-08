const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoItems = document.getElementById("todo-items");

let todos = [];

// Load existing todos from local storage
const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
if (storedTodos.length) {
  todos = storedTodos;
  renderTodos();
}

// Add a new todo item
addButton.addEventListener("click", () => {
  const todoText = todoInput.value;
  if (!todoText) return;
  todos.push({
    text: todoText,
    done: false
  });
  renderTodos();
  todoInput.value = "";
});

// Remove a todo item
todoItems.addEventListener("click", event => {
  if (event.target.tagName !== "LI") return;
  const index = event.target.dataset.index;
  todos.splice(index, 1);
  renderTodos();
});

// Update a todo item
todoItems.addEventListener("change", event => {
  const index = event.target.dataset.index;
  todos[index].done = event.target.checked;
  renderTodos();
});

// Render todo items
// function renderTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos));
//   todoItems.innerHTML = "";
//   for (let i = 0; i < todos.length; i++) {
//     const todo = todos[i];
//   } 
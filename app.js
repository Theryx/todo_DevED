//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//Event Listener
todoButton.addEventListener("click", addTodo);
//function
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  console.log("Hello");
}

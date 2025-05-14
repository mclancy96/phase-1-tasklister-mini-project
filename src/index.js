const submitButton = document.querySelector('input[type="submit"]');
const taskList = document.getElementById('tasks');
const taskDescription = document.getElementById('new-task-description').value

const addElement = (task) => {
  const newEl = document.createElement('li');
  newEl.textContent = task;
  taskList.appendChild(newEl)
}

const submitClick = (buttonClick) => {
  buttonClick.preventDefault()
  addElement(taskDescription)
}

document.addEventListener("DOMContentLoaded", () => {
  submitButton.addEventListener('click', submitClick)
});

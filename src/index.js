const submitButton = document.querySelector('input[type="submit"]');
const taskList = document.getElementById('tasks');
const taskDescription = document.getElementById('new-task-description')

const addElementToList = (task) => {
  const newEl = document.createElement('li');
  newEl.textContent = task;
  taskList.appendChild(newEl);
  taskDescription.value = '';
}

const submitClickAction = (buttonClick) => {
  buttonClick.preventDefault()
  if (taskDescription.value != '') {
    addElementToList(taskDescription.value)
  } else {
    taskDescription.placeholder = 'Text Cannot be Blank!'
  }
}

document.addEventListener("DOMContentLoaded", () => {
  submitButton.addEventListener('click', submitClickAction)
});

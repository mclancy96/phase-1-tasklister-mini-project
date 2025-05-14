const submitButton = document.querySelector('input[type="submit"]')

const submitClick = (buttonClick) => {
  buttonClick.preventDefault()
}

document.addEventListener("DOMContentLoaded", () => {
  submitButton.addEventListener('click', submitClick)
});

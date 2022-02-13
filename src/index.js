document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById(`create-task-form`)
  newTaskForm.addEventListener(`submit`, (e) => {
    e.preventDefault()
    createTaskList(e.target.querySelector(`#new-task-description`).value)
});

function createTaskList(task){
  let li = document.createElement(`li`)
  let btn = document.createElement(`button`)
  li.textContent = `${task}`
  
  btn.textContent = `x`
  btn.addEventListener(`click`, deleteTask)
  
  li.appendChild(btn)
  document.querySelector(`#tasks`).appendChild(li)
  newTaskForm.reset()
}

function deleteTask(e){
  e.target.parentNode.remove()
}
})
//Grab Form ID, or select FORM
  //text field for inputting task
  //submit button to put task in the DOM
//NEED to prevent default because the SUBMIT button WILL redirect the user to a new page, which we do NOT want
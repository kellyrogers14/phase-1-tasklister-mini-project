document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (event) =>{
    event.preventDefault()
    // console.log(event.target.newTask.value)
    addNewTask(event.target.newTask.value, event.target.priority.value)
    let priority = event.target.priority.value
  })
  });

  function addNewTask(todo, priority){
    let li = document.createElement ('li');
    li.textContent = `Task: ${todo}, Priority: ${priority}` 
    li.style.color = priority.toLowerCase() === 'high' ? 'red' : 'green'; 
    
    let btn = document.createElement('button')
    btn.innerText='x';
    btn.addEventListener('click', ()=> {
      removeTask(li)
    })

    li.appendChild(btn);
    
    document.getElementById('tasks').appendChild(li)

  }


  function removeTask(task){
    task.remove()
  }

  
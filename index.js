const form = document.querySelector('form');
const input = document.querySelector('#input');
const todos = document.querySelector('.todos');

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  addToDO()
  updateLocalStorage();
 
})

const getTodos = JSON.parse(localStorage.getItem('todos'));

if(getTodos){
   
    getTodos.forEach(getTodo =>{
        addToDO(getTodo)
    })

}

function addToDO(getTodo){
    let todo = input.value;

    if(getTodo){
        todo = getTodo.text
    }

    if(todo){
        const todoEl = document.createElement('li');
        todoEl.innerText =  todo;
        todos.appendChild(todoEl);
  
        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('complited');
            updateLocalStorage();
        })
  
        todoEl.addEventListener("contextmenu",(e)=>{
          e.preventDefault();
          todoEl.remove();
          updateLocalStorage();
      });
  
        input.value = '';
    }
}

function updateLocalStorage(){
    const todosEl = document.querySelectorAll('li');

    const todos= []; 

    todosEl.forEach(todo =>{
        todos.push({
            text: todo.innerText,
            completed: todo.classList.contains('complited')
        });

        localStorage.setItem('todos',JSON.stringify(todos));
    })
}
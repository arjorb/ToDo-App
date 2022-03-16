const form = document.querySelector('form');
const input = document.querySelector('#input');
const todos = document.querySelector('.todos');

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  addToDO()
 
 
})


function addToDO(){
    const todo = input.value;

    if(todo){
        const todoEl = document.createElement('li');
        todoEl.innerText =  todo;
        todos.appendChild(todoEl);
  
        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('complited');
        })
  
        todoEl.addEventListener("contextmenu",(e)=>{
          e.preventDefault();
          todoEl.remove();
      });
  
        input.value = '';
    }
}

// function updateLocalStorage(){
//     const notes = document.querySelectorAll('li');
// }
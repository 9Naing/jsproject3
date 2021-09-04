//UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input'); 
const todoul = document.getElementById('todos');

const todos = JSON.parse( localStorage.getItem('todos'));

if(todos){
     todos.forEach((todo) => {
          addtodo(todo);
     });
}

formel.addEventListener('submit', (e) => {
     e.preventDefault();
     addtodo();
});

function addtodo(todo){
     let todotext = inputel.value;

     if(todo){

          todotext = todo.text;
     }
     if(todotext){
          const li = document.createElement('li');
          li.appendChild(document.createTextNode(todotext));

          if(todo && todo.complete){
               li.classList.add('complete');
          }

          todoul.appendChild(li);
          inputel.value = '';

          //add to local storage
          updatelocalstorage();

          li.addEventListener('click', () => {
               li.classList.toggle('complete');
               updatelocalstorage();
          });

          //remove by right click
          li.addEventListener('contextmenu', (e) => {
                    li.remove();
                    updatelocalstorage();

                    e.preventDefault();
          });
     }else{
          window.alert('Enter Tasks');
     }
};

function updatelocalstorage(){
     let todolis = document.querySelectorAll('li');

     const todos = [ ];
     todolis.forEach(todoli => {
          // console.log(todoli);

          todos.push({
               text: todoli.innerText,
               complete: todoli.classList.contains('complete')
          });
     });

     localStorage.setItem('todos', JSON.stringify(todos));
}




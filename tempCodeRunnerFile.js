// prevent form from submitting
event.preventDefault();
// Create todo DIV
const todoDIV = document.createElement('div');
todoDIV.classList.add('todo');

// Create li
const newTodo = document.createElement('li');
newTodo.innerText = 'Hey';
newTodo.classList.add('todo-item');
todoDIV.appendChild('newTodo');

// Create check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add('complete-button');
todoDIV.appendChild(completedButton);

// Create trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add('complete-button');
todoDIV.appendChild(trashButton);

// append to list
todoList.appendChild(todoDIV)
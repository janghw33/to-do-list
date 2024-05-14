// Temp button functions

const addTodo = () => {
    var inputText = document.getElementById('todo-input').value; 
    var todoList = document.getElementById('todo-list'); 

    var newListItem = document.createElement('li');
    var checkBox = document.createElement('input'); 
    checkBox.type = "checkbox"; 
    var spanText = document.createElement('span'); 
    spanText.textContent = inputText; 

    checkBox.addEventListener('change', function() {
        if (checkBox.checked) {
            spanText.style.textDecoration = "line-through"; 
        } else {
            spanText.style.textDecoration = "none"; 
        }
    });

    newListItem.appendChild(spanText);
    newListItem.appendChild(checkBox);
    todoList.appendChild(newListItem);

    document.getElementById('todo-input').value = '';
}

deleteTodo = () => {};

editTodo = () => {};

//Stringiy and send to local storage
// function saveTodos() {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }

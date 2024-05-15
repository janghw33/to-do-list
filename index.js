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

    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete';

    deleteButton.addEventListener('click', (e)=> {
            const selectedItem = e.target.parentElement;
            list.removeChild(selectedItem);
        })
    
    newListItem.appendChild(spanText);
    newListItem.appendChild(checkBox);
    todoList.appendChild(newListItem);
    newListItem.appendChild(deleteButton);
    document.getElementById('todo-input').value = '';
}


const list = document.getElementById('todo-list');
const items = document.getElementsByTagName('li');
for(let i=0; i< items.length; i++) {
    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete';
    items[i].appendChild(deleteButton);
}

let deleteBtn = document.getElementsByClassName('delete');
for(let i=0; i< deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', (e)=> {
        const selectedItem = e.target.parentElement;
        list.removeChild(selectedItem);

    })
}



editTodo = () => {};

//Stringiy and send to local storage
// function saveTodos() {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }

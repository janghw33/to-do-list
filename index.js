// Temp button functions

let todos = [];

var newListItem = document.createElement("li");
var spanText = document.createElement("span");
const todoList = document.getElementById("todo-list");

const addTodo = () => {
  var inputText = document.getElementById("todo-input").value.trim();
  if (inputText === "") return;

  var newListItem = document.createElement("li");

  var spanText = document.createElement("span");
  spanText.textContent = inputText;
  spanText.style.background = "transparent";
  const newTodo = { text: inputText, completed: false };
  todos.push(newTodo);

  spanText.addEventListener("click", (e) => {
    if (spanText.style.textDecoration === "line-through") {
      spanText.style.textDecoration = "none";

      updateLocalStorage();
    } else {
      spanText.style.textDecoration = "line-through";

      updateLocalStorage();
    }
  });

  const deleteButton = document.createElement("span");
  deleteButton.textContent = "X";
  deleteButton.className = "delete";

  deleteButton.addEventListener("click", (e) => {
    const selectedItem = e.target.parentElement;
    todoList.removeChild(selectedItem);
    updateLocalStorage();
  });

    const editButton = document.createElement("span");
    editButton.innerHTML = "Edit";
    editButton.classList.add("edit");
    
  newListItem.appendChild(spanText);
  newListItem.appendChild(editButton);
  newListItem.appendChild(deleteButton);
  todoList.appendChild(newListItem);

  document.getElementById("todo-input").value = "";
  updateLocalStorage();
};

//end of add

const list = document.getElementById("todo-list");
const items = document.getElementsByTagName("li");

for(let i=0; i<items.length; i++ ){
  const editButton = document.createElement('span');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit');
  items[i].appendChild(editButton);
}


for (let i = 0; i < items.length; i++) {
  const deleteButton = document.createElement("span");
  deleteButton.textContent = "X";
  deleteButton.className = "delete";
  items[i].appendChild(deleteButton);
} 
let deleteBtn = document.getElementsByClassName("delete");
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", (e) => {
    const selectedItem = e.target.parentElement;
    list.removeChild(selectedItem);
  });
}




todoList.addEventListener("click", function(e) {
  const target = e.target.classList.contains("edit"),
    update = e.target.classList.contains("update");
  if (target) {
    let val = e.target.parentElement.firstChild.innerHTML;
    
    e.target.parentElement.innerHTML = `
       <input type="text" name="todo" class="todo-text" value="${val}">
       <span class="update">update</span>
       `;
  }
  if (update) {
    let updValue = e.target.previousElementSibling.value;
    e.target.parentElement.innerHTML = `
    <li class="list-item">
    <span>${updValue}</span>
    <span class='edit'>edit</span>
    <span class='delete'>X</span>
    </li>`;
  }
});



function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
    renderTodos();
  }
}

loadTodos();

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    var newListItem = document.createElement("li");
    var spanText = document.createElement("span");
    spanText.style.background = "transparent";
    spanText.textContent = todo.text;

    if (todo.completed) {
      spanText.style.textDecoration = "line-through";
    }

    spanText.addEventListener("click", () => {
      todo.completed = !todo.completed;
      if (todo.completed) {
        spanText.style.textDecoration = "line-through";
      } else {
        spanText.style.textDecoration = "none";
      }
      updateLocalStorage();
    });
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "X";
    deleteButton.className = "delete";

    deleteButton.addEventListener("click", () => {
      const index = todos.findIndex((item) => item.text === todo.text);
      if (index !== -1) {
        todos.splice(index, 1);
        renderTodos();
        updateLocalStorage();
      }
    });

    newListItem.appendChild(spanText);
    newListItem.appendChild(deleteButton);
    todoList.appendChild(newListItem);
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////
let destroy = document.getElementById("destroyInternet");
destroy.addEventListener("mouseover", changeLocation);

function changeLocation() {
  destroy.style.position = "absolute";
  let screenX = Math.floor(Math.random() * window.innerWidth);
  let screenY = Math.floor(Math.random() * window.innerHeight);

  console.log(screenX, screenY);

  destroy.style.left = screenX + "px";
  destroy.style.top = screenY + "px";
}

function cleanup() {
  todos = todos.filter((todo) => !todo.completed);
  updateLocalStorage();
  renderTodos();
}

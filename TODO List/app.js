// DOM öğelerini seç
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Todo'ları saklamak için bir array oluştur
let todos = [];

// Yeni bir todo ekle
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        todos.push(todo);
        renderTodos();
        todoInput.value = '';
    }
}

// Todo'ları render et
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTodo(todo.id);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Bir todo'yu sil
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// Event listener ekle
addTodoBtn.addEventListener('click', addTodo);

const input = document.getElementById('input-text');
const addBtn = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

function createTodo() {
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter any text");
        return;
    }
    const li = document.createElement('li');

    li.innerHTML = `
    <span class="task-text">${text}</span>
    <button class="Delete-btn" >Delete</button>
    <button><i class="fas fa-edit edit-btn" ></i></button>
    `;

    li.querySelector('.task-text').addEventListener('click', function () {
        this.classList.toggle('completed');
    });

    li.querySelector('.Delete-btn').addEventListener('click', function () {
        li.remove();
    });
    todoList.appendChild(li);
    input.value = "";
}
addBtn.addEventListener('click', createTodo) ;

input.addEventListener('keypress',(e) => {
    if(e.key==='Enter') {
        createTodo();
    }
})
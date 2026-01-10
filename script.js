const input = document.getElementById('input-text');
const addBtn = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount') ;
const remainingCount = document.getElementById('remainingCount') ;

function createTodo() {
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter any text");
        return;
    }
    const li = document.createElement('li');

    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="Delete-btn">Delete</button>
        <button class="edit-btn"><i class="fas fa-edit"></i></button>
    `;

    const taskText = li.querySelector('.task-text');
    const deleteBtn = li.querySelector('.Delete-btn');
    const editBtn = li.querySelector('.edit-btn');

    taskText.addEventListener('click', function () {
        this.classList.toggle('completed');
        taskCounter()
    });

    deleteBtn.addEventListener('click', function () {
        li.remove();
        taskCounter()
    });

    editBtn.addEventListener('click', function () {
        taskText.setAttribute("contenteditable", "true");
        taskText.focus();
        const range = document.createRange();
        range.selectNodeContents(taskText);
        range.collapse(false); // false = end

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    });

    taskText.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            taskText.removeAttribute("contenteditable");
        }
    });

    taskText.addEventListener('blur', function () {
        taskText.removeAttribute("contenteditable");
    });
    todoList.appendChild(li);
    input.value = "";

    taskCounter();
}

addBtn.addEventListener('click', createTodo);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createTodo();
    }
});

function taskCounter() {

    const allTasks = todoList.querySelectorAll("li");

    const completedTasks = todoList.querySelectorAll(".task-text.completed");

    const total = allTasks.length;
    const completed = completedTasks.length;
    const remaining = total - completed;

    totalCount.textContent = total;
    completedCount.textContent = completed;
    remainingCount.textContent = remaining;
}

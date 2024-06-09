let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
displayItems();

function addTodo() {
    let inputEle = document.querySelector('#todo-input');
    let dateEle = document.querySelector('#todo-date');
    let inputTodo = inputEle.value.trim();
    let date = dateEle.value.trim();

    if (inputTodo && date) {
        todoList.push({ item: inputTodo, dueDate: date });
        inputEle.value = '';
        dateEle.value = '';
        saveToLocalStorage();
        displayItems();
    }
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
        <div>
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick="deleteItem(${i})">Delete</button>
        </div>
        `;
    }
    containerElement.innerHTML = newHtml;
}

function deleteItem(index) {
    todoList.splice(index, 1);
    saveToLocalStorage();
    displayItems();
}

function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}


const addTask = () => {
    const newTask = document.getElementById("new-task-text");
    const dueDate = document.getElementById("due-date");


    const currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    // This arrangement can be altered based on how we want the date's format to appear.
    let formattedDate = `${year}-${month}-${day}`;


    // Only add the task if there is some text (not empty)
    if (newTask.value) {
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        todoTasksImportant.push(false);
        newTask.value = "";

        if (dueDate.value) {
            todoTasksDueDate.push(dueDate.value);
        } else {
            todoTasksDueDate.push(formattedDate);
        }
        updateTodoList();
    } 
};

const updateTodoList = () => {
    const todoList = document.getElementById("todo-list");
    // Clear the existing list items
    todoList.innerHTML = "";
    // Loop through the tasks and add them to the list
    for (const [index, task] of todoTasks.entries()) {
        const newTodoTaskElement = createNewTodoItemElement(task, index);
        // Add the <li> element to the list
        todoList.appendChild(newTodoTaskElement);
    }

};

const createNewTodoItemElement = (task, index) => {
    // Create a <p> element to store the task description
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    // Add due date to the task
    const dueDateElement = document.createElement("span");
    dueDateElement.innerText = " (Due: " + todoTasksDueDate[index] + ")";
    newTodoTaskTextElement.appendChild(dueDateElement);

    // Add mark if task is important
    if (todoTasksImportant[index] == true) {
        newTodoTaskTextElement.innerText = "❗ " + newTodoTaskTextElement.innerText;
    };

    // Apply a CSS class to the completed items
    if (todoTasksStatus[index] == true) {
    newTodoTaskTextElement.classList.add("complete");
    };

    // Create a <li> element to contain the paragraph
    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    // Adding a button to mark each item as important
    const importantButtonElement = document.createElement("input");
    importantButtonElement.type = "button";
    importantButtonElement.value = "Important";
    importantButtonElement.onclick = function () {
        toggleImportant(index);
    };
    newTodoTaskElement.appendChild(importantButtonElement);
    

    // Adding a button to mark each item as complete
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);

    // Add an arrow up button to move the task up the list
    const upButtonElement = document.createElement("input");
    upButtonElement.type = "button";
    upButtonElement.value = "↑";
    upButtonElement.onclick = function () {
        if (index > 0) {
            // Swap the tasks
            [todoTasks[index], todoTasks[index - 1]] = [todoTasks[index - 1], todoTasks[index]];
            [todoTasksStatus[index], todoTasksStatus[index - 1]] = [todoTasksStatus[index - 1], todoTasksStatus[index]];
            [todoTasksImportant[index], todoTasksImportant[index - 1]] = [todoTasksImportant[index - 1], todoTasksImportant[index]];
            [todoTasksDueDate[index], todoTasksDueDate[index - 1]] = [todoTasksDueDate[index - 1], todoTasksDueDate[index]];
            updateTodoList();
        };
    };
    newTodoTaskElement.appendChild(upButtonElement);


    return newTodoTaskElement;
};

const toggleComplete = (index) => {
    // If it is complete, make it incomplete
    // If it is incomplete, make it complete
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    updateTodoList();
};

const toggleImportant = (index) => {
    // If it is not important, make it important
    // If it is important, make it not important
    if (todoTasksImportant[index] == false) {
        todoTasksImportant[index] = true;
    } else {
        todoTasksImportant[index] = false;
    }
    updateTodoList();
};

let todoTasks = ["Walk Chilli", "Make Dinner", "Do laundry"];
let todoTasksStatus = [false, true, false];
let todoTasksImportant = [true, false, true];
let todoTasksDueDate = ["2024-06-10", "2024-06-11", "2024-10-06"];

const todoList = document.getElementById("todo-list");
 
for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    // Add the <li> element to the list
    todoList.appendChild(newTodoTaskElement);
};


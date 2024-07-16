import taskManager from "./tasksManager";

const inputTodo = document.querySelector('.inputToDo').value;
const taskList = document.querySelector('.taskList');
const appendButton = document.querySelector('#appendNewTaskButton');



const DOMManipulator = {
    renderToDos() {
        const toDos = taskManager.getToDos();
        const taskList = document.querySelector('.taskList');
        taskList.innerHTML = '';
        toDos.forEach((toDo, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
            <div class="toDoItem" ${toDo.completed ? "completed" : ""}>
                <input type="checkbox" class="checkbox" ${toDo.completed ? "checked" : ""}>
                <p>${toDo.toDoTitle}</p>
                <div class="icons">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>`
        })
    },

    appendToDos() {

    },

    deleteToDos() {

    },

    updateProgressBar() {
        // in relation to the number of completed tasks / number of total tasks
    }
}

export default DOMManipulator

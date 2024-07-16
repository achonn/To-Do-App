import taskManager from "./tasksManager";

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
                    <i class="fa-regular fa-pen-to-square" "edit"></i>
                    <i class="fa-solid fa-trash" "trash"></i>
                </div>
            </div>`

            function deleteToDos() {
                const deleteButton = document.querySelector('.trash');
                deleteButton.addEventListener('click', function() {
                    taskManager.deleteToDo(index);
                    this.renderToDos();
                })
            };
        })
    },

    appendToDos() {
        const toDoTitle = document.querySelector('.inputToDo').value;
        const appendButton = document.querySelector('#appendNewTaskButton');
        appendButton.addEventListener('click', function() {
            taskManager.addToDo(toDoTitle);
            this.renderToDos();
        })
    },


    updateProgressBar() {
        // in relation to the number of completed tasks / number of total tasks
    }
}

export default DOMManipulator

import taskManager from "./tasksManager";

const DOMManipulator = (function(){
    const renderToDos = function() {
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
                    <button class = "edit"><i class="fa-regular fa-pen-to-square" "edit"></i></button>
                    <button class = "trash"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`;
            taskList.appendChild(listItem);

            const deleteButton = document.querySelector('.trash');
            deleteButton.addEventListener('click', function() {
                taskManager.deleteToDo(index);
                renderToDos();
            })
        })
    };

    const appendToDos = function() {
        const appendButton = document.querySelector('#appendNewTaskButton');
        appendButton.addEventListener('click', function() {
            const toDoTitle = (document.querySelector('.inputToDo')).value;
            if (toDoTitle.trim()) {
                taskManager.addToDo(toDoTitle);
                renderToDos();
            }
        });
    };


    const initialize = function() {
        renderToDos();
        appendToDos();
    };

    return { initialize }
})();

export default DOMManipulator

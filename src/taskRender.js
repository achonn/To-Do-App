import TaskManager from './tasksManager';
import ProgressBar from './progressBar';

const TaskRenderer = (() => {
    const renderToDos = () => {
        const toDos = TaskManager.getToDos();
        const taskList = document.querySelector('.taskList');
        taskList.innerHTML = '';

        toDos.forEach((toDo, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="toDoItem">
                    <div class="task ${toDo.completed ? "completed" : ""}">
                        <input type="checkbox" class="checkbox" ${toDo.completed ? "checked" : ""}/>
                        <p>${toDo.toDoTitle}</p>
                    </div>
                    <div class="icons">
                        <div class="edit"><i class="fa-regular fa-pen-to-square"></i></div>
                        <div class="trash"><i class="fa-solid fa-trash"></i></div>
                    </div>
                </div>`;

            const checkbox = listItem.querySelector('.checkbox');
            checkbox.addEventListener('change', () => {
                toDo.completed = !toDo.completed;
                TaskManager.updateToDo(index, toDo);
                updateDisplay();
            });

            listItem.querySelector('.trash').addEventListener('click', () => {
                TaskManager.deleteToDo(index);
                updateDisplay();
            });

            listItem.querySelector('.edit').addEventListener('click', () => {
                const toDoTitle = document.querySelector('.inputToDo');
                toDoTitle.value = toDo.toDoTitle;
                TaskManager.deleteToDo(index);
                updateDisplay();
            });

            taskList.appendChild(listItem);
        });
    };

    const updateDisplay = () => {
        renderToDos();
        ProgressBar.updateProgressBar();
    };

    return {
        renderToDos,
        updateDisplay,
    };
})();

export default TaskRenderer;

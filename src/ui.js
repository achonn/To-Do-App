import taskManager from "./tasksManager";

const DOMManipulator = (function(){
    const renderToDos = function() {
        const toDos = taskManager.getToDos();
        const toggleTaskComplete = function(index) {
            toDos[index].completed = !toDos[index].completed;
            taskManager.saveToDos(toDos);

            updateProgressBar();
            renderToDos();
        }; 
        const taskList = document.querySelector('.taskList');
        taskList.innerHTML = '';

        toDos.forEach((toDo, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
            <div class="toDoItem">
                <div class="task ${toDo.completed ? "completed" : ""}">
                    <input type="checkbox" class="checkbox" ${toDo.completed ? "checked" : ""}"/>
                    <p>${toDo.toDoTitle}</p>
                </div>
                <div class="icons">
                    <div class ="edit"><i class="fa-regular fa-pen-to-square" "edit"></i></div>
                    <div class ="trash"><i class="fa-solid fa-trash"></i></div>
                </div>
            </div>`;
            listItem.querySelector('.checkbox').addEventListener('change', () => toggleTaskComplete(index));
            taskList.appendChild(listItem);

            const deleteButton = listItem.querySelector('.trash');
            deleteButton.addEventListener('click', function() {
                taskManager.deleteToDo(index);
                updateProgressBar();
                renderToDos();
            });

            const editButton = listItem.querySelector('.edit');
            editButton.addEventListener('click', function() {
                const toDoTitle = document.querySelector('.inputToDo');
                toDoTitle.value = toDos[index].toDoTitle;

                toDos.splice(index,1);
                updateProgressBar();
                renderToDos();
            });
        })
    };

    const appendToDos = function() {
        const appendButton = document.querySelector('#appendNewTaskButton');
        appendButton.addEventListener('click', function(event) {
            event.preventDefault();
            const toDoTitle = (document.querySelector('.inputToDo')).value;
            if (toDoTitle.trim()) {
                taskManager.addToDo(toDoTitle);
                renderToDos();
            };
        });
        updateProgressBar();
    };


    const updateProgressBar = function() {
        const completedTasks = toDos.filter(task => task.completed).length;
        const totalTasks = toDos.length;
        const progress = (completedTasks / totalTasks) * 100;
        const progressBar = document.getElementById('progress');
        progressBar.style.width = `${progress}%`;

        document.getElementById('numbers').innerText = `${completedTasks / totalTasks}`;
    }

    const initialize = function() {
        renderToDos();
        appendToDos();
        updateProgressBar();
    };

    return { initialize }
})();

export default DOMManipulator

import taskManager from "./tasksManager";

const DOMManipulator = (function(){
    const renderToDos = function() {
        const toDos = taskManager.getToDos();
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

            const checkbox = listItem.querySelector('.checkbox');
            checkbox.checked = toDo.completed;
            
            checkbox.addEventListener('change', () => {
                toDo.completed = !toDo.completed;
                taskManager.updateToDo(index, toDo);
                renderToDos();
                updateProgressBar();
            });

            listItem.querySelector('.checkbox').addEventListener('change', () => {
                toDo.completed = !toDo.completed;
                taskManager.updateToDo(index, toDo);
                updateProgressBar();
                renderToDos();
            });

            listItem.querySelector('.trash').addEventListener('click', () => {
                taskManager.deleteToDo(index);
                updateProgressBar();
                renderToDos();
            });

            listItem.querySelector('.edit').addEventListener('click', () => {
                const toDoTitle = document.querySelector('.inputToDo');
                toDoTitle.value = toDo.toDoTitle;

                toDos.splice(index, 1);
                updateProgressBar();
                renderToDos();
            });

            taskList.appendChild(listItem);
        });
    };

    const appendToDos = function() {
        const appendButton = document.querySelector('#appendNewTaskButton');
        appendButton.addEventListener('click', (event) => {
            event.preventDefault();
            const toDoTitle = document.querySelector('.inputToDo');
            if (toDoTitle.value.trim()) {
                taskManager.addToDo(toDoTitle.value);
                toDoTitle.value = '';
                renderToDos();
                updateProgressBar();
            }
        });
    };

    const updateProgressBar = function() {
        const toDos = taskManager.getToDos();
        const completedTasks = toDos.filter(task => task.completed).length;
        const totalTasks = toDos.length;
        const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;
        const progressBar = document.getElementById('progress');
        progressBar.style.width = `${progress}%`;
        document.getElementById('numbers').innerText = `${completedTasks} / ${totalTasks}`;

        if (totalTasks && completedTasks === totalTasks) {
            blastConfetti();
        }
    };

    const blastConfetti = function() {
        const count = 200,
        defaults = {
          origin: { y: 0.7 },
        };
      
      function fire(particleRatio, opts) {
        confetti(
          Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio),
          })
        );
      }
      
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      
      fire(0.2, {
        spread: 60,
      });
      
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }

    const initialize = function() {
        renderToDos();
        appendToDos();
        updateProgressBar();
    };

    return { initialize }
})();

export default DOMManipulator
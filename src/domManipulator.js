import TaskManager from './tasksManager';
import TaskRenderer from './taskRender';
import ProgressBar from './progressBar';

const DOMManipulator = (() => {
    const initialize = () => {
        TaskRenderer.renderToDos();
        bindAppendToDos();
        ProgressBar.updateProgressBar();
    };

    const bindAppendToDos = () => {
        const appendButton = document.querySelector('#appendNewTaskButton');
        appendButton.addEventListener('click', (event) => {
            event.preventDefault();
            const toDoTitle = document.querySelector('.inputToDo');
            if (toDoTitle.value.trim()) {
                TaskManager.addToDo(toDoTitle.value);
                toDoTitle.value = '';
                TaskRenderer.updateDisplay();
            }
        });
    };

    return {
        initialize,
    };
})();

export default DOMManipulator;

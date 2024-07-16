import { saveToDos, loadToDos } from "./JSON";

const taskManager = (function() {
    let toDos = loadToDos();

    const addToDo = function(toDoTitle) {
        const newTodo = {
            toDoTitle,
            completed: false
        };

        toDos.push(newTodo);
        saveToDos(toDos);
    };

    const deleteToDo = function(index) {
        toDos.splice(index,1)
        saveToDos(toDos);
    };

    const getToDos = function() {
        return toDos
    };


    return {addToDo,deleteToDo,getToDos};
})();

export default taskManager
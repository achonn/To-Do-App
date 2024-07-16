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

    const updateToDo = function(index, updatedToDo) {
        toDos[index] = updatedToDo;
        saveToDos(toDos);
    };


    return { addToDo, deleteToDo, getToDos, updateToDo };
})();

export default taskManager
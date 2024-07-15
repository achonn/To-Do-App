import { saveToDos } from "./JSON";

const taskManager = (function() {
    let toDos = [];

    const addToDo = function(toDoTitle) {
        const newTodo = {
            toDoTitle,
            completed: false
        };

        toDos.push(newTodo);
        saveToDos()
    };

    const deleteToDo = function(index) {
        toDos.splice(index,1)
        saveToDos();
    };

    const getToDos = function() {
        return toDos
    };


    return {addToDo,deleteToDo,getToDos};
})();

export default taskManager
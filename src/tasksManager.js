const taskManager = (function() {
    let toDos = [];

    const addToDo = function(toDoTitle) {
        const newTodo = {
            toDoTitle,
            completed: false
        };

        toDos.push(newTodo);
    };

    const deleteToDo = function(index) {
        toDos.splice(index,1)
    };

    const getToDos = function() {
        return toDos
    };


    return {addToDo,deleteToDo,getToDos};
})();

export default taskManager
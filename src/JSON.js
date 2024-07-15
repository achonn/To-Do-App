const STORAGE_KEY = 'toDoApp';

export function saveToDos(toDos = toDos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toDos))
};

export function loadProjects() {
    const storedToDos = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (storedToDos) {
        storedToDos.forEach(task => {
            tasks.push(task);
        })
    }
}
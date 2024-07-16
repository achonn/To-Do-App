const STORAGE_KEY = 'toDoApp';

export function saveToDos(toDos = []) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toDos))
};

export function loadToDos() {
    const storedToDos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return storedToDos;
}
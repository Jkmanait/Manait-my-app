function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(newTask);
            removeTaskFromLocalStorage(newTask.textContent);
        });

        // Create Save button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', () => {
            newTask.classList.toggle('completed');
            updateTaskInLocalStorage(newTask.textContent);
        });

        // Append buttons to the new task element
        newTask.appendChild(deleteButton);
        newTask.appendChild(saveButton);

        taskList.appendChild(newTask);
        taskInput.value = "";

        saveTaskToLocalStorage(newTask.textContent);
    }
}

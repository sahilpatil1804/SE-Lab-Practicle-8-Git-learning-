document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return; // Do not proceed if input is empty
    }

    const li = document.createElement('li');
    
    li.textContent = taskInput.value;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    // Add event listener to delete button
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

   // Add event listener to mark task as completed
   li.addEventListener('click', function() {
       li.classList.toggle('completed');
   });

   li.appendChild(deleteBtn);
   document.getElementById('taskList').appendChild(li);
   
   // Clear the input field after adding the task
   taskInput.value = '';
}
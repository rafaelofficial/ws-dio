// Selects of DOM
const form = document.getElementById('form');
const taskInput = document.getElementById('task-input');
const btnPush = document.getElementById('btnPush');
const listTasks = document.getElementById('list');

// Events listening
btnPush.addEventListener('click', function (event) {
    event.preventDefault();
        // getter elements and created elements
        let taskCheckbox = document.createElement('input');
        let taskLabel = document.createElement('label');

        // setter attributes
        taskCheckbox.setAttribute('id', 'checkbox');
        taskCheckbox.setAttribute('type', 'checkbox');

        // inners HTML values of input
        taskLabel.innerHTML = taskInput.value + '<br />'; 

        // appended child of input and label
        listTasks.appendChild(taskCheckbox);
        listTasks.appendChild(taskLabel);

        // reset form
        form.reset();        
});


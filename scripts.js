const toggleSidebarBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});


const doneButtons = document.querySelectorAll('.done-btn');

document.addEventListener('DOMContentLoaded', () => {
    doneButtons.forEach(button => {
        const taskCard = button.closest('.task-card');
        const taskId = taskCard.getAttribute('data-task');
        const isDone = localStorage.getItem(`task-${taskId}`);
        
        if (isDone === 'true') {
            taskCard.classList.add('done');
            button.textContent = 'Task Done';
        }
    });
});


doneButtons.forEach(button => {
    button.addEventListener('click', () => {
        const taskCard = button.closest('.task-card');
        const taskId = taskCard.getAttribute('data-task');
        
        taskCard.classList.toggle('done');
        const isTaskDone = taskCard.classList.contains('done');
        button.textContent = isTaskDone ? 'Task Done' : 'Mark as Done';

        localStorage.setItem(`task-${taskId}`, isTaskDone);
    });
});

    
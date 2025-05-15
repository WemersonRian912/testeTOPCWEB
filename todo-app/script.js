function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Por favor, digite uma tarefa!');
      return;
    }
  
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
  
    li.innerHTML = `
      <span class="flex-grow-1">${taskText}</span>
      <div>
        <button class="btn btn-success btn-sm me-2" onclick="toggleTask(this)">✔</button>
        <button class="btn btn-danger btn-sm" onclick="removeTask(this)">🗑</button>
      </div>
    `;
  
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
    taskInput.focus();
  }
  
  function toggleTask(button) {
    const task = button.closest('li').querySelector('span');
    task.classList.toggle('text-decoration-line-through');
  }
  
  function removeTask(button) {
    const li = button.closest('li');
    li.remove();
  }
  
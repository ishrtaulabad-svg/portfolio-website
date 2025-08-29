const form = document.getElementById('form');
const taskListUL = document.getElementById("taskList2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = document.getElementById('taskInput').value;
  const date = document.getElementById('date').value;
  const priority = document.getElementById('priority').value;

  // Create task item
  const li = document.createElement("li");
  li.innerHTML = `
    <span>Task: ${task} | Date: ${date} | Priority: ${priority}</span>
    <button class="doneBtn">Mark Done</button>
  `;
  li.classList.add("task-item");

  // Handle mark done
  li.querySelector('.doneBtn').addEventListener('click', () => {
    li.classList.toggle("done");
  });

  taskListUL.appendChild(li);

  // Optional: Reset form
  form.reset();
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("addButton").style.backgroundColor = "transparent";
  document.getElementById("addButton").style.color = "#818181";
  document.body.style.transition = "0.5s ease";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  document.body.style.transition = "0.5s ease";
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const taskItems = document.querySelectorAll(".taskItem");
  const deleteAll = document.getElementById("deleteAll");
  const tasksDiv = document.getElementById("tasks");
  const addButton = document.getElementById("addButton");
  const closeButtonModal = document.getElementsByClassName("close")[0];
  const modal = document.getElementById("myModal");

  const tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  tasks.sort((a, b) => a.completed - b.completed);

  const displayTasks = (tasks) => {
    tasksDiv.innerHTML = "";

    tasks.forEach((task, index) => {
      const newDiv = document.createElement("div");
      newDiv.className = "task-item";
      newDiv.dataset.index = index;

      const input = document.createElement("input");
      input.type = "checkbox";
      input.className = "task-checkbox";

      const span = document.createElement("span");
      span.className = "task-text";
      span.textContent = task.text || task;

      if (task.completed) {
        input.checked = true;
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
      }

      const deleteButton = document.createElement("button");
      deleteButton.id = "deleteOne";
      deleteButton.textContent = "Delete";

      newDiv.appendChild(input);
      newDiv.appendChild(span);
      newDiv.appendChild(deleteButton);

      tasksDiv.appendChild(newDiv);
    });

    deleteAll.style.display = tasks.length > 1 ? "inline-block" : "none";
  };

  displayTasks(tasks);

  searchInput.addEventListener("input", function (e) {
    e.preventDefault();
    const query = this.value.toLowerCase();

    taskItems.forEach((task) => {
      const taskText = task.textContent.toLowerCase();
      if (taskText.includes(query)) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });

    const inputValue = searchInput.value.trim();

    if (!inputValue) {
      alert("There is no tasts that is matching your search!");
      return;
    }

    displayTasks(tasks);
  });

  addButton.addEventListener("click", function (e) {
    e.preventDefault();

    modal.style.display = "block";
  });

  closeButtonModal.addEventListener("click", function (e) {
    modal.style.display = "none";
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  deleteAll.addEventListener("click", function () {
    if (tasks.length === 0) return;
    if (confirm("Bugdin ustghda itgelte bnu?")) {
      tasks.length = 0;
      localStorage.removeItem("tasks");
      displayTasks(tasks);
    }
  });
});

"use strict";

// When the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // 1) cache HTML elements Easier
  const form     = document.querySelector("#new-task");
  const textIn   = document.querySelector("#task-text");
  const qtyIn    = document.querySelector("#task-qty");
  const todoUl   = document.querySelector("#todo-list");
  const doneUl   = document.querySelector("#done-list");
  const listsUl  = document.querySelector("#lists-ul");
  const noteCard = document.querySelector("#todo");
  const themeSelect = document.querySelector("#drop_down"); 

//   Storage keys to easier grab the correct storage type
  const STORAGE_TASKS_KEY = "todo.tasks";
  const STORAGE_THEME_KEY = "todo.theme";

  // 2) the data  ( no longer an empty array, but now the array saved by loadStorage function later)
    let tasks = loadTasksFromStorage();  

  // Theme loads and then applies in new function , listens for change in dropdown
  const savedTheme = localStorage.getItem(STORAGE_THEME_KEY) || ""; // 
  themeSelect.value = savedTheme;
  applyTheme(savedTheme);

  themeSelect.addEventListener("change", () => {
    const value = themeSelect.value;          
    applyTheme(value);
    localStorage.setItem(STORAGE_THEME_KEY, value);
  });

// Removes any data-theme if its empty or default otherwise puts the correct data theme
   function applyTheme(value) {
    if (!noteCard) return;
    if (value === "" || value === "default") {
      noteCard.removeAttribute("data-theme"); 
    } else {
      noteCard.dataset.theme = value;     
    }
  }

  // loads the saved storage task
  tasks = loadTasksFromStorage();
  render();


  // 3) add new task upon submitting or  clicking enter, pushes it to the tasks const, loads next few functions
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = textIn.value.trim();
    if (!text) return;
    const qty = Number(qtyIn.value) || 1;

    tasks.push({ text, qty, done: false });
    saveTasksToStorage();
    form.reset();
    qtyIn.value = 1;
    textIn.focus();
    render();
    

  });

  // 4) render both lists from the array, for each task  checks for change in checkbox and delete, and otherwise adds to li to ul with checkmark, text and del button
function render() {
  todoUl.innerHTML = "";
  doneUl.innerHTML = "";

  tasks.forEach((task, index) => {
    const li  = document.createElement("li");
    const chk = document.createElement("input");
    chk.type = "checkbox";
    chk.checked = task.done;

    const span = document.createElement("span");
    span.textContent = `${task.text} x${task.qty}`;

    const del = document.createElement("button");
    del.textContent = "✕";

    chk.addEventListener("change", () => {
      if (chk.checked) {
        task.done = true;
      } else {
        task.done = false;
      }
      saveTasksToStorage();
      render();
    });

    del.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasksToStorage();
      render();
    });

    li.append(chk, span, del);

    if (task.done === true) {
      doneUl.appendChild(li);
    } else {
      todoUl.appendChild(li);
    }
  });
}

// I think? built in local storage function. The SET part
  function saveTasksToStorage() {
    localStorage.setItem(STORAGE_TASKS_KEY, JSON.stringify(tasks));
  }
// the GET part of the local storage ( Read more up on this) 
  function loadTasksFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_TASKS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.warn("Could not read tasks from localStorage:", err);
      return [];
    }
  }

  render();
});

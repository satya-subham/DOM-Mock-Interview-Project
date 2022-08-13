let body = document.querySelector("body");
let all = document.querySelector(".all");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let black = document.querySelector(".black");
let yellow = document.querySelector(".yellow");
let upperTick = document.querySelector(".upper-tick");
let createTask = document.querySelector(".task-btn");

createTask.addEventListener("click", (event) => {
  // POP-UP DIV
  let popDiv = document.createElement("div");
  popDiv.classList.add("pop-div");

  let closeBtn = document.createElement("button");
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  closeBtn.setAttribute("id", "close-btn");
  popDiv.append(closeBtn);

  closeBtn.addEventListener("click", (event) => {
    popDiv.remove();
  });

  // POP-UP INPUT DIV
  let inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");
  popDiv.append(inputDiv);

  // POP-UP INPUT DIV INPUT FIELD
  let taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.setAttribute("id", "taskInput");
  inputDiv.append(taskInput);

  let doneBtn = document.createElement("button");
  doneBtn.setAttribute("id", "done-btn");
  doneBtn.innerText = "Done";
  inputDiv.append(doneBtn);

  doneBtn.addEventListener("click", (event) => {
    popDiv.remove();
    let pasteDiv = document.createElement("div");
    pasteDiv.classList.add("paste-div");
    body.append(pasteDiv);

    let colorDiv = document.createElement("div");
    colorDiv.classList.add("color-div");
    pasteDiv.append(colorDiv);

    let pasteInput = document.createElement("input");
    pasteInput.type = "text";
    pasteInput.setAttribute("id", "paste-input");
    pasteInput.setAttribute("readonly", "readonly");
    pasteInput.value = taskInput.value;
    pasteDiv.append(pasteInput);

    let pasteButtonDiv = document.createElement("div");
    pasteButtonDiv.classList.add("paste-button-div");
    pasteDiv.append(pasteButtonDiv);

    let downTick = document.createElement("button");
    downTick.innerHTML = '<i class="fa-solid fa-check"></i>';
    downTick.setAttribute("id", "down-tick");
    pasteButtonDiv.append(downTick);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.setAttribute("id", "delete-btn");
    pasteButtonDiv.append(deleteBtn);
    deleteBtn.addEventListener("click", (event) => {
      pasteDiv.remove();
    });

    let editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtn.setAttribute("id", "edit-btn");
    pasteButtonDiv.append(editBtn);
    editBtn.addEventListener('click', (event)=>{
        pasteInput.removeAttribute("readonly");
    });

    let colorBtn = document.createElement("button");
    colorBtn.setAttribute("id", "color-btn");
    pasteButtonDiv.append(colorBtn);

    let lockBtn = document.createElement("button");
    lockBtn.innerHTML = '<i class="fa-solid fa-lock"></i>';
    lockBtn.setAttribute("id", "lock-btn");
    pasteDiv.append(lockBtn);
    lockBtn.addEventListener('click', (event)=>{
        lockBtn.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
        pasteButtonDiv.style.visibility = 'visible';
    });
  });

  // COLOR BUTTON DIV
  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-div");
  popDiv.append(buttonDiv);

  let redBtn = document.createElement("button");
  redBtn.classList.add("red");
  buttonDiv.append(redBtn);

  let blueBtn = document.createElement("button");
  blueBtn.classList.add("blue");
  buttonDiv.append(blueBtn);

  let blackBtn = document.createElement("button");
  blackBtn.classList.add("black");
  buttonDiv.append(blackBtn);

  let yellowBtn = document.createElement("button");
  yellowBtn.classList.add("yellow");
  buttonDiv.append(yellowBtn);

  body.append(popDiv);
});

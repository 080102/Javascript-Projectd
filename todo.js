let todo = document.getElementById("todo");
let button = document.getElementById("button");
let errorMsg = document.getElementById("errorMsg");
let display = document.getElementById("display");

button.addEventListener("click", function () {
  let list;
  if (todo.value == "") {
    todo.style.border = '2px solid red';
    errorMsg.innerHTML = "Add a task";
    setTimeout(() => {
      errorMsg.innerHTML = "";
    }, 3000);
  } else {
    list = document.createElement("li");
    list.innerHTML = todo.value;
    display.appendChild(list);
    todo.value = '';
    console.log(list);
  }
  list.addEventListener('click',function(){
    list.style.textDecoration = 'line-through';
    list.style.color = 'grey';
  })
  list.addEventListener('dblclick',function(){
    list.style.display = 'none';
  })
});


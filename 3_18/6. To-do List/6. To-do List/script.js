const addBtn = document.getElementById("add");

const taskListContainer = document.querySelector(".taskList");
const taskList = document.querySelector(".taskList ul");
const addInput = document.getElementById("input");
const clear = document.querySelector(".clear");

let todos = [];

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let givenValue = addInput.value.trim() ;


    if(!givenValue) return;

    todos.push(givenValue);
    localStorage.setItem("todos", JSON.stringify(todos));

    displayFunction();
addInput.value= ""
});



const displayFunction = ()=>{

taskList.innerHTML = ''
  todos.forEach((todo,index)=>{
    
  let addList = document.createElement("li");
    addList.innerHTML +=  `
    <span>${todo}</span>
    <input type="text" class="edit-input" style="display: none;">
    <div class="btns">
      <button class="btn edit-btn">Edit</button>
      <button class="btn delete-btn">Delete Task</button>
      <button class="btn save-btn" style="display: none;">Save</button>
    </div>
  `;
    
 const deletebtn = addList.querySelector(".delete-btn");
 const editBtn = addList.querySelector(".edit-btn");
 const span = addList.querySelector("span");
const input = addList.querySelector("input");
const save = addList.querySelector(".save-btn")
 deletebtn.addEventListener("click", ()=>{
   deletItem(index);
 })

 editBtn.addEventListener("click", ()=>{
span.style.display = "none";
input.style.display = "inline-block";
input.value = todo
save.style.display ="inline-block";
editBtn.style.display = "none";
input.focus();
 })

 save.addEventListener("click", ()=>{
  const newValue =input.value.trim();
  editTask(index,newValue)
 })

  taskList.append(addList)
  })

  if(todos.length === 0){
    clear.style.display = "none"
  } else{
    clear.style.display ="block"
  }
};


const getFromToDos = ()=>{
    const LocalToDos = JSON.parse(localStorage.getItem("todos"));
    if(!LocalToDos) return;
    todos = LocalToDos;
    displayFunction();
}

getFromToDos();

const deletItem = (index)=>{
  todos.splice(index, 1);
  displayFunction();
  localStorage.setItem("todos", JSON.stringify(todos))
}


const editTask = (index,newValue)=>{
todos[index] = newValue;
displayFunction()
localStorage.setItem("todos", JSON.stringify(todos));


}


clear.addEventListener("click",()=>{
  localStorage.clear();
  todos = [];
  displayFunction();

})




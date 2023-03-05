const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  //toDos array의 내용을 localStorage에 넣는 함수
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();    
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //내가 클릭한 li.id와 다른 toDo는 남겨두는것, li.id는 string이라 number로 바꿔줌
    saveToDos();  //toDos DB에서 toDo를 지운 뒤에 saveToDos를 다시 불러와야한다. 
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;  //toDoInput의 value를 새로운 변수에 복사해놓는 것.
    toDoInput.value = "";  //toDoInput값을 비워줘도 newToDo에는 아무 영향 없다.
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //이걸 써줌으로써 이전에 복사해놨던 parsedToDos들이 없어지지 않고 새 to do를 입력하면 기존 array에 추가된다
    parsedToDos.forEach(paintToDo);  //paintToDo는 텍스트를 받는데, JS는 그 텍스트를 paintToDo에게 전달해준다.
}  //forEach는 array의 각 item에 대해 function을 실행하게 해준다.(item을 받아서 item을 사용하도록 선언)
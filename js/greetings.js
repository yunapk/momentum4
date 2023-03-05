const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {  //submit을 누르면 실행되는 함수:
    event.preventDefault();  //새로고침되는 submit의 기본속성을 멈추고
    loginForm.classList.add(HIDDEN_CLASSNAME);  //입력창은 숨기고
    const username = loginInput.value;  //유저네임 값을 받아서
    localStorage.setItem(USERNAME_KEY, username);  //저장(저장될 값의 이름(key), 값)
    paintGreetings(username); //h1에 유저네임 나타나게하고 h1이 드러나게 한다.
}
//submit event가 발생할 때 JS는 onLoginSubmit함수를 호출하고 있고
//JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어준다.
//이 object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
//이때 event object를 argument로 주고 있고 기본동작이 실행되는걸 막아주고 있다.
//event object는 preventDefault함수를 기본적으로 갖고 있음.

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
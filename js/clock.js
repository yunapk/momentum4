const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `Now it's ${hours}:${minutes}:${seconds}`;
}

getClock();   //시계 즉시 호출헤준 후에 1초마다 갱신
setInterval(getClock, 1000);
  
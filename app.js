let rotateDeg = 0;
let slashesRot = 0;

for (let i = 1; i <= 60; i++) {
  if ((i - 1) % 5 !== 0) {
    let slash = document.createElement("div");
    slash.className = `slash slash${i}`;
    slash.innerText = "|";
    slash.style.transform = `rotate(${rotateDeg}deg)`;
    document.querySelector(".clock").appendChild(slash);
  }
  rotateDeg += 360 / 60;
}

setInterval(setClock, 1000);

let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".min");
let secHand = document.querySelector(".sec");

setClock();

function setClock() {
  let currentData = new Date();
  let secRation = currentData.getSeconds() / 60;
  let minRation = (secRation + currentData.getMinutes()) / 60;
  let hourRation = (minRation + currentData.getHours()) / 12;

  setRotation(secHand, secRation);
  setRotation(minHand, minRation);
  setRotation(hourHand, hourRation);
}

function setRotation(element, rotationRation) {
  element.style.setProperty("--rotation", rotationRation * 360);
}

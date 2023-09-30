const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
const digitValue = document.querySelector(".digit");

setInterval(() => {
  const date = new Date();
  let second = date.getSeconds() / 60;
  let minute = (second + date.getMinutes()) / 60;
  let hour = (minute + date.getHours()) / 12;

  setRotation(secondHand, second);
  setRotation(minuteHand, minute);
  setRotation(hourHand, hour);

  digitValue.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

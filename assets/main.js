const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const dayOutput = document.querySelector("#DD");
const monthOutput = document.querySelector("#MM");
const yearOutput = document.querySelector("#YY");

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const Canvas = document.querySelector('.can');

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let valid = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "#f00";
      parent.querySelector("small").innerText = "This field is required.";
      valid = false;
    } else {
      i.style.borderColor = "#854dff";
      parent.querySelector("small").innerText = "";
    }
  });
  if (monthInput.value > 12) {
    monthInput.style.borderColor = "#f00";
    monthInput.querySelector("small").innerText =
      "Must be valid for this month.";
    valid = false;
  }
  if (dayInput.value > months[month - 1]) {
    dayInput.style.borderColor = "#f00";
    dayInput.querySelector("small").innerText = "Must be valid for this day.";
    valid = false;
  }
  return valid;
}

function handleSubmit(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("input");
  if (validate()) {
    if (dayInput.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInput.value > month) {
      month = month + 12;
      year = year - 1;
    }
    const d = day - dayInput.value;
    const m = month - monthInput.value;
    const y = year - yearInput.value;

    dayOutput.innerHTML = d;
    monthOutput.innerHTML = m;
    yearOutput.innerHTML = y;

      // confetti code
      Canvas.style.display = 'block';
      setTimeout(function () {
          Canvas.style.display = 'none';
      }, 8000);
  
      // clear inputs
      inputs.forEach((input) => (input.value = ""));
    }
}

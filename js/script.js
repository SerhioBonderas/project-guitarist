"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu"),
    menuItem = document.querySelectorAll(".nav-menu__list-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav-menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav-menu_active");
    });
  });
});

const modalWindow = document.querySelector(".modal");
const overlay = document.querySelector(".modal__overlay");
const modalClose = document.querySelector(".modal__close");
const inputName = document.querySelector(".input-name");
const inputNumber = document.querySelector(".input-num");
const modalButton = document.querySelector(".modal__btn");
const registration = document.querySelector(".list-item-registration");
const buttons = document.querySelectorAll(".buttons__main-btn");

let users = [];

function addNewUser(name, phoneNum) {
  const newUser = { name, phoneNum };
  users.push(newUser);
  console.log(users);
}

registration.addEventListener("click", function (event) {
  event.preventDefault();
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modalWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

modalClose.addEventListener("click", function () {
  modalWindow.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", function () {
  modalWindow.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
  }
  if (event.key === "Enter" && inputName.value && inputNumber.value) {
    addNewUser(inputName.value, inputNumber.value);
    inputName.value = inputNumber.value = "";
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

modalButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (inputName.value && inputNumber.value) {
    addNewUser(inputName.value, inputNumber.value);
    inputName.value = inputNumber.value = "";
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

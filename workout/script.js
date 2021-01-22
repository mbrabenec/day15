// declerations

const lock = document.querySelector(".wrapper__lock");
const message = document.querySelector(".message");

// event isteners

lock.addEventListener("mouseenter", () => message.classList.add("revealed"));
lock.addEventListener("mouseleave", () => message.classList.remove("revealed"));

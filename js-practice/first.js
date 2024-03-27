const div = document.querySelector("#parent");

div.style.backgroundColor = "blue";

const child1 = div.firstElementChild;

child1.style.color = "white";

const create = document.createElement("div");

div.appendChild(create);

const last = div.lastChild;

last.classList.add("new");

last.setAttribute("style", "background-color: red; border: white dashed 2px; color: white;");

last.textContent = "hello world!"

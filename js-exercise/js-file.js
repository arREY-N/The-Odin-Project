const body = document.querySelector("body");

const text = document.createElement("p");

text.textContent = "Hey I'm red!";

text.setAttribute("style", "color: red;")

body.appendChild(text);

const h3 = document.createElement("h3");

h3.textContent = "I'm blue h3!";

h3.style.color = "blue";

body.appendChild(h3);

const div = document.createElement("div");

body.appendChild(div);

div.setAttribute("style", "background-color: pink; border: 1px solid black;");

const h1 = document.createElement("h1");

h1.textContent = "I'm in a div";

div.appendChild(h1);

const p = document.createElement("p");

p.textContent = "ME TOO!";

div.appendChild(p);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World! 2nd ver");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => alert("Hello World! 3rd ver"));
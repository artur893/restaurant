import './style.css';

const content = document.querySelector("#content")

//HEADER
const header = document.createElement("header")
const h1 = document.createElement("h1")
const nav = document.createElement("nav")
const ul = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")

h1.textContent = "PIZZERIA"
li1.textContent = "Home"
li2.textContent = "Menu"
li3.textContent = "Contact"

content.appendChild(header)
header.appendChild(h1)
header.appendChild(nav)
nav.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

//MAIN DIV
const mainDiv = document.createElement("div")
const p1 = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")

mainDiv.classList.add("main")

p1.textContent = "Best pizza in your city!"
p2.textContent = "Made with passion since 2000."
p3.textContent = "Order online or visit us."

content.appendChild(mainDiv)
mainDiv.appendChild(p1)
mainDiv.appendChild(p2)
mainDiv.appendChild(p3)
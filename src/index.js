import './style.css';
import home from './home.js'
import menu from './menu.js'
import contact from './contact.js';

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

home()
li1.classList.add("active")

li1.addEventListener("click", function () {
  li1.classList.add("active")
  li2.classList.remove("active")
  li3.classList.remove("active")
  const mainDiv = document.querySelector(".main")
  mainDiv.remove()
  home()
})

li2.addEventListener("click", function () {
  li2.classList.add("active")
  li1.classList.remove("active")
  li3.classList.remove("active")
  const mainDiv = document.querySelector(".main")
  mainDiv.remove()
  menu()
})

li3.addEventListener("click", function () {
  li3.classList.add("active")
  li2.classList.remove("active")
  li1.classList.remove("active")
  const mainDiv = document.querySelector(".main")
  mainDiv.remove()
  contact()
})



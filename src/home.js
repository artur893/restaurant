import Chef from './chef.jpg';

//MAIN DIV
function home() {
    const mainDiv = document.createElement("div")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")

    const ChefImg = new Image();
    ChefImg.classList.add("chef")
    ChefImg.src = Chef;

    mainDiv.classList.add("main")

    p1.textContent = "Best pizza in your city!"
    p2.textContent = "Made with passion since 2000."
    p3.textContent = "Order online or visit us."

    content.appendChild(mainDiv)
    mainDiv.appendChild(p1)
    mainDiv.appendChild(p2)
    mainDiv.appendChild(ChefImg)
    mainDiv.appendChild(p3)
}


export default home
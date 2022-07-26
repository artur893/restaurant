import pizza1 from './pizza1.png';
import pizza2 from './pizza2.png';
import pizza3 from './pizza3.png';
import pizza4 from './pizza4.png';
import pizza5 from './pizza5.png';
import pizza6 from './pizza6.png';

//MENU
function menu() {
    const mainDiv = document.createElement("div")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")
    const div5 = document.createElement("div")
    const div6 = document.createElement("div")

    const p1Title = document.createElement("p")
    const p1List = document.createElement("p")
    const p2Title = document.createElement("p")
    const p2List = document.createElement("p")
    const p3Title = document.createElement("p")
    const p3List = document.createElement("p")
    const p4Title = document.createElement("p")
    const p4List = document.createElement("p")
    const p5Title = document.createElement("p")
    const p5List = document.createElement("p")
    const p6Title = document.createElement("p")
    const p6List = document.createElement("p")

    p1Title.textContent = "MARGHERITA"
    p1List.textContent = "Tomato sauce, Mozarella, Tomato, Basil"

    mainDiv.classList.add("main")

    div1.classList.add("pizzaCard")
    div2.classList.add("pizzaCard")
    div3.classList.add("pizzaCard")
    div4.classList.add("pizzaCard")
    div5.classList.add("pizzaCard")
    div6.classList.add("pizzaCard")

    const pizza1Img = new Image();
    pizza1Img.src = pizza1;
    pizza1Img.classList.add("pizzaImg")

    content.appendChild(mainDiv)
    mainDiv.appendChild(div1)
    mainDiv.appendChild(div2)
    mainDiv.appendChild(div3)
    mainDiv.appendChild(div4)
    mainDiv.appendChild(div5)
    mainDiv.appendChild(div6)

    div1.appendChild(pizza1Img)
    div1.appendChild(p1Title)
    div1.appendChild(p1List)

}

export default menu
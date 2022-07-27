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

    //CREATING PARAGRAPHS
    const p1Title = document.createElement("p")
    const p1List = document.createElement("p")
    const p1Order = document.createElement("p")
    const p2Title = document.createElement("p")
    const p2List = document.createElement("p")
    const p2Order = document.createElement("p")
    const p3Title = document.createElement("p")
    const p3List = document.createElement("p")
    const p3Order = document.createElement("p")
    const p4Title = document.createElement("p")
    const p4List = document.createElement("p")
    const p4Order = document.createElement("p")
    const p5Title = document.createElement("p")
    const p5List = document.createElement("p")
    const p5Order = document.createElement("p")
    const p6Title = document.createElement("p")
    const p6List = document.createElement("p")
    const p6Order = document.createElement("p")

    //ADDING CLASSES
    mainDiv.classList.add("main")
    div1.classList.add("pizzaCard")
    div2.classList.add("pizzaCard")
    div3.classList.add("pizzaCard")
    div4.classList.add("pizzaCard")
    div5.classList.add("pizzaCard")
    div6.classList.add("pizzaCard")

    p1Title.classList.add("pizzaTitle")
    p2Title.classList.add("pizzaTitle")
    p3Title.classList.add("pizzaTitle")
    p4Title.classList.add("pizzaTitle")
    p5Title.classList.add("pizzaTitle")
    p6Title.classList.add("pizzaTitle")

    p1Order.classList.add("pizzaOrder")
    p2Order.classList.add("pizzaOrder")
    p3Order.classList.add("pizzaOrder")
    p4Order.classList.add("pizzaOrder")
    p5Order.classList.add("pizzaOrder")
    p6Order.classList.add("pizzaOrder")

    //PAPAGRAPH CONTENT
    p1Title.textContent = "MARGHERITA"
    p1List.textContent = "Tomato sauce, Mozarella, Tomato, Basil"
    p1Order.textContent = "ORDER NOW!"

    p2Title.textContent = "FUNGHI"
    p2List.textContent = "Tomato sauce, Mozarella, Tomato, Mushroom, Olives"
    p2Order.textContent = "ORDER NOW!"

    p3Title.textContent = "DIAVOLA"
    p3List.textContent = "Tomato sauce, Mozarella, Spianata piccante"
    p3Order.textContent = "ORDER NOW!"

    p4Title.textContent = "HAWAII"
    p4List.textContent = "Tomato sauce, Mozarella, Ham, Pineapple"
    p4Order.textContent = "ORDER NOW!"

    p5Title.textContent = "DEPTHS OF SEA"
    p5List.textContent = "Tomato sauce, Mozarella, Tomato, Shrimp, Olives, Onion, Basil"
    p5Order.textContent = "ORDER NOW!"

    p6Title.textContent = "THE RICH ONE!"
    p6List.textContent = "Tomato sauce, Mozarella, Tomato, Olives, Onion, Pepper, Broccoli, Basil"
    p6Order.textContent = "ORDER NOW!"


    //IMAGES LOADING
    const pizza1Img = new Image();
    pizza1Img.src = pizza1;
    pizza1Img.classList.add("pizzaImg")

    const pizza2Img = new Image();
    pizza2Img.src = pizza2;
    pizza2Img.classList.add("pizzaImg")

    const pizza3Img = new Image();
    pizza3Img.src = pizza3;
    pizza3Img.classList.add("pizzaImg")

    const pizza4Img = new Image();
    pizza4Img.src = pizza4;
    pizza4Img.classList.add("pizzaImg")

    const pizza5Img = new Image();
    pizza5Img.src = pizza5;
    pizza5Img.classList.add("pizzaImg")

    const pizza6Img = new Image();
    pizza6Img.src = pizza6;
    pizza6Img.classList.add("pizzaImg")

    //ADDING TO DOM
    content.appendChild(mainDiv)
    mainDiv.appendChild(div1)
    mainDiv.appendChild(div2)
    mainDiv.appendChild(div3)
    mainDiv.appendChild(div4)
    mainDiv.appendChild(div5)
    mainDiv.appendChild(div6)

    div6.appendChild(pizza6Img)
    div6.appendChild(p6Title)
    div6.appendChild(p6List)
    div6.appendChild(p6Order)

    div5.appendChild(pizza5Img)
    div5.appendChild(p5Title)
    div5.appendChild(p5List)
    div5.appendChild(p5Order)

    div4.appendChild(pizza4Img)
    div4.appendChild(p4Title)
    div4.appendChild(p4List)
    div4.appendChild(p4Order)

    div3.appendChild(pizza3Img)
    div3.appendChild(p3Title)
    div3.appendChild(p3List)
    div3.appendChild(p3Order)

    div2.appendChild(pizza2Img)
    div2.appendChild(p2Title)
    div2.appendChild(p2List)
    div2.appendChild(p2Order)

    div1.appendChild(pizza1Img)
    div1.appendChild(p1Title)
    div1.appendChild(p1List)
    div1.appendChild(p1Order)

    div1.addEventListener("mouseover", function(){
        p1Order.setAttribute("id", "flashed")
    })
    div1.addEventListener("mouseout", function(){
        p1Order.setAttribute("id", "")
    })

    div2.addEventListener("mouseover", function(){
        p2Order.setAttribute("id", "flashed")
    })
    div2.addEventListener("mouseout", function(){
        p2Order.setAttribute("id", "")
    })

    div3.addEventListener("mouseover", function(){
        p3Order.setAttribute("id", "flashed")
    })
    div3.addEventListener("mouseout", function(){
        p3Order.setAttribute("id", "")
    })

    div4.addEventListener("mouseover", function(){
        p4Order.setAttribute("id", "flashed")
    })
    div4.addEventListener("mouseout", function(){
        p4Order.setAttribute("id", "")
    })

    div5.addEventListener("mouseover", function(){
        p5Order.setAttribute("id", "flashed")
    })
    div5.addEventListener("mouseout", function(){
        p5Order.setAttribute("id", "")
    })

    div6.addEventListener("mouseover", function(){
        p6Order.setAttribute("id", "flashed")
    })
    div6.addEventListener("mouseout", function(){
        p6Order.setAttribute("id", "")
    })

}



export default menu
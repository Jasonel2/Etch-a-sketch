const container = document.querySelector(".container");


for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList = "item";
    div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "red";
        console.log(event.target);
    })
    div.id = `item${i+1}`
    container.appendChild(div)
}


const btn = document.querySelector("button")

btn.addEventListener('click', () => {
    let numSquares = prompt("Number of squares per side: ");
    while (numSquares > 100) {
        numSquares = prompt("Number of squares per side (<= 100): ")
    }
    /* delete prev grid */
    let containerLen = container.childElementCount
    for (let i = 0; i < containerLen; i++) {
        const element = document.querySelector(".item");
        element.remove()
        console.log(i)
    }
    /*create new grid*/ 
    for (let i = 0; i < parseInt(numSquares)**2; i++) {
        let div = document.createElement("div");
        let size = 640/parseInt(numSquares)/2
        console.log("size" + size)
        div.classList = "item";
        div.style.padding = `${size}px`;
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "red";
            console.log(event.target);
        })
        div.id = `item${i+1}`
        container.appendChild(div)
    }

})



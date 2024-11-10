const grid = document.querySelector("#grid");

for(let i = 0; i < 16*16; i++)
{
    let element = document.createElement("div");
    element.classList.add("square");
    grid.appendChild(element);
}
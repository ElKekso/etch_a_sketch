const grid = document.querySelector("#grid");

function dragStart(e) {
    e.preventDefault()
}

function createGrid(size)
{
    for(let i = 0; i < size*size; i++)
    {
        let element = document.createElement("div");
        //element.id = "sq" + i;
        element.classList.add("square");
        grid.appendChild(element);
    }
}

createGrid(16);

function getRandom256()
{
    return Math.floor(Math.random() * 256);
}

function colorTarget(e)
{
    const target = e.target;
    let red = getRandom256();
    let green = getRandom256();
    let blue = getRandom256();

    const cStyle = getComputedStyle(target);
    let opacity = Number(cStyle.getPropertyValue("opacity"));
    console.log(opacity);

    if(opacity > 0)
        opacity -= 0.1;
    
    target.setAttribute("style", `background-color:rgb(${red}, ${green}, ${blue}); opacity: ${opacity}`);
}

grid.addEventListener("mousedown", function () 
{
    grid.addEventListener("mouseover", colorTarget);
    
    grid.addEventListener("mouseup", function () 
    {
        grid.removeEventListener("mouseover", colorTarget);
    },
    {once : true}
    );
});

const btn_reset = document.querySelector("#reset");

btn_reset.addEventListener("click", function ()
{
    let size = 0;
    while(true)
    {
        size = prompt("Enter the size for the column and rows:");
        if((typeof Number(size) === 'number') && size <= 100 && size > 0)
            break;
    }
    grid.replaceChildren();
    let grid_size = size * 10; 
    grid.setAttribute("style", "height:" + grid_size + "px;width:" + grid_size + "px;");
    createGrid(size);
});
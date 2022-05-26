let ask = document.querySelector('#ask');





function newSketch(newGrid){

    let container = document.getElementById("container");
container.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;
container.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`;




    for(let rows = 0; rows < newGrid; rows++){
    for(let columns = 0; columns < newGrid; columns++){
    //let colour = document.createElement("colour");
    //$("#grid").append("<div class='box'></div>")
    let cell = document.createElement("grid");
    container.appendChild(cell);
    //colour.appendChild(cell)
       
    function paint(){
        cell.style.background = "RGB 255 255 255"
       }
      
       cell.addEventListener('mousemove', paint);

     
console.log(cell)
    }
}
     
}


    console.log(newSketch(16))


    function clearSketch(){
        let squares = container.querySelectorAll('grid');
        squares.forEach((grid) => grid.remove());}
          
         
         function refreshSketch(){
          let z = prompt("How many squares per side?"); if(z > 100){return;}
          clearSketch();
        newSketch(z);
         }
         ask.addEventListener('click', refreshSketch);
   

  
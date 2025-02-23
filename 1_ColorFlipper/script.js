const button = document.querySelector("button");

function changeColor(){
    
    let red = Math.floor(Math.random() *256);
    let green = Math.floor(Math.random() *256);
    let blue = Math.floor(Math.random() *256);

    const color = "rgb(" + red + "," + green + "," + blue +")"; 
    document.getElementById('colorFlipper').style.backgroundColor = color;
}

// button.addEventListener("click", ()=>{
//     changeColor();
// })
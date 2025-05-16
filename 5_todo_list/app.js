let btn = document.querySelector("button")
let inp = document.querySelector("input")
let ul = document.querySelector("ul")

btn.addEventListener("click", function(){

    let text = inp.value.trim();
    if(text === "") return;

    
    let item = document.createElement("li");
    // if(item.innerText = ""){}
    item.innerText = inp.value;
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";

    //adding delete button

    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    
    //deleting

    let delbtns = document.querySelectorAll(".delete");
    for(delbtn of delbtns){
        delbtn.addEventListener("click", function(){
            let par = this.parentElement;
            par.remove();
            console.log("deleted");
        })
    }
    
    

});

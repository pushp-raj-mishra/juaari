
let grid = document.querySelector(".grid");
let size = 10;
let bomb = [];
for(let i = 0; i < size*size; i++){
    bomb.push(0);
}


let bombNumber = ((size*size*25)/100);

for(let i = 0; i < bombNumber; i++){
    let x = Math.ceil(Math.random()*100)+1;
    while (bomb[x]!=0) {
        x = Math.ceil(Math.random()*100)+1;
    }
    bomb[x] = 1;
}

let bmb = 0;
let mul = 0;


function explode(event){
    let clickedButton = event.currentTarget;
    clickedButton.style.backgroundColor = "red";
    bmb++;
    console.log(bmb);
    console.log(mul);
}
function multiply(event){
    let clickedButton = event.currentTarget;
    clickedButton.style.backgroundColor = "lime";
    mul++;
    console.log(bmb);
    console.log(mul);
}

let ptr = 0;
for(let i = 0; i < size; i++){
    let bigDabba = document.createElement("div");
    bigDabba.setAttribute("class","bigDabba");
    for(let j =0; j<size;j++){
        let dabba = document.createElement("button");
        dabba.textContent = "Click";
        if (bomb[ptr]==1) {
            dabba.addEventListener("click",explode,{once:true});
        } else {
            dabba.addEventListener("click",multiply,{once:true});
        }
        dabba.setAttribute("class","playButton");
        
        bigDabba.appendChild(dabba);
        
        ptr++;
    }
    grid.appendChild(bigDabba);
}
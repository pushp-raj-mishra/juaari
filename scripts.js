
let grid = document.querySelector(".grid");
let size = 5;
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


let ptr = 0;
for(let i = 0; i < size; i++){
    for(let j =0; j<size;j++){
        let dabba = document.createElement("button");
        if (bomb[ptr]==1) {
            dabba.addEventListener("click",explode());
        } else {
            dabba.addEventListener("click",multiply());
        }
        grid.appendChild(dabba);
        ptr++;
    }
}

let startButton = document.querySelector("#startButton");
startButton.addEventListener("click",playGame,{once:true});

let avlMoney = 100;
let paisaValue = 0;

function reloadPage(){
    location.reload();
}

function explode(event){
    let clickedButton = event.currentTarget;
    clickedButton.style.backgroundColor = "red";
    paisaValue *= 0;
    alert("Haar Gye!!");
    reloadPage();
}
let multiplier = 1;
function setMultiplier(){
    let small = document.querySelector("#small");
    let medium = document.querySelector("#medium");
    let large = document.querySelector("#large");
}



function multiply(event){
    let clickedButton = event.currentTarget;
    clickedButton.style.backgroundColor = "lime";
    paisaValue *= multiplier;
    console.log(paisaValue);
}


function initWallet(){
    let wallet = document.querySelector("#balance");
    wallet.textContent = "Balance: " + avlMoney;
}
initWallet();


function playGame(){
    console.log("chal rha hai");
    
    paisaValue = document.querySelector("#paisa").value;
    if (paisaValue<=avlMoney) {
        avlMoney -= paisaValue;
    } else {
        alert("Aukat se jyada badh gye!!");
        reloadPage();
        return;
    }
    initWallet();

    
    let sizeValue = document.querySelector("#size").value;
    let grid = document.querySelector(".grid");
    let size = parseInt(sizeValue);
    if (size>20) {
        alert("Larger size sets website unresponsive");
        reloadPage();
        return;
    }
    
    let money = parseInt(paisaValue);
    console.log(size);
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
}








































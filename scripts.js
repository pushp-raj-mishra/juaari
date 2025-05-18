
let startButton = document.querySelector("#startButton");
startButton.addEventListener("click",playGame,{once:true});

let avlMoney = 100;
let paisaValue = 0;
let multiplier = 1;

function reloadPage(){
    location.reload();
}

function saveBalance(amount) {
  localStorage.setItem("balance", amount.toString());
}
function loadBalance() {
  const stored = localStorage.getItem("balance");
  return stored === null ? 100 : parseFloat(stored);
}


avlMoney = loadBalance();
initWallet();




function explode(event){
    let clickedButton = event.currentTarget;
    clickedButton.style.backgroundColor = "red";
    paisaValue *= 0;
    alert("Haar Gye!!");
    console.log(paisaValue);
    document.querySelectorAll(".playButton").forEach(btn => {
        btn.disabled = true;
    });

}


let multiplierValue = document.querySelector(".multiplierValue");


    let small = document.querySelector("#small");
    let medium = document.querySelector("#medium");
    let large = document.querySelector("#large");

    small.addEventListener("click", () => {
        multiplier = 1.25;
        multiplierValue.textContent = "Multiplier: " + multiplier;
    });

    medium.addEventListener("click", () => {
        multiplier = 1.5;
        multiplierValue.textContent = "Multiplier: " + multiplier;
    });

    large.addEventListener("click", () => {
        multiplier = 1.75;
        multiplierValue.textContent = "Multiplier: " + multiplier;
    });



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
    small.disabled = true;
    medium.disabled = true;
    large.disabled = true;
    startButton.disabled = true;


    paisaValue = document.querySelector("#paisa").value;
    if (paisaValue<=avlMoney) {
        avlMoney -= paisaValue;
        saveBalance(avlMoney);
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

function withdrawMoney(){
    avlMoney += paisaValue;
    initWallet();
    saveBalance(avlMoney);
    document.querySelectorAll(".playButton").forEach(btn => {
        btn.disabled = true;
    });
    small.disabled = true;
    medium.disabled = true;
    large.disabled = true;
    startButton.disabled = true;
}


let withdraw = document.querySelector("#withdraw");
let restart = document.querySelector("#restart");

withdraw.addEventListener("click",withdrawMoney,{once:true});
restart.addEventListener("click",reloadPage);
































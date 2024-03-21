let boxe=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let mesContainer=document.querySelector(".mes-contaier");
let msg=document.querySelector("#msg");

let turnO=true;

 const winpattren=[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],
];
 const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    mesContainer.classList.add("hide");

    mesContainer.style.Color="red";
    // disabledBoxes();
 };

boxe.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText="0";
            turnO=false;
            box.style.Color="red";
            box.style.backgroundColor="#4f7bf1";
            
        }else{
            box.innerText="x";
            turnO=true;
            box.style.backgroundColor="purple";
            // box.style.Color="green";

        }
        box.disabled=true;
        checkwinner();  
    });
});
const disabledBoxes=()=>{
    for(let box of boxe){
        box.disabled=true;
        box.style.backgroundColor="yellow";
        box.style.Color="green";
    }
};
const enabledBoxes=()=>{
    for(let box of boxe){
        box.disabled=false;
        box.innerText=" "; 
        box.style.backgroundColor="green";
    }
};

const ShowWinner=(winner)=>{
    msg.innerText=`congratulation ,winner is ${winner}`;
    mesContainer.classList.remove("hide");
    disabledBoxes();

};

const checkwinner = () => {
    for( let pattern of winpattren){
          let pos1val=  boxe[pattern[0]].innerText;
          let pos2val=  boxe[pattern[1]].innerText;
          let pos3val=  boxe[pattern[2]].innerText;
          if(pos1val!=""&& pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                // console.log("winner ",pos1val);
                disabledBoxes();
                ShowWinner(pos1val);
            }

          }
    }
};
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
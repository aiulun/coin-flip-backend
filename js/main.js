// document.querySelector('#clickMe').addEventListener('click', makeReq)

// async function makeReq(){

//   const userName = document.querySelector("#userName").value;
//   const res = await fetch(`/api?student=${userName}`)
//   const data = await res.json()

//   console.log(data);
//   document.querySelector("#personName").textContent = data.name
//   document.querySelector("#personStatus").textContent = data.status
//   document.querySelector("#personOccupation").textContent = data.currentOccupation
//   document.querySelector("#coinFlip").textContent = data.flip
// }

let coin = document.querySelector(".coin");
let flipButton = document.querySelector("#flipBtn")

flipBtn.addEventListener("click", flipCoin) // RUNS COIN FLIP ANIMATION ON CLICK

async function flipCoin() {
    const res = await fetch('/draw')
    const data = await res//.json() -> RESPONSE NOT JSON - so no need for .json()
    console.log(data.flipResult)

    // SPECIFYING ANIMATION TYPE (HEADS OR TAILS) BASED ON SERVER-SIDE DATA
    let i = data.flipResult
    coin.style.animation = "none";

    if(i === 'heads'){
        setTimeout(function(){
            coin.style.animation = "spin-heads 2s forwards";
        }, 50);
    } else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 2s forwards";
        }, 50);
    }
    disableButton();
}

 // STOPS USER FROM REQUESTING ANOTHER FLIP UNTIL CURRENT ONE DONE
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },2000);
}
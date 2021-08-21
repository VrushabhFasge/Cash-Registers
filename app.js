var billAmt = document.querySelector("#billAmt");
var cashGiven = document.querySelector("#cashGiven");
var submitBtn = document.querySelector(".submitBtn");
var remAmt;
var notes = [2000,500,200,100,50,1];
const changeReturnDiv = document.querySelector(".changeReturn");
const noOfNotes= document.querySelectorAll(".noOfNotes");

function remainingAmt(){
    changeReturnDiv.style.display = "block";
    if(cashGiven.value > billAmt.value){
       remAmt=cashGiven.value - billAmt.value;
       console.log(remAmt);
       calculateNotes(billAmt,cashGiven)
        
    }
    else if( cashGiven.value < billAmt.value){
        alert("Bill amount is greater than cash given. Please give the required extra cash")
    }

    return remAmt;
    
}

function calculateNotes(billAmt,cashGiven){
    let returnAmt = cashGiven.value-billAmt.value;
    
    if(returnAmt<1){
        alert("No amount to be returned");
        return;
    }
 

    for(let i=0; i<notes.length; i++){
        returnAmt= arrayNum(returnAmt, notes[i], i);
    }
    
}

function arrayNum(remainder, noteAmt, index){

    if(remainder >= noteAmt){
        let notes = Math.floor(remainder/noteAmt);
        remainder = remainder - notes*noteAmt;
        noOfNotes[index].innerText = `${notes}`;
        console.log(noteAmt + ":" +notes)
    }
    return remainder
}



submitBtn.addEventListener("click", remainingAmt)
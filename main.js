const form = document.querySelector("form");
const nextPage = document.querySelector("button");

const mainContainer = document.querySelector(".main-container")
const resultContainer = document.querySelector(".result-container")

let rateElement;
let rateValue;

form.addEventListener("click",function(){
    rateElement = document.querySelector("input:checked");
    rateValue = rateElement.value;
})

nextPage.addEventListener("click", ()=>{
    if (rateValue > 0 && rateValue <=5){
        resultContainer.setAttribute("class","result-container display-yes")
        const msgValue = document.querySelector(".result-container .msg span");
        console.log(msgValue);
        msgValue.textContent = rateValue;
        mainContainer.setAttribute("class","main-container display-none")
    }
    
})
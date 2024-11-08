const downArrows = document.querySelectorAll(".down__arrow");//iterates a node list
const main = document.querySelector("main");



let faqContainer = document.querySelectorAll(".answer__wrapper");  
// faqContainer = faqContainer + `id = "one"`;
// faqContainer.id = 0;
let counter_arrow = 1;
//dynamically added ids
for (down of downArrows){
    down.id = `downArrow-${counter_arrow}`;
    counter_arrow++;
}
let counter_container = 1;
for (let answer of faqContainer){
    answer.id = `answer-${counter_container}`;
    counter_container++;
}
let firstAnswer = document.getElementById("answer-1");
let secondAnswer = document.getElementById("answer-2");
let thirdAnswer = document.getElementById("answer-3");
let fourthAnswer = document.getElementById("answer-4");
let fifthAnswer = document.getElementById("answer-5");


console.log(faqContainer);
let buttonClick = 0;
downArrows.forEach(downArrow => {//allows us to iterate to the node list
    downArrow.addEventListener("click",function(event){ //operates on a single element, so we need a loop
       faqContainer.forEach(function(myAnswer){
          myAnswer.classList.add("hidden");
       });
       let touchedArrow = event.target;
    if (touchedArrow.id == "downArrow-1"){
            firstAnswer.classList.remove("hidden");
       }
    else if (touchedArrow.id == "downArrow-2"){
            secondAnswer.classList.remove("hidden");
       }
    else if (touchedArrow.id == "downArrow-3"){
        thirdAnswer.classList.remove("hidden");
        }
    else if (touchedArrow.id == "downArrow-4"){
              fourthAnswer.classList.remove("hidden");
    }
    else if (touchedArrow.id == "downArrow-5"){
            fifthAnswer.classList.remove("hidden");
            
   }
        
       
  
       
    });
    
});

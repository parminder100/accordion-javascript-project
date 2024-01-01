const accordionContainer = document.querySelectorAll(".accordion-container");
const accordionQuestionTextContainer = document.querySelectorAll(".accordion-question-text-container");
const minusIcon = document.querySelectorAll(".minus-icon");
const plusIcon = document.querySelectorAll(".plus-icon");

accordionContainer.forEach((accordion)=>{
    accordion.addEventListener('click', function(e){
        accordionContainer.forEach((otherAccordion)=>{
            otherAccordion.querySelector(".accordion-question-text-container").classList.remove('open')
            otherAccordion.querySelector(".accordion-question-text-container").classList.add("hide");   
            otherAccordion.querySelector(".minus-icon").classList.add("hide");
            otherAccordion.querySelector(".plus-icon").classList.remove("plus-icon-hide");
            otherAccordion.querySelector(".plus-icon").classList.remove('hide');
        })
        if(e.target.closest(".accordion-wrapper")){
            accordion.querySelector('.accordion-question-text-container').classList.toggle('open');
            accordion.querySelector(".accordion-question-text-container").classList.toggle("hide");
            accordion.querySelector(".minus-icon").classList.toggle("hide");
            accordion.querySelector(".plus-icon").classList.toggle("plus-icon-hide");
        }
    })
})
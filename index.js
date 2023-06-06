let inputEl = document.getElementById("input-el");
let successEl = document.getElementById("success-el");
let buttonEl = document.getElementById("button-el");
let mainEl = document.getElementById("main-el");
let dismissBtn = document.getElementById("dismiss-btn");
let emailEl = document.getElementById("email-el");
let errorEl = document.getElementById("error-el");
function btnClick (){
    if(inputEl.value.includes('@')){
        mainEl.style.display = "none";
        successEl.style.display = "unset";
   
    }
    else {
        mainEl.style.display = "flex";
        emailEl.style.color = "red";
        inputEl.style.color = "red";
        inputEl.style.background = "pink";
        errorEl.style.display = "unset";

    }
} 
    buttonEl.addEventListener('click', btnClick);
    
 function dismiss(){
    mainEl.style.display = "flex";
    successEl.style.display = "none";
 }

 dismissBtn.addEventListener('click',dismiss)



    
    

    

// console.log(successEl.style)
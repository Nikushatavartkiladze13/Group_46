
let myNumber = 8
let userNumber = Number(prompt("enter your number"))

let button = document.getElementById("button")

button.addEventListener("click", function(){
    if(userNumber === myNumber){
        alert("შენ გამოიცანი ჩემი რიცხვი")

    }else{
        alert("შენ ვერ გამოიცანი ჩემი რიცხვი")
    }
})
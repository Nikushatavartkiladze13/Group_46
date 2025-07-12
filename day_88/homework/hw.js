//  შექმენით სარეგისტრაციო ფორმა 3 ინფუთით ემაილი, პაროლი და submit ინფუთები submit ინფუთზე დაადეთ მოვლენის მსმენელი რომელიც კლიკის დროს კონსოლში გამოიტანს ემაილს და პაროლს


let button = document.getElementById("submit-button")
let password = document.getElementById("password")
let email = document.getElementById("email")
button.addEventListener("click", function(event){
    event.preventDefault()
    console.log(email.value, password.value)
})
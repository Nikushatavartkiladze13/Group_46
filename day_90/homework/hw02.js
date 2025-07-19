
let submitButton = document.getElementById("submit-button")
let inputName = document.getElementById("Name")
let email = document.getElementById("email")
let password = document.getElementById("password")
const form = document.getElementById("myform")

form.addEventListener("submit", function(event){
    event.preventDefault()

    console.log("შენ წარმატებით გაირე რეგისტრაცია !")
    console.log("Name: " + inputName.value)
    console.log("Password: " + password.value)
    console.log("Email: " +email.value)


})


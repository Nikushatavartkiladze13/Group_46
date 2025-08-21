let button = document.getElementById("login")
let email = document.getElementById("email")
let password = document.getElementById("password")


button.addEventListener("click", function(event){
    event.preventDefault()
    console.log(email.value)
    console.log(password.value)
})
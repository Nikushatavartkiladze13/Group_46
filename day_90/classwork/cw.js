// 1) JS'ში შექმენით ცვლადი სადაც შეინახავთ თქვენს სახელს ასევე HTML'ში შექმენით ერთი ღილაკი ღილაკზე დაადეთ მოვლენის მსმენელი და დაკლიკების დროს კონსოლში გამოიტანეთ Hello {name}!



let userName = prompt("enter your name:")
let h1 = document.getElementById("h1")
let button = document.getElementById("button")

button.addEventListener("click", function(){
    h1.innerHTML = `Hello ${userName}!`
})
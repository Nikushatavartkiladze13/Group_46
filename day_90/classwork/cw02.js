//  HTML' ში შექმენით ერთი ღილაკი JS 'ში კი ერთი გლობალური ცვლადი num რომელსაც გაუტოლებთ თავიდან ნულს, შემდეგ კი JS 'ში აიდის მეშვეობით წამოიღეთ ღილაკი ამ ღილაკზე კი დაადეთ მოვლენის მსმენელი და ყოველი დაკლიკების დროს ცვლადის მნიშვნელობას დაუმატეთ 2 და გამოიტანეთ კონსოლში




let h1 = document.getElementsByTagName("h1")
let sum = 0
function increase(){
    sum+= 2
    h1[0].innerHTML = sum
    h1[0].style.color = "green"

}


function subtraction(){
    sum--
    h1[0].innerHTML = sum
    h1[0].style.color = "red"
}

function reset(){
    sum = 0
    h1[0].innerHTML = sum
    h1[0].style.color = "black"

}
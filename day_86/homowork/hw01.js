// )შექმენით 2 სია, შემდეგ პირველ სიაში ჩაამატეთ 10 ელემენტი,შემდეგ პირველი სიიდან მეორე სიაში ჩამატეთ ყველა ელემნტი ფორ ლუპით
// გამოიყენთ of


let arr = []
let userArr = []


for(let i = 1; i <= 10; i++){
    arr.push(i)
}


for(let i of arr){
    userArr.push(i)
}


console.log(arr)
console.log(userArr)

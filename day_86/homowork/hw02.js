// 3)სტრინგს გადაუარეთ ფორ ლუპით და შეამოწმე არის თუარა ის ხმოვანი, თუ არის გამოიტანეთ თუარა არ გამოიტანოთ
// გამოიენეთ of


let userName = prompt("enter your name: ")


for(let i of userName){
    if(i != "a" || i != "e" || i != "o" || i != "u"){
        console.log("არასწორია")
    }else{
        console.log(userName)
    }
}
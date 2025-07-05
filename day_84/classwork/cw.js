// 1) შექმენით ფუნქცია რომელსაც გადასცემთ მხოლოდ 1 პარამეტრს number'ს და for loop'ის მეშვეობით გამოიტანეთ ყველა რიცხვი შემოტანილი number'ის ჩათვლით

function userNumber(num){
    for (let i = 0; i <= num; i++){
        console.log(i)
    }
}

userNumber(10)
//  შექმენით ფუნქცია რომელსაც გადასცემთ მხოლოდ ერთ არგუმენტს number'ს და ასევე შექმენით ერთი ცვლადი i რომელსაც გაიტოლებთ 0'ს შემდეგ while loop ის საშუალებით მიესალმეთ მომხმარებელს იქამდე სანამ i არ გაუტოლდება მომხმარებლის შემოტანილ რიცხვს


function number(num){
    let i = 0
    while(i < num){
        console.log("Hello!")
        i++
    }
}

number(Number(prompt("enter your number")))
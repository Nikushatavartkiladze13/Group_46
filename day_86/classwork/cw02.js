// შექმენით ობიექტი და მასში გამოიტანეთ ყველა key & value, in keyword ით

let aboutMe = {
    myName : "Nika",
    surname : "Tavartkiladze",
    age : 16,
    height : 1.82,
}


for(let i in aboutMe){
    console.log("Keys", Object.keys(aboutMe))
    console.log("Value", Object.values(aboutMe))
    
}

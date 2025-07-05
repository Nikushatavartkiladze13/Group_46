//  შექმენით ფუნქცია რომელსაც გადაეცემა 1 პარამეტრი name შემდეგ for loop'ის საშუალებით გადაუარეთ ამ name'ის სიგრძეს და გამოიტანეთ თითოეული ასო ამ სახელიდან

function userName(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i])
    }
}

userName("Nika")


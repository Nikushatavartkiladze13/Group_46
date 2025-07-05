// 2) შექმენით ფუნქცია რომელსაც გადასცემთ 2 პარამეტრს name და age შემდეგ შეამოწმეთ თუ შემოტანილი ასაკი ნაკლები იქნება 18 დააბრუნეთ "your not adult yet" სხვა შემთხვევაში მიესალმეთ მომხმარებელს

function user(name, age){
    if(age < 18){
        console.log("your not adult yet")
    }else{
        console.log("hello " + name)
    }

}

user("nika", 19)

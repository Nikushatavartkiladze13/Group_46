const form = document.getElementById("myForm")
const result = document.getElementById("result")

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = form.name.value
    const surname = form.surname.value
    let date = form.date.value.split("-")

    let month = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    }

    let monthName = month[date[1]]

    result.innerHTML += `
    <p>Your Fullname is: ${name} ${surname}, You were born in ${date[0]}y, Your birth month is ${monthName}, Your day of birth is ${date[2]}</p>
    `
})

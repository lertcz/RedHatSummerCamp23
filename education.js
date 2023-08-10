let day = new Date().getDay() - 1

function init() {
    updateName()
    updateTime()
    updateDate()
    insertTimeTable()
    changeDay(day)
}

function updateName() {
    document.getElementById("name").innerHTML = localStorage.getItem("user") + "'s schedule"
}

function updateTime() {
    const date = new Date()
    document.getElementById("time").innerHTML = `- ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')} -`
    setTimeout(() => {
        updateTime()
    }, "1000");
}

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function updateDate() {
    const date = new Date()
    document.getElementById("date").innerHTML = `${dayNames[date.getDay()]} ${date.getDate().toString().padStart(2, '0')}.${date.getMonth().toString().padStart(2, '0')}. ${date.getFullYear()}`
}

function insertTimeTable() {
    const classes = [
        ["TEV", "U49", "7:00 - 7:45"],
        ["TEV", "U49", "7:50 - 8:35"],
        ["CJL", "U49", "8:45 - 9:30"],
        ["FYZ", "U49", "9:45 - 10:30"],
        ["SWA", "U49", "10:40 - 11:25"],
        ["MAT", "U49", "12:00 - 12:45"],
        ["EKO", "U49", "12:50 - 13:35"],
    ]

    document.getElementById("mainSchedule").innerHTML = ""
    classes.forEach(element => {
        document.getElementById("mainSchedule").innerHTML += `<div  class="col-sm text-center subject"><h3>${element[0]}</h3><h8>${element[1]}</h8><h6>${element[2]}</h6></div>`
    });
}

function increment() {
    if (day + 1 <= 4) {
        day++
        changeDay(day)
    }
}

function decrement() {
    if (day - 1 >= 0) {
        day--
        changeDay(day)
    }
}

function changeDay(d) {
    const days = [].slice.call(document.getElementsByClassName("day"))
    days.forEach((element) => {
        if (element.classList.contains("dayActive")) element.classList.remove("dayActive")
    })

    days[d].classList.add("dayActive")
    day = d
    
}
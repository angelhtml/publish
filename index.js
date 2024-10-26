let version = document.querySelector('.version');
let count_button = document.querySelector(".count")
let count_display = document.querySelector(".countdisplay")

let counter = 0

function Ready(){
    version.innerHTML = "version 1"
    count_display.innerHTML = (`count : ${counter}`)
}

function Counter(){
    counter += 1
    count_display.innerHTML = (`count : ${counter}`)
}

count_button.addEventListener("click", ()=>{
    Counter()
})

Ready()
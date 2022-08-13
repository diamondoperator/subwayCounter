let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let total = document.getElementById("total-riders")


function increment() {
    count += 1
    countEl.textContent = count
  
}

//when save button clicked
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}


console.log("Let's count people on the subway!")

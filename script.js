
const form = document.querySelector('#parking-form')

form.addEventListener('submit', function (event) {
    event.preventDefault
    totalCost()
    validate()
})

function totalCost() {
    let numDays = document.querySelector('#days').value
    let result = eval(numDays * 5)
    const display = document.querySelector('#total')
    display.innerHTML = result
}


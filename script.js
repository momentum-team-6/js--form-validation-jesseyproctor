console.log('Add validation!');



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



function validate() {
    let creditCardNum = document.querySelector('#credit-card').value 
    validateCardNumber(creditCardNum)

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}
function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

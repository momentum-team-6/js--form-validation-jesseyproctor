console.log('Add validation!');


const form = document.querySelector('#parking-form')


form.addEventListener('submit', function (event) {
    event.preventDefault
    totalCost()
    validate()
})



function totalCost() {
    let numDays = document.querySelector('#days').value
    let result = numDays * 5
    // console.log(result)
    const display = document.querySelector('#total')
    display.innerHTML = result
}


//step 5:  5 dollars 5 consecutive days per week.  7 dollars for 2 consecutive days per week.
//create array giving weekdays a value of 5 and weekends a value of 7
//use map, date 

//way to distinguish between week days and weekend Date.prototype.getUTCDay()
    // const today = new Date()
    // console.log(today.getDay())
//days 1-5 recieve value of 5 and 0 and 6 recieve value of 7
//add array of 5s and 7s
//using date and number of days for calculation
//create an array and use .reduce or .map to run  through each number.
//since .reduce can provide sum probably use it instead of for loop or map (map will return array)
// function reduceNumbers(nums) {
//     const reduced = nums.reduce(function(acc, currentValue) {
//       console.log('acc', acc)
//       console.log('current value:', currentValue)
//          return acc + currentValue
//     }, 0)
//     return reduced
//   }
  
//   const sum = reduceNumbers(numbers)
  
//   console.log("sum", sum)

function validate() {
    let creditCardNum = document.querySelector('#credit-card').value 
    validateCardNumber(creditCardNum)
    // if 
    // else
}

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


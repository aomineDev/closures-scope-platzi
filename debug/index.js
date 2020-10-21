// copy and paste in the console of your navigator
var a = 'Hello'

function hello () {
  let b = 'Hello world'
  const c = 'Hello world!'
  
  if (true) {
    let d = 'Hello World!!'
    debugger
  }
}

hello()

// copy and paste in the console of your navigator
function moneyBox () {
  debugger
  var saveCoins = 0
  function countCoins (coins) {
    debugger
    saveCoins += coins

    console.log(`MoneyBox: $${saveCoins}`)
  }

  return countCoins
}

let myMoneyBox = moneyBox()

myMoneyBox(5)
myMoneyBox(10)
myMoneyBox(15)

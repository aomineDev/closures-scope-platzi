function moneyBox (coins) {
  var saveCoins = 0
  saveCoins += coins

  console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5)
moneyBox(10) // lo que buscamos es que se asigne el valor de 15

// Closures
function moneyBoxTwo () {
  var saveCoins = 0
  function countCoins (coins) {
    saveCoins += coins

    console.log(`MoneyBox: $${saveCoins}`)
  }

  return countCoins
}

let myMoneyBox = moneyBoxTwo()
myMoneyBox(5)
myMoneyBox(10) // ahora si obtenemos 15
myMoneyBox(15) // y podemos seguir aumentando

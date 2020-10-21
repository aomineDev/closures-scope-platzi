function buildCount (i) {
  let count = i

  function displayCount () {
    console.log(count++)
  }

  return displayCount
}

let myCount = buildCount(5)

myCount() // retorna 5
myCount() // retorna 6
myCount()// retorna 7

let myOtherCount = buildCount(20)

myOtherCount() // retorna 20 
myOtherCount() // retorna 21 

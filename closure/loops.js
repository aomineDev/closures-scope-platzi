function anotherFunction () {
  for (var i = 0; i < 10; i++) {
    function fixThisProblem (n) {
      setTimeout(() => {
        console.log(n)
      }, 1000)
    }
    
    fixThisProblem(i)
  }
}

anotherFunction()

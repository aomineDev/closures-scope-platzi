// block scope
function fruits () {
  if (true) {
    var fruits1 = 'apple'
    var fruits2 = 'banana'
    let fruits3 = 'kiwi'

    console.log(fruits3)
  }

  console.log(fruits1)
  console.log(fruits2)
  // console.log(fruits3) // fruits3 is not defined
}

fruits()

// block scope with let
let x = 1
{
  let x = 2
  console.log(x)
}

console.log(x)

// block scope with var
var y = 1
{
  var y = 2
  console.log(y)
}

console.log(y)

// block scope in loops
function anotherFunction () {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}

anotherFunction()

function anotherFunctionTwo () {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 2000)
  }
}

anotherFunctionTwo()

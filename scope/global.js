var hello = 'Hello'
var hello = 'Hello again'

let world = 'World'
// let world = 'World another' // Identifier 'world' has already been declared

const helloWorld = 'Hello World'
// const helloWorld = 'Hello World' // Identifier 'helloWorld' has already been declared

function anotherFunction () {
  console.log(hello)
  console.log(world)
  console.log(helloWorld)
}

anotherFunction()

function globalAsignment () {
  globalVar = 'im global'
}

globalAsignment()

console.log(globalVar)

function globalAsignmentTwo () {
  var localVar = globalVarTwo = 'Im global too'
}

globalAsignmentTwo()

console.log(globalVarTwo)

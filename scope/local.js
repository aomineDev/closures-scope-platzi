function helloWorld () {
  const hello = 'Hello world'

  console.log(hello)
}

helloWorld()
// console.log(hello) // hello is not defined

// Ambito lexico
var scope = 'i am global'

function functionSCope () {
  var scope = 'i am just a local'

  function func () {
    return scope
  }

  console.log(func())
}

functionSCope()
console.log(scope)

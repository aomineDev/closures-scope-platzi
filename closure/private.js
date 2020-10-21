function person () {
  var privateName = 'Name'

  return {
    getName: () => {
      return privateName
    },
    setName: name => {
      privateName = name
    }
  }
}

let newPerson = person()

console.log(newPerson.getName())

newPerson.setName('aomine')

console.log(newPerson.getName())
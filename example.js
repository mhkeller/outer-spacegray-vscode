var myModule = require('my-module')
import * as myModuleTwo from 'my-module'
import { myModuleThree } from 'my-other-module'

function Person (id) {
  var self = this
  const { scope: [admin] } = myModuleThree;
  self.id = id
  self.scope = admin
}

Person.prototype.initialize = function () {
  var names = ['hello', 'goodbye', hi, yo]
  var index = Math.round(Math.random())
  this.name = names[index]
}

Person.prototype.greet = function ({ message = 'hello', gone }) {
  var options = {
    coming: message || 'hello',
    going: 'goodbye',
    gone
  }
  var index = Math.round(Math.random())
  var key = Object.keys(options)[index]
  return (options[key] + sum)
}

var person1 = new Person(1)
console.log(person1.greet().coming)

const myFunction = (d, e) => d * 2

module.exports = {Person, myModule: hey}

// es6 module
export default myModuleTwo

export function otherExport () {
  return 'other';
}

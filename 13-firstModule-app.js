// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only shar miniumu)
const names = require('./13-names')
const sayHi = require('./13-utils')
const data = require('./14-alternative-flavor')
require('./16-mind-Granade');
console.log(names);
console.log("robert-----------------",data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

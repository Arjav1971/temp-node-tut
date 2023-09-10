// Modules
// CommonJS ,every file is module (by default)
// Modules- Encaspulated Code (only share minimum)

// Global -NO Window!!!
//__dirname -path to current directory
//__filename - file name
//  require -function to use modules (CommonJS)
// module -info anout current module (file)
// process -info anout env where the program is being executed
const names=require('./4-names')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(names)
console.log(data)
sayHi(names.peter)
sayHi(names.john)
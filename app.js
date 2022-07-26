const {createFile} = require('./helpers/multiplicacion')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();

createFile(argv.b, argv.l, argv.h)
.then((msg) => console.log(msg.green))
.catch((err) => console.log(err));
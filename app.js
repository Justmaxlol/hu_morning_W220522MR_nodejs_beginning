const printFunction = require("./print"); //import
// const math = require("./math");
const { PI, add } = require("./math");
require("./global");

console.log("hello from node");

printFunction("something");

// console.log(math.PI);
console.log(PI);

// console.log(math.add(1, 1));
console.log(add(1, 1));

console.log("🚀 ~ file: app.js ~ line 17 ~ global.samData", global.samData);

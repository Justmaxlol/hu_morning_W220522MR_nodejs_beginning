const { join } = require("node:path");

// const filePath = "c:\\nodejs\\package.json"; // windows
// const filePath = "/nodejs/package.json"; //posix
const filePath = join(__dirname, "nodejs", "package.json"); //posix
console.log("filePath", filePath);

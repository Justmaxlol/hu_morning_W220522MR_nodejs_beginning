const {
  mkdir,
  rmdir,
  rm,
  writeFile,
  readdir,
  readFile,
} = require("node:fs/promises");
const { join } = require("node:path");

//* create directory
//* recursive - i will create all missing directorys in the path
// (async () => {
//   try {
//     const newDir = await mkdir(join(__dirname, "uploads", "user1234"), {
//       recursive: true,
//     });
//     console.log("🚀 ~ file: fs.js ~ line 6 ~ newDir", newDir);
//   } catch (err) {
//     console.log("🚀 ~ file: fs.js ~ line 8 ~ err", err);
//   }
// })();

//! remove empty directory only
// (async () => {
//   try {
//     const newDir = await rmdir(join(__dirname, "uploads"));
//     console.log("🚀 ~ file: fs.js ~ line 15 ~ newDir", newDir);
//   } catch (err) {
//     console.log("🚀 ~ file: fs.js ~ line 17 ~ err", err);
//   }
// })();

//* will remove the directory with it constant
// (async () => {
//   try {
//     const newDir = await rm(join(__dirname, "uploads"), {
//       force: true,
//       recursive: true,
//     });
//     console.log("🚀 ~ file: fs.js ~ line 15 ~ newDir", newDir);
//   } catch (err) {
//     console.log("🚀 ~ file: fs.js ~ line 17 ~ err", err);
//   }
// })();

// will create file
// (async () => {
//   try {
//     await writeFile("./text.txt", "something new");
//   } catch (error) {
//     console.log("🚀 ~ file: fs.js ~ line 44 ~ error", error);
//   }
// })();

//* will remove the file
//! remove recursive option!!!
// (async () => {
//   try {
//     const newDir = await rm("./test/t2.t");
//     console.log("🚀 ~ file: fs.js ~ line 15 ~ newDir", newDir);
//   } catch (err) {
//     console.log("🚀 ~ file: fs.js ~ line 17 ~ err", err);
//   }
// })();

// (async () => {
//   try {
//     const files = await readdir("./test");
//     console.log("🚀 ~ file: fs.js ~ line 70 ~ files", files);
//   } catch (error) {
//     console.log("🚀 ~ file: fs.js ~ line 72 ~ error", error);
//   }
// })();

//read file
//if the file is text we shuld add encoding type
//the common encoding type today is utf8
// (async () => {
//   try {
//     const txt = await readFile("./test/t.t", { encoding: "utf-8" });
//     console.log("🚀 ~ file: fs.js ~ line 79 ~ txt", txt);
//   } catch (error) {
//     console.log("🚀 ~ file: fs.js ~ line 80 ~ error", error);
//   }
// })();

/* 
  1) create file and write hello file
  2) display all files
  3) delete the file from (1)
*/

(async () => {
  try {
    await writeFile("./test/file.txt", "hello file");
    const files = await readdir("./test");
    console.log(files);
    await rm("./test/file.txt");
  } catch (error) {}
})();

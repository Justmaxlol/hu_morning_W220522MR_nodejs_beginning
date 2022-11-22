const { mkdir, rmdir, rm } = require("node:fs/promises");
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
(async () => {
  try {
    const newDir = await rm(join(__dirname, "uploads"), {
      force: true,
      recursive: true,
    });
    console.log("🚀 ~ file: fs.js ~ line 15 ~ newDir", newDir);
  } catch (err) {
    console.log("🚀 ~ file: fs.js ~ line 17 ~ err", err);
  }
})();

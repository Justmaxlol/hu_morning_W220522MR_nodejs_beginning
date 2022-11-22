const { mkdir } = require("node:fs/promises");

//? promise vs callback
//* promise
// try {
//   await mkdir("c:\\tmp\\a\\apple", { recursive: true });
//   await mkdir("/tmp/a/apple", { recursive: true });
//   await mkdir("/tmp/a/apple", { recursive: true });
//   await mkdir("/tmp/a/apple", { recursive: true });
//   await mkdir("/tmp/a/apple", { recursive: true });
//   await mkdir("/tmp/a/apple", { recursive: true });
//   await mkdir("/tmp/a/apple", { recursive: true });
// } catch (err) {
//   console.log(err);
// }
//! callback
// const fs = require("fs");
// fs.mkdir("/tmp/a/apple", { recursive: true }, (err) => {
//   if (err) throw err;
//   if (!err) {
//     fs.mkdir("/tmp/a/apple", { recursive: true }, (err) => {
//       if (err) throw err;
//       if (!err) {
//         fs.mkdir("/tmp/a/apple", { recursive: true }, (err) => {
//           if (err) throw err;
//           if (!err) {
//             fs.mkdir("/tmp/a/apple", { recursive: true }, (err) => {
//               if (err) throw err;
//               if (!err) {
//                 fs.mkdir("/tmp/a/apple", { recursive: true }, (err) => {
//                   if (err) throw err;
//                   if (!err) {
//                     fs.mkdir("/tmp/a/apple", { recursive: true }, (err) => {
//                       if (err) throw err;
//                       if (!err) {
//                         fs.mkdir("/tmp/a/apple", { recursive: true }, (err) => {
//                           if (err) throw err;
//                         });
//                       }
//                     });
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

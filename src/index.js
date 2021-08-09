// module.exports = function solveSudoku(matrix) {
//   let solMat = [];
//   let m = 0;
//   baseTest();

//   function baseTest() {
//     let b = 1;
//     while (b > 0) {
//       b = 0;
//       for (let i = 0; i < 9; i++) {
//         solMat[i] = [];
//         for (let j = 0; j < 9; j++) {
//           solMat[i][j] = [];
//           if (matrix[i][j] == 0) {
//             test(i, j);
//           }
//           if (solMat[i][j].length == 1) {
//             matrix[i][j] = solMat[i][j][0];
//             b++;
//           }
//         }
//       }
//     }
//     baseTestSol();
//   }

//   function baseTestSol() {
//     let b = 0;
//     for (let i = 0; i < 9; i++) {
//       for (let j = 0; j < 9; j++) {
//         if (solMat[i][j].length > 0) {
//           testSol(i, j);
//         }
//         if (solMat[i][j].length == 1) {
//           matrix[i][j] = solMat[i][j][0];
//           b++;
//           m++;
//         }
//       }
//     }
//     if (b > 0) {
//       baseTest();
//     } else {
//       strTest();
//     }
//   }

//   function strTest() {
//     if (m > 0) {
//       for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//           if (solMat[i][j].length == 2) {
//             testSolStr(i, j);
//           }
//         }
//       }
//       m = 0;
//       baseTestSol();
//     }
//   }






//   function test(i, j) {
//     for (let n = 1; n < 10; n++) {
//       let counter = 0,
//         counter1 = 0;
//       for (let m = 0; m < 9; m++) {
//         if (n != matrix[i][m]) {
//           counter++;
//         }
//         if (n != matrix[m][j]) {
//           counter1++;
//           if (counter == 9 & counter1 == 9) {
//             counter = 0;
//             for (let c = 0; c < 3; c++) {
//               for (let r = 0; r < 3; r++) {
//                 if (n != matrix[Math.floor(i / 3) * 3 + c][Math.floor(j / 3) * 3 + r]) {
//                   counter++;
//                   if (counter == 9) {
//                     solMat[i][j].push(n);
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   function testSol(i, j) {
//     for (let n = 0; n < solMat[i][j].length; n++) {
//       let counter = 0,
//         counter1 = 0,
//         t = solMat[i][j][n];
//       for (let m = 0; m < 9; m++) {
//         for (let k = 0; k < solMat[i][m].length; k++) {
//           if (t == solMat[i][m][k]) {
//             counter++;
//           }
//         }
//         for (let l = 0; l < solMat[m][j].length; l++) {
//           if (t == solMat[m][j][l]) {
//             counter1++;
//           }
//         }
//       }
//       if (counter == 1) {
//         solMat[i][j] = [];
//         solMat[i][j][0] = t;
//       }
//       if (counter1 == 1) {
//         solMat[i][j] = [];
//         solMat[i][j][0] = t;
//       }
//       counter = 0;
//       for (let c = 0; c < 3; c++) {
//         for (let r = 0; r < 3; r++) {
//           for (let p = 0; p < solMat[Math.floor(i / 3) * 3 + c][Math.floor(j / 3) * 3 + r].length; p++) {
//             if (t == solMat[Math.floor(i / 3) * 3 + c][Math.floor(j / 3) * 3 + r][p]) {
//               counter++;
//             }
//           }
//         }
//       }
//       if (counter == 1) {
//         solMat[i][j] = [];
//         solMat[i][j][0] = t;
//       }
//     }
//   }

//   function testSolStr(i, j) {
//     let counter = 0,
//       counter1 = 0,
//       str = solMat[i][j].join('');
//     for (let m = 0; m < 9; m++) {
//       let str1 = solMat[i][m].join('');
//       if (str != str1) {
//         if (str1.indexOf(str)>-1) {
//           counter++;
//         }
//       }

//       for (let l = 0; l < solMat[m][j].length; l++) {
//         if (t == solMat[m][j][l]) {
//           counter1++;
//         }
//       }
//     }
//     if (counter == 1) {
//       solMat[i][j] = [];
//       solMat[i][j][0] = t;
//     }
//     if (counter1 == 1) {
//       solMat[i][j] = [];
//       solMat[i][j][0] = t;
//     }
//     counter = 0;
//     for (let c = 0; c < 3; c++) {
//       for (let r = 0; r < 3; r++) {
//         for (let p = 0; p < solMat[Math.floor(i / 3) * 3 + c][Math.floor(j / 3) * 3 + r].length; p++) {
//           if (t == solMat[Math.floor(i / 3) * 3 + c][Math.floor(j / 3) * 3 + r][p]) {
//             counter++;
//           }
//         }
//       }
//     }
//     if (counter == 1) {
//       solMat[i][j] = [];
//       solMat[i][j][0] = t;
//     }

//   }
//   console.log(solMat);
//   console.log(matrix);
//   return matrix;
// };

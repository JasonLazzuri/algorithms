// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var split = n.toString().split('').reverse().join("");
    return parseInt(split) * Math.sign(n);
}

module.exports = reverseInt;


// function reverseInt(n) {
//     let reversed = ''
//     var split = n.toString().split('');
//
//     if (Math.sign(n) === -1) {
//         for (let i of split) {
//             reversed = i + reversed;
//         }
//         return parseInt(reversed) * -1;
//     } else {
//         for (let i of split) {
//             reversed = i + reversed;
//         }
//         return parseInt(reversed)
//     }
//
// }
// reverseInt(-15);

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var counter = {};
    var max = 0;
    var maxChar = '';


    for(let i of str){
        if(counter[i]){
            counter[i]++;
        }else{
            counter[i] = 1;
        }
    }

    for(let j in counter){
        if(counter[j] > max){
            max = counter[j];
            maxChar = j;
        }
    }
return maxChar;
}

module.exports = maxChar;


// function maxChar(str) {
//     const counter = {};
//     let max = 0;
//     let maxChar = '';
//
//     for (let i of str){
//       if(counter[i]){
//         counter[i]++
//         }else{
//           counter[i] = 1
//         }
//     }
//
//     for(let j in counter){
//         if(counter[j] > max){
//             max = counter[j];
//             maxChar = j;
//         }
//     }
//
//     return maxChar;
//
// }

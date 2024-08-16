// const myArray = ['a','b','c','a']

// const obj = {}

// myArray.forEach((items)=>{
//     if(!obj[items]){
//         obj[items] = 1
//     }else{
//         obj[items]++
//     }
// })

// console.log(obj)


// const string = 'nishantn'

// const obj = {}

// for(const char of string){
//     if(!obj[char]){
//         obj[char] = 1
//     }else{
//         obj[char]++
//     }
// }
// console.log(obj)


const string = 'nishant';
const obj = {};

for (const index in string) {
    let char = string[index];
    if (!obj[char]) {
        obj[char] = 1;
    } else {
        obj[char]++;
    }
}

console.log(obj);





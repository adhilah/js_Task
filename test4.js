// Q1: Create an array of 5 fruits and print the 3rd fruit.

// function FruitArray(arr){
//     return arr[2]
// }
// console.log(FruitArray([1,2,3,4,5]))

// ==================================================================

// Q2: Add an item to the end of an array.

// function addItemEnd(arr){
//     arr.push(5)
//     return arr
// }
//  console.log(addItemEnd([1,2,3,4]))

// ==================================================================

// Q3: Remove the first item from an array.

// function removeStart(arr){
//     arr.shift(1)
//     return arr
// }
// console.log(removeStart([0,1,2,3,4]))

// ===================================================================

// Q4: Find the length of an array.

// function findLength(arr){
//     return arr.length
// }
// console.log(findLength([0,1,2,3,4]))

// ================================================================

// Q5: Replace the 2nd element of an array.

// function replaceElement(arr){
//     arr[1]=0
//     return arr
// }
// console.log(replaceElement([1,2,3,4]))

// ===============================================================

// Q6: Use push() to add a number to an array.

function pushMethod(arr){
    let a=[]
    for(let i of arr){
        a.push(i+1)
    }
    return a
}
console.log(pushMethod([1,3,5]))

// ===============================================================

// Q7: Use pop() to remove last element.

// function popMethod(arr){
//     for(let i of arr){
//         if(i>10){
//             arr.pop()
//         }
//     }
//     return arr
// }
// console.log(popMethod([1,3,5,11]))

// ================================================================

// Q8: Use includes() to check if "apple" is in an array.

// function includeExample(arr){
//     return arr.includes(9)
// }
// console.log(includeExample([1,3,5,11]))

// ================================================================

// Q9: Sort numbers in ascending order

// function ascendingOrder(arr){
//     let result= arr.sort((a,b)=>a-b)
//     return result
// }
// console.log(ascendingOrder([1,3,5,11,0,2]))

// ===============================================================

// Q10: Sort numbers in descending order

// function descendingOrder(arr){
//     let result= arr.sort((a,b)=>b-a)
//     return result
// }
// console.log(descendingOrder([1,3,5,11,0,2]))

// ===============================================================

// Q11: Sort strings alphabetically (use localeCompare).

// function alphabetically(arr){
//     let result= arr.sort((a,b)=>a.localeCompare(b))
//     return result
// }
// console.log(alphabetically(["a","c","s","b"]))

// ===============================================================

// Q12: Sort objects by age:

//  function objSort(arr){
//    return arr.sort((a,b)=>a.name-b.name)
// }
// console.log(objSort([{name: "A", age: 25},
// {name: "C", age: 30},
//   {name: "B", age: 20}]))

// ===============================================================

//Q:13 Print all elements of an array using for...of.

// function forOf(arr){
//     for(let i of arr){
//         console.log(i)
//     }
// }
// console.log(forOf(["a","c","s","b"]))

// ==============================================================

// Q14: Print all indexes of an array using for...in.

// function forIn(arr){
//     for(let i in arr){
//         console.log(i)
//     }
// }
// console.log(forIn(["a","c","s","b"]))

//================================================================

// Q15: Loop through an object and print its keys.

// function printKey(obj){
//         return Object.keys(obj)
// }
// console.log(printKey({name: "A", age: 25},
// {name: "C", age: 30},
//   {name: "B", age: 20}))

// ==============================================================

// Q16: Convert all names to uppercase.

// function mapMethod(arr){
    // return arr.map((a)=>a.toUpperCase())
// }
// console.log(mapMethod(["a","b","c","d"]))


// ======================0000000000000000000----------------

// let a=["a","b","c","d"]
// console.log(a.map((a)=>a.toUpperCase()))


// ==============================================================

// Q17: Add 10 to every number in an array.

// function mapMethod(arr){
//     return arr.map((a)=>a+10)
// }
// console.log(mapMethod([1,2,3,4,5]))

// ===============================================================

// Q18: Return the length of each string in an array.

// function stringLength(arr){
//     for(let i of arr){
//         console.log(i.length)
//     }
// }
// console.log(stringLength(["apple","ball","cat","dog"]))

// ================================================================

// Q19: Return the length of each string in an array.using map method

// function stringLength(arr){
//     return arr.map((l)=>l.length)
// }
// console.log(stringLength(["apple","ball","cat","dog"]))

// ================================================================

// Q21: Take an array of objects and return only the name values.

// function printKey(obj){
//         for(let i of obj){
//             console.log(i.name)
//         }
// }
// console.log(printKey([{name: "A", age: 25},
// {name: "C", age: 30},
//   {name: "B", age: 20}]))

// =================================================================

// Q22: Take an array of objects and return only the name values.

// function printKey(obj){
//     return obj.map((a)=>a.name)
// }
// console.log(printKey([{name: "A", age: 25},
// {name: "C", age: 30},
//   {name: "B", age: 20}]))

// =================================================================

// Q23: Filter only even numbers from [1,2,3,4,5,6].

// function evenFilter(arr){
//     return arr.filter(a => a%2==0)
// }
// console.log(evenFilter([1,2,3,4,5,6]))

// =================================================================

// Q24: Filter words with length > 4.

// function lengthFour(arr){
//     return arr.filter(a=>a.length>4)
// }
// console.log(lengthFour(["apple","ball","cat","dog"]))

// =================================================================

// Q25: Filter people age > 18:

// function objFilter(arr){
//     return arr.filter(a=>a.age>18)
// }
// console.log(objFilter([{name:"A", age:15}, {name:"B", age:20}]))

// ===================================================================

// Q26: Find the product of all numbers.

// function product(arr){
//     return arr.reduce((acc,curr)=>acc*curr,1)
// }
// console.log(product([2, 3, 4]))

// ===================================================================

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Q27: Find the longest string in: ["apple","banana","kiwi"].

// function reduceExample(arr){
//     return arr.reduce((acc,curr)=>curr.length ? curr:acc)
// }
// console.log(reduceExample(["apple","banana","kiwi"]))

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// ===================================================================

// Q29: Print every number in an array.

// function printArray(arr){
//     return arr.forEach(num=> console.log(num))
// }
// console.log(printArray(["apple","banana","kiwi"]))

// ===================================================================

// Q30: Convert an array of names into an array of objects


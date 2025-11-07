function runningTotal(arr){
    let x=0
    let array=[]
    for(let i of arr){
        x+=i
        array.push(x)
    }
    return array
}
console.log(runningTotal([5, -2, 10]))
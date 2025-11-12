function matchHouses(num){
    let n=0
    if(num==1){
        n=num*6
    }
    else{
        n=((num*6)-num+1)
    }
    return n
}
console.log(matchHouses(4))
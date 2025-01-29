function narcissistic(value) {
    const sumArray = []
    const string = value.toString()
    for(let i = 0; i < string.length; i++){
       const result = string[i] ** string.length
        sumArray.push(result)
    }
    const finalAnswer = sumArray.reduce((acc,item)=> {
        return acc + item
    })
    if(finalAnswer !== value){
        return false
    }else{
        return true
    }
}
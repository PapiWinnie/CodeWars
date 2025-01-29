function findOdd(array) {
    const count = {}
    
    for(let i = 0; i < array.length; i++){
        if(count[array[i]]){
            count[array[i]] ++
        }else{
            count[array[i]] = 1
        }
    }
    
    const arrayOfKeys = Object.keys(count)
    const arrayOfValues = Object.values(count)
    
    let num = 0
    
   for(number of Object.values(count)){
       if(number % 3 === 0 || number === 1){
           num = number
       }
   }
   
    const indexOfValue = arrayOfValues.indexOf(num)
    return Number(arrayOfKeys[indexOfValue])
}
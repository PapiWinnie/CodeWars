function uniqueInOrder(iterable){
    
    if(Array.isArray(iterable) === true){
        iterable = iterable.join('')
    }
 
    const solution = []
    for(let i = 0; i <iterable.length; i++){
        if(iterable[i] !== iterable[i + 1]){
            if(isNaN(iterable[i])){
               solution.push((iterable[i])) 
            }else{
                solution.push(Number(iterable[i])) 
            }
        }
    }
    return solution
}
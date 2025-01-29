function comp(arr1,arr2){
    
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }

    arr1 = arr1.map((number) => number ** 2).sort((a,b) => b - a)
    arr2 = arr2.sort((a,b)=> b - a)

    let result = []
    let answer = null
    
    if(arr1.length !== arr2.length){
        result.push(false)
    }else{
        for(let i = 0; i < arr1.length; i++){
                let numbToCompare = arr1[i]
                let foundInB = false
                
                for(let j=0; j < arr2.length; j++){
                    if(numbToCompare == arr2[j]){
                        foundInB = true
                        arr2.splice(j,1)
                        break
                    }
                }
                
                if(!foundInB){
                    result.push(false)
                }else{
                    result.push(true)
                }
            } 
        }
    
    result.includes(false) ? answer = false : answer = true
    
  return answer
}
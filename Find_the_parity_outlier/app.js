function findOutlier(array){
    let outlier = null
    let undefinedCount = 0
    
    const newArray = array.map((integer,index)=> {
        if(integer % 2 === 0){
            return integer
        }else{
            outlier = integer
        }
    })
    
    for (number of newArray){
        if(number === undefined){
            undefinedCount +=1
        }
    }
    
    if(undefinedCount === 1){
        return outlier
    }else{
        return outlier = newArray.find((element,_) => element !== undefined)
    }
}
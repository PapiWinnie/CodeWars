function commonElements(a,b){
    let result = [];
    
    for(let i=0; i < a.length ; i++){
        let element = a[i];
        let match = false;
        
        for(let j=0; j < b.length ; j++){
            if(element === b[j]){
                match = true;
                break
            }
        }
        
        if(match && !result.includes(element)){
            result.push(element)
        }
    }
    console.log(result)
}

commonElements([1, 2, 2, 3,4,8], [2, 3,3, 4])
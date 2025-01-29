function duplicateCount(text){
    const lowerCaseTxt = text.toLowerCase();
    const charObj = {}
    
    for(char of lowerCaseTxt){
        if(charObj[char]){
            charObj[char] += 1
        }else{
            charObj[char] = 1
        }
    }
    
    let duplicate = 0
    
    for(count of Object.values(charObj)){
        if(count > 1){
            duplicate ++
        }
    }
   
   return duplicate
  }
  
  duplicateCount('aabBcde')
  
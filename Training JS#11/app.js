function grabDoll(dolls){
    var bag=[];
    //coding here
    for(doll of dolls){
      if(doll === 'Hello Kitty' || doll === 'Barbie doll'){
        if(bag.length === 3){
            break
        }
  
        if(bag.length !== 3){
            bag.push(doll)
        }else{
          continue    
        }
      }
    }
    return bag;
  }
  
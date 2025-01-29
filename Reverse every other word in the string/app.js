function reverse(str){
    //WRITE SOME MAGIC
    
      return  str.trim().split(" ").map((word,index) => {
            if(index % 2 !== 0){
              return word.split("").reverse().join("")
            }else if(index % 2 === 0){
                return word
            }
        }).join(' ')
  }
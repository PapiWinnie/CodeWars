function spinWords(string){
    //TODO Have fun :)
     const arrayOfWords = string.split(' ')
      const newWord = arrayOfWords.map((word) => {
          if(word.length >= 5){
              return word.split('').reverse().join("")
          }else{
              return word
          }
      }).join(' ')
      
      return newWord
      
  }
  
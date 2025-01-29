function inAscOrder(arr) {
    const resultArray = [];
    let result = null
      for(let i = 0; i < arr.length - 1 ; i++){
          if(arr[i] < arr[i+1]){
              resultArray.push(true)
           }else{
               resultArray.push(false)
           }
        }
        if(resultArray.includes(false)){
            result =  false
        }else(
            result =  true
        )
      return result
  }
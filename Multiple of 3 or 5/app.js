function solution(number){
    const numberToUse = number - 1
    const sumArray = []
      for(let i = numberToUse; i > 0; i--){
          if(i % 3 === 0 || i % 5 === 0){
              sumArray.push(i)
          }
      }
      return sum = sumArray.reduce((acc,item) => acc + item,0)      
}

function countBy(x, n) {
    let z = [];
    
    for(let i = 1; i <= n; i++){
      let multiplier = x
      multiplier *= i
      z.push(multiplier)
    }
  
    return z;
  }
  
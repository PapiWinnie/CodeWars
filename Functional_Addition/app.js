function add(n) {
    return function(adder){
      return n + adder
    }
  }
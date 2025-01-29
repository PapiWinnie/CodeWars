function likes(names) {
    // TODO
    if(names.length > 3){
          const name1 = names[0]
          const name2 = names[1]
          return `${name1}, ${name2} and ${names.length -2} others like this`
      }else if(names.length === 3){
          const name1 = names[0]
          const name2 = names[1]
          const name3 = names[2]
          return `${name1}, ${name2} and ${name3} like this`
      }else if(names.length === 2){
          const name1 = names[0]
          const name2 = names[1]
          return `${name1} and ${name2} like this`
      }else if(names.length === 1){
          const name1 = names[0]
          return `${name1} likes this`
      }else{
           return `no one likes this`
      }
  }
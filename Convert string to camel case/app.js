function toCamelCase(str){
    let result = '';
  
    for(let i = 0; i < str.length; i++){
        if(str[i] === "-" || str[i] === '_'){
            const nextString = str[i+1].toUpperCase()
            result += nextString
            i++
        }else{
            result += str[i]   
        }
    }
  
    return result
}

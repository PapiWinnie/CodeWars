function proofread(str){
    const string = str.toLowerCase();
    let result = ""
    for(let i = 0; i < str.length; i++){
        if(i === 0){
            result += string[i].toUpperCase()
        }else if(string[i-2] === '.'){
            result += string[i].toUpperCase()
        }else if(string[i] === 'i' && string[i+1] === 'e'){
            const firstChar = string[i]
            const secondChar = string[i+1]
            const fixedString = `${secondChar}${firstChar}`
            result += fixedString
            i++
        }else{
            result += string[i]
        }
    }
    return result
}  
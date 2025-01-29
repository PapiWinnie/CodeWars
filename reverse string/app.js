// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function spinWords (string){
    // const arrayOfWords = string.split(' ')
    // const newWord = arrayOfWords.map((word, index) => {
    //     if(word.length >= 5){
    //         return word.split('').reverse().join("")
    //     }else{
    //         return word
    //     }
    // }).join(' ')
    
    // console.log(newWord)
    
    return string.split(' ').map((word) => {
        return word.length >= 5 ? word.split('').reverse().join("") : word
    }).join(' ')
    
    // return string.split(' ').map((word) => {
    //     return word.length >= 5 ? word.split('').reverse().join("") : word;
    // }).join(' ')
}

spinWords("Just kidding there is still one more")
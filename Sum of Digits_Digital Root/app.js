function digitalRoot(n){
    if(n < 10) {
        return n;
    }else{
        const sum = n.toString().split('').reduce((acc, digit) => acc + Number(digit),0)
        return digitalRoot(sum)
    }
}

// non-refactor:

function digitalRoot(n){
    const numbers = n.toString()
    let firstTotal = 0
    for(const digits of numbers){
        firstTotal += Number(digits)
    }
    
    const secondNumbers = firstTotal.toString()
    let answer = 0
    for(const digits of secondNumbers){
        answer += Number(digits)
    }
    
    if(answer.toString() === 1){
        return answer
    }else{
        const thirdNumbers = answer.toString()
        let finalAnswer = 0
        for(const digits of thirdNumbers){
            finalAnswer += Number(digits)
        }
        return finalAnswer
    }
}
function solution(str){
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
        let firstLetter = str[i];
        let secondLetter;
        
        if (i + 1 < str.length) {
            secondLetter = str[i + 1];
        } else {
            secondLetter = '_';
        }

        result.push(firstLetter + secondLetter);
    }
    return result;
}
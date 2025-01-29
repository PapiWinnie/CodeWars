
// newString(`caMelCasing`)

function solution(string) {
    let result = '';  
    for (let i = 0; i < string.length; i++) {
        console.log(string[i])
        if (string[i] === string[i].toUpperCase()) {
            result += ' ';
        }
        result += string[i];  
    }
    console.log(result);  // Return the final result
}

solution("camelCasing")
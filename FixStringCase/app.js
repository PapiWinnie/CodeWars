// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


function solve(str){

    let upperCounter = 0
    let lowerCounter = 0
    let string = ""

    for(let char of str){
        if(char === char.toUpperCase() && char !== char.toLowerCase()){
            upperCounter += 1
        }else if(char === char.toLowerCase() && char !== char.toUpperCase()){
            lowerCounter += 1
        }
        console.log(char)
    }

    if(upperCounter > lowerCounter){
        string = str.toUpperCase()
    }else if(lowerCounter > upperCounter){
        string = str.toLowerCase()
    }else if(upperCounter === lowerCounter){
        string = str.toLowerCase()
    }

    return string
}

solve("CoDE")

// var x = 1;

// while(x < 20){
//     x += 1
    
//     if(x % 3 === 0 && x % 5 === 0){
//         console.log("JuliaJames")
//     }else if(x % 5 === 0){
//         console.log("James")
//     }else if(x % 3 === 0){
//         console.log("Julia")
//     }else{
//         console.log(x)
//     }
// }
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


function disemvowel(str){
    // str.includes("a") || str.includes("e") || str.includes("i") || str.includes("o") || str.includes("u") ? console.log(true) : console.log('false')

    let newString = str.replaceAll("a","").replaceAll("e","").replaceAll("i","").replaceAll("o","").replaceAll("u","")

    console.log(newString)

    return newString
  }

disemvowel("This website is for losers LOL!")
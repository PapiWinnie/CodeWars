function reverseWords(str) {
    // Go for it
    return  str.split(' ').map(word => {
          return word.split('').reverse().join('')
      }).join(' ')
  }
  
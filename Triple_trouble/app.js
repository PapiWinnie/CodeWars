function tripledouble(num1, num2) {
    num1 = num1.toString()
    num2 = num2.toString()
    let numberToTrack;
    
    for(let i=0; i < num1.length; i++){
        if(num1[i] === num1[i+1] && num1[i] === num1[i+2]){
            numberToTrack = num1[i]
            for(let j = 0; j < num2.length; j++){
                if(num2[j] === numberToTrack && num2[j] === num2[j+1] ){
                    return 1
                }
            }
        }
    }
    
    return 0
}
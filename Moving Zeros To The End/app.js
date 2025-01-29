function moveZeros(arr) {
    const result = []
    const arrZero=[]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            result.push(arr[i])
        }else{
            arrZero.push(arr[i]);
        }
    }
    return finalArr = result.concat(arrZero)
}
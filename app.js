function getDataType(data){
    return console.log (typeof data)
}
getDataType(false)
function reverseFunc(data){
    const reverse = data.split('').reverse().join('')
    return console.log(reverse)
}
reverseFunc('hello')
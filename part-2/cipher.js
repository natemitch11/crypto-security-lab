const index  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','_','-','+','=',' ']

let message = "Check out this cipher" //Here is where you can store the initial message

let messageArr = message.split("")
let publicKey = "Faramir"
let publicKeyArr = publicKey.split("")
let numericArr = []
let keyArrGrow = []
let keyNumericArr= []
let cipheredArr = []

let number = 0

for (let i = 0; i < messageArr.length; i++){  
    if (number < publicKeyArr.length){
        keyArrGrow.push(publicKeyArr[number])
        number ++
    }
    else if (number >= publicKeyArr.length) {
        number = 0
        keyArrGrow.push(publicKeyArr[number])
        number++
    }
}

for (let i = 0; i < messageArr.length; i++){
    let number = index.findIndex((elem)=> elem === messageArr[i])
    numericArr.push(number)
    let key = index.findIndex((elem)=> elem === keyArrGrow[i])
    keyNumericArr.push(key)
}

for (let i = 0; i < numericArr.length; i++) {
    let product = numericArr[i]*keyNumericArr[i]
    cipheredArr.push(product)
}

console.log(cipheredArr) //Outputting the ciphered number array
// HERE the initial string message has been ciphered. To undo the cipher you would have to know the key, then divide each number by finding indexes the Letter stored in the key was the same as the letter stored in the where index.
// Then after that you would have to use the index and convert the numbers back to their String Counterparts and then finally concatenate them to recreate the initial message
let decipheredNumArr = []

for (let i = 0; i < cipheredArr.length; i++) {
    let number = cipheredArr[i]/keyNumericArr[i]
    decipheredNumArr.push(number) 
}

let decipheredLettersArr = []

for (let i = 0; i < decipheredNumArr.length; i++) {
    let letter = index.find((elem) => index.indexOf(elem) === decipheredNumArr[i])
    decipheredLettersArr.push(letter)
}

let decipheredLetters = decipheredLettersArr.toString()
let decipheredMessage = decipheredLetters.replace(/,/g, '')

console.log(decipheredMessage) //Outputting the deciphered message
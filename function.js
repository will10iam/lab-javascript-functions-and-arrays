const numbers = [6, 10, 15, 20, 'Karen']

function add(num1) {
    let newNumber = []

    for ( let i = 0; i < num1.length; i++) {
        if (typeof num1[i] === "string") {
            return
           }

        let numFinal = num1[i] *27
        console.log(numFinal)
        newNumber.push(numFinal)
    }
    console.log(newNumber)
}

console.log(add(numbers))
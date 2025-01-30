function getPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        const isPrime=checkIsPrime(i)
     if (isPrime) {
        console.log(`el numero ${i} es primo`);
     }else{
        console.log(`el numero ${i} no es primo`);
        
     }
    }
}

function checkIsPrime(number) {
    for (let i = 2; i <= number; i++) {
        if (number%i===0) {
            return false
        } else{
            return true
        }
    }
}

getPrimes(7);


// const 7
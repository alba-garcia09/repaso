const myMoney=1237;
const euros=[500, 200, 100, 50, 20, 10, 5, 2, 1]
const minBill=5;

function atm(amount,typeMoney, minBill) {
    for (let i = 0; i < euros.length; i++) {
        if(amount/typeMoney[i]>= 1)  {
            if (typeMoney[i]>=minBill) {
                console.log(`|${typeMoney[i]}|`)
            } else{
                console.log(`(${typeMoney[i]})`)
            }
 
            amount=amount-typeMoney[i]
            i--
        } 
    } 
}

atm(myMoney, euros,minBill)
const limit = 200 ;
const Tax_Rates = 0.08 ;
const Accessory_Prise = 7.99 ;
var expences = 0;
var balance = 5000;
var wasted = 0 ;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function calculated(phone, tax, accessory){
    return (phone*tax)+phone+accessory+(accessory*tax);
}

while(limit >= wasted ){
    const Phone_Prise = getRandom(100, 1000);
    var Full_Prise = calculated(Phone_Prise, Tax_Rates, Accessory_Prise);
    if(limit < Full_Prise){
        break;
    }
    balance = balance - calculated(Phone_Prise, Tax_Rates, Accessory_Prise);
    wasted = wasted + calculated(Phone_Prise, Tax_Rates, Accessory_Prise);
    console.log(`Congratulations! Phone Prise: ${Phone_Prise} Full Prise: ${Full_Prise}`);
}
console.log('----------------------------------------------------------------');
console.log(`Remaining balance ${balance} USD`);
function bringSingara(taka) {
    console.log('taka diche=', taka, 'taka');
}

bringSingara(20);

function bringSomucha(money) {
    console.log('taka paichi=', money, 'taka');
    var somuchaPrice = 5;
    var somuchaQuantity = money / somuchaPrice;
    return somuchaQuantity;

}
var givenMoney = 100;
var somucha = bringSomucha(givenMoney);
console.log('mot somucha = ', somucha, 'ta');
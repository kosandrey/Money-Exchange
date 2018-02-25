// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    coins = {};
    if(currency < 0) return coins;
    if (currency > 10000) return  {error: 'You are rich, my friend! We don\'t have so much coins for exchange'};
    var h = Math.floor(currency / 50);
    var q = Math.floor((currency - h*50)/ 25);
    var d = Math.floor((currency - h*50 - q*25) / 10);
    var n = Math.floor((currency - h*50 - q*25 - d*10) / 5);
    var p = Math.floor((currency - h*50 - q*25 - d*10 - n*5) / 1);

    if (h != 0) coins.H = h;
    if (q != 0) coins.Q = q;
    if (d != 0) coins.D = d;
    if (n != 0) coins.N = n;
    if (p != 0) coins.P = p;
    return coins;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}

// function discountPrices(prices, discount) {

//     const discounted = [];
//     const length = prices.length;

//     for(let i = 0; i < prices.length; i++) {
//         const discountedPrice = prices[i] * (1-discount);
//         discounted.push(discountedPrice);
//     }

//     // console.log(i);
//     console.log(length);

//     console.log(discounted);
//     return discounted;
// }

// discountPrices([100, 200, 300], 0.5);

function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2)}, 1000);
    setTimeout(function() {console.log(3)}, 0);
    console.log(4);
}

printNums();
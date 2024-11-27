const assets = 
    [
        {
            //replace by real values
            name: "exemple asset 1",
            firstTakeProfitLevel: 123,
            quantity: 321    
        },
        {
            name: "exemple asset 2",
            firstTakeProfitLevel: 456,
            quantity: 654      
        },
    ];

let result = "";
let allProfits = [];

assets.map((actif) => {
    let takeProfitLevel = actif.firstTakeProfitLevel;
    let quantity = actif.quantity;
    let remainingQuantity = quantity;
    let thisAssetProfits = 0;
    for (let i = 0; i <= 10; i++) {
        let quantityToSell = 0.25 * remainingQuantity;
        let profit = quantityToSell * takeProfitLevel;
        thisAssetProfits = thisAssetProfits + profit;
        result = result + (actif.name + " x " + takeProfitLevel.toFixed(4) + " (" + Math.floor(quantityToSell * takeProfitLevel) + "$)\n");
        remainingQuantity = remainingQuantity - quantityToSell;
        takeProfitLevel = takeProfitLevel + (takeProfitLevel * 0.05);
    }
    result = result + "Restant : " + remainingQuantity + " " + actif.name + "\n";
    result = result + "Total : " + thisAssetProfits + "$\n\n";
    allProfits.push(thisAssetProfits);
});

console.log(result);
console.log(allProfits.reduce((a, b) => a + b, 0) + "$");




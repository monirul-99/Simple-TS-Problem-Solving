// 1 Convert the following JavaScript array into a TypeScript tuple
// const userInfo = [101, "Ema", "John", true,  , "2023"];
let myTuple : [number, string, string, boolean, any, string]
myTuple=[101, "Ema", "John", true,  , "2023"]
// console.log(myTuple);

// 2 Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
function funcCheckBothArray(one: number[], two: number[]): number[] {
    const bothSiteAvailable = [];

    for (const valueOne of one) {
    for (const valueTwo of two) {
        if (valueOne === valueTwo) {
        bothSiteAvailable.push(valueOne);
        break;
        }
    }
    }

    return bothSiteAvailable;
}


console.log(funcCheckBothArray([1, 2, 3, 4, 5],[2, 4, 6, 8]));
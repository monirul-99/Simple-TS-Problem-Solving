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
// console.log(funcCheckBothArray([1, 2, 3, 4, 5],[2, 4, 6, 8]));

// 3 You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

//Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
interface IProduct {
    id: number
    name : string
    price : number
    category: string
}
function filterProductsByCriterion<T extends keyof IProduct>(
    products: IProduct[],            // category: "Category 1"  Match
    criterion: T, //category            category: "Category 2"  Failed
    value: IProduct[T] // Category 1    category: "Category 1"  Match
): IProduct[] {
    return products.filter(product => product[criterion] === value);
}
const products: IProduct[] = [
    { id: 1, name: "Product 1", price: 10, category: "Category 1" },
    { id: 2, name: "Product 2", price: 20, category: "Category 2" },
    { id: 3, name: "Product 3", price: 30, category: "Category 1" },
];
const filteredProducts = filterProductsByCriterion(products, "category", "Category 1");
// console.log(filteredProducts);

// 4 Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type Product = [string, number, number]; // Tuple type alias

function calculateTotalCost(products: Product[]): number {
  let totalCost = 0;
  for (const [productName, price, quantity] of products) {
    totalCost += price * quantity;
  }
  return totalCost;
}
const productOne: Product[] = [
    ["Product A", 10, 2],
    ["Product B", 15, 3],
    ["Product C", 5, 10]
  ];
  
  const totalCost = calculateTotalCost(productOne);
  
//   console.log(`The total cost of all products is ${totalCost}.`);
  

// 5 Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

function sumEvenNumbers(numbers: number[]): number {
    return numbers
      .filter(num => num % 2 === 0) // Filter even numbers
      .reduce((sum, num) => sum + num, 0); // Calculate sum using reduce
  }
  

//   console.log(sumEvenNumbers([12, 12, 12, 13]));

// 6 Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

  interface Person {
    name: string;
    age: number;
    email: string;
  }
  
  function findPersonByEmail(people: Person[], email: string): Person | null {
    for (const person of people) {
      if (person.email === email) {
        return person;
      }
    }
    return null; // Return null if no match is found
  }
  

  const people: Person[] = [
    { name: "John", age: 25, email: "john@example.com" },
    { name: "Jane", age: 30, email: "jane@example.com" },
    { name: "Bob", age: 35, email: "bob@example.com" },
  ];
  
  const emailToFind = "jane@example.com";
  const foundPerson = findPersonByEmail(people, emailToFind);
  
//   if (foundPerson) {
//     console.log(`Found person with email ${emailToFind}:`, foundPerson);
//   } else {
//     console.log(`No person found with email ${emailToFind}.`);
//   }
  

// 7 Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

function findMinMax(...nums: number[]): [number, number] {
    let min = nums[0];
    let max = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i];
      }
      if (nums[i] > max) {
        max = nums[i];
      }
    }
  
    return [min, max];
  }
  
  const numArray = [1, 5, 3, 8, 2];
  const [minValue, maxValue] = findMinMax(...numArray);
  
//   console.log(`Minimum value: ${minValue}`);
//   console.log(`Maximum value: ${maxValue}`);
  

// 8 Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

function logColor(color: "red" | "green" | "blue", uppercase?: boolean): void {
    if (uppercase) {
      console.log(color.toUpperCase());
    } else {
      console.log(color.toLowerCase());
    }
  }
  
  logColor("red"); // outputs "red"
  logColor("green", true); // outputs "GREEN" in uppercase
  logColor("blue", false); // outputs "blue" in lowercase
  
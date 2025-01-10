// console.log("Arrays Lab")
// referrenced geeksforgeeks.org and Google

// #1
const foods = [];  

console.log (foods);


// #2
foods.unshift("pizza")
foods.push("cheeseburger")

console.log(foods)


//  #3
foods.unshift("taco")

console.log(foods)


//  #4
const favFood = foods.at(1)

console.log(favFood)


//  #5
foods.splice(2, 0, "tofu")

console.log(foods)


//  #6
foods.splice(1, 1, "sushi", "cupcake")

console.log(foods)


// #7
const yummy = foods.slice(1,3)

console.log(yummy)


// #8
foods.indexOf(2)

let soyIdx = foods.indexOf("tofu")

console.log(soyIdx)


//  #9
let allFoods = foods.join(" -> ");

console.log(allFoods)


//  #10
const hasSoup = foods.includes("Soup")

console.log (hasSoup)


//  #11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = []

let start = 5
let end = 100

for (let i = 0; i <= 100; i++) {
    if (nums[i] >= start && nums[i] <= end && nums[i] % 2 !== 0){
        odds.push(nums[i])
    }

  }
  console.log(odds);

   /* how to make number that are odd go in odd */


//  #12
const fizz = []

for (let num of nums) {

    if (num % 3 === 0)

    fizz.push(num)
}

const buzz = []

for (let num of nums) {

    if (num % 5 === 0)

        buzz.push(num)
}

const fizzbuzz = []

for (let num of nums) {

    if (num % 3 === 0 && num % 5 === 0)

    fizzbuzz.push(num)

}

console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


//  #13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length - 1]

console.log(numList);


//  #14
const num = numArrays [2][1]

console.log(num);


//  #15
let total = 0

numArrays.forEach(subArray => {
    subArray.forEach(num => {

        total += num
    })
    
});

console.log(total);

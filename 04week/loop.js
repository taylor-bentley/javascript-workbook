//Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = ['honda', 'toyota', 'bmw', 'jeep', 'ford', 'tesla']

const showEachCar = (objArr) => {
  for (let i = 0; i < objArr.length; i++) {
    console.log(objArr[i]);
}

//for...in loop Create an object (an array with keys and values) called persons with the following data: firstName: "Jane"; lastName: "Doe"; birthDate: "Jan 5, 1925"; gender: "female"
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
}

//Use a for...in loop to console.log each key.
const showEachKey = (objArr) => {
  for (const key in objArr) {
    console.log(key);
  }
}
showEachKey(persons);

//Then use a for...in loop and if state to console.log the value associated with the key birthDate.
const showEachKeyValue = (objArr, objName) => {
  for (const key in objArr){
    key === objName ? console.log(objArr[key])
  }
}
showEachKeyValue(persons, 'birthDate')

//while loop Use a for loop to console.log the numbers 1 to 1000.
const showOneToOneThousand = () => {
  let x = 1
    while ( x < 1001 ) {
        console.log(x);
        x++;
  }
}
showOneToOneThousand();

//do...while loop Use a do...while loop to console.log the numbers from 1 to 1000.
const showWithDoWhileLoop = () => {
  let x = 1
    do {
        console.log(x);
        x++
    } while (x < 1001);
}
showWithDoWhileLoop();

//When is a for loop better than a while loop?
//*It is better to use a for loop when you know how many iterations will occur, whereas a while loop is better used when you dont know the number of iterations that will occur.

//How is the readability of the code affected?
//*The syntax differs, depending on what object we are manipulating. A for loop stores a variable to scope, and uses (i < x) and (i++).  The While syntax looks for a condition and code block.

//What is the difference between a for loop and a for...in loop?
//*A for loop cycles through arrays. A for...in loop is used for objects.

//What is the difference between a while loop and a do...while loop?
//*The while loop will execute when the condition is true. The do...while loop will execute the until the condition is false.

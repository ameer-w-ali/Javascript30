// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Wes"
let name2 = name
console.log(name,name2);
name ="wesley"
console.log(name,name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;
console.log(players,team);
team[3]='Lux'
console.log(players,team);

// and we want to make a copy of it.

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
 const team2 = players.slice();
 const team3 = [].concat(players);
 const team4 = [...players];
 const team5 = Array.from(players)
 team2[3] = 'honey'
 console.log(players,team2)
// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 99;
captain.age = 12;
console.log(captain,person)
// how do we take a copy instead?
const cap2 =Object.assign({},person,{number:99, age:12});
console.log(cap2,person);
// We will hopefully soon see the object ...spread
const cap3 = {...person}
console.log(cap3)

const cap4 = JSON.parse(JSON.stringify(person))

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
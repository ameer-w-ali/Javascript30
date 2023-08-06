const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello')
// Interpolated
console.log(`hello my name is %s`,`ameer`)
// Styled
console.log('%c I am some great text', 'color:red');
// warning!
console.warn('warning');
// Error :|
console.error('error');
// Info
console.info('I am running fine')
// Testing
console.assert(1===2, 'not equal')
// clearing
console.clear();
// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);
// Grouping together
console.clear();
dogs.forEach(dog =>{
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd()
})
// counting
console.count('Wes');
console.count('Wes');
console.count('hello');
console.count('Wes');
console.count('Wes');
// timing
console.time('fetching');
fetch('https://api.github.com/users/wesbos')
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    console.timeEnd('fetching')
  })

//table
console.table(dogs)
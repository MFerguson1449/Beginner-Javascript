// console.log('It works!');

// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// const inchToCM = inches => inches * 2.54;

// const add = (a, b = 3) => a + b;

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// (function(age) {
//   console.log('Running the Anon function');
//   return `You are cool and age ${age}!`;
// })(10);

// Methods!!!
const wes = {
  name: 'Wes Bos',
  sayHi() {
    console.log('Hey Wes');
    return 'Hey Wes';
  },
};

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');
console.log(button);

function handleClick() {
  console.log('Great Clicking!!');
}
button.addEventListener('click', handleClick);

// Timer Callback
setTimeout(function() {
  console.log('DONE!! Time to eat!');
}, 1000);

// alert('Hello World');
// console.log ('Hello World');
// console.warning ('Hello world')
// console.error ('Hello World')

// let, const
// let age = 30; //declearation and initialization
// age = 31;

// console.log(age);

// let score;

// score =  10;

// console.log ( score);

//Data Types
// String, Numbers, Boolean, null, undefined, Symbol

// const name = 'Josh';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y  = undefined;
// let z;

// console.log (typeof age, rating, isCool, x, y, z)

// const name = 'Josh';
// const age = 30;

// //Concatenation- Template string
// const hello = `My name is ${name} and i am ${age}`;

// console.log (hello);

//String properties and methods
// const s = 'Technology, computers, IT, code';
// console.log(s.length)
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5). toUpperCase());
// console.log(s.split(', '));

//Arrays
//   const numbers = new Array(1,2,3,4,5);
//   console.log(numbers);

//   const fruits = ['apples', 'oranges', 'pears', '10', 'pineapple'];

//   fruits[4] = 'grapes';

//   fruits.push('mangos');

//   fruits.pop();

//   fruits.unshift('strawberries');

//   console.log(fruits);

//   console.log(Array.isArray('hello'));

//   console.log(fruits.indexOf('oranges'));

//Object Literals
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['movies', 'music', 'chess', 'sports'],
//     address: {
//         stree: '50 main st',
//         city: 'Boston',
//         state: 'MA'

//     }
// }
 

// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);


// const {
//     firstName, lastName, address: {city}
// } = person;

// console.log (city);

// person.email ='omogoyejuwon@gmail.com';

// console.log(person.email)

const todos = [
    {
    id: 1,
    text:' Take out trash',
    isCompleted: true  
    },
    {
    id: 2,
    text:'Meeting with boss',
    isCompleted: true  
    },
    {
    id: 3,
    text:'Dentist appt',
    isCompleted: false  
    },
];

// const todoJson = JSON.stringify(todos);
// console.log(todoJson);
//console.log(todos[1].text);

//For
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[2].text);
// }

//While
// let i = 0;
// while (i < 10) {
//     console.log(`While loop number: ${i}`);
//     i++;
// }

// for( let todo of todos) {
//     console.log(todo[text, id]);
// }

//High order array methods

//forEach, map, filter
// todos.forEach(function(todo){
//     console.log (todo.text);
// });


// //map
// const todoText = todos.map(function(todo){
//     return todo.text;
// })

// console.log(todoText);


// //fileter
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text
// })

// console.log(todoCompleted);

// const x = 4;
// const y = 10;

// if (x === 10) {
//     console.log('x is 10');
// }else if(x > 10) {
//     console.log('x is greater than 10')
// }
// else {
//     console.log ('x is less than 10');
// }

// if(x > 5 || y > 9) {
//    console.log('x is more that 5 or y is more than 10') 
// }
// if(x > 5 && y > 10) {
//    console.log('x is more that 5 or y is more than 10') 
// }

//Tenary Operator
// const x = 9;

// const color = x > 10 ? 'red' : 'blue';

// console.log(color);

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//         case 'blue':
//             console.log('color is blue');
//             break;
//             default:
//                 console.log('coloris Not red or blue');
//                 break;
// }

// function addNums(num1, num2) {
//     return(num1 + num2);
// }
// console.log(addNums(5, 3));

//Arrow function
// const addNums = (num1=1, num2=1) => num1 + num2;

// console.log(addNums(5, 5));

// todos.forEach((tode) => console.log(todo));

//Object Oriented Programming
//constructive function
// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     // this.getBirthYear =  function () {
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function () {
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getBirthYear = function () {
//      return this.dob.getFullYear();
//     }


// Class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


// // Instantiate Object
// const person1 = new Person('john', 'Doe', '4-3-1980');
// const person2 = new Person('Juwon', 'Samson', '4-3-1987');

// // console.log(person1);
// // console.log(person2.firstName);
// // console.log(person2.dob.getFullYear());
// // console.log(person1.getBirthYear());
// // console.log(person1.getFullName());

// console.log(person2.getFullName());
// console.log(person1);


// Single Element Selectors
//console.log(document.getElementById('myform'));
// console.log(document.querySelector(''));


// Multiple element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// How to loop through
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));
//console.log(window)

// Manipulating the DOM
// const ul = document.querySelector('.items');
// //ul.remove();
// //ul.lastElementChild.remove()
// //ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1> Hello World!</>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#myform').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     //console.log(e.target.className)
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1> Hello </h1>'
// });

const myForm = document.querySelector('#myform');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

   // console.log (nameInput.value);

   if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
   msg.innerHTML = 'Please enter all fields';

   setTimeout(() => msg.remove(), 2000);
   }else{
    //console.log('Success')
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li)

    // clear field
    nameInput.value = '';
    emailInput.value = '';
   }
}
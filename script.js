"use strict";

// const num = new Function(3);
// console.log(num);



// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function(){
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 33);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);



// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }


// User.prototype.exit = function(name) {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const davron = new User('Davron', 36);
// const dilya = new User('Dilya', 32);

// davron.exit();

// davron.hello();
// dilya.hello();

// console.log(davron);
// console.log(dilya);



// const number = new Number (10);

// console.log(number);


// const number = new Function (10);

// console.log(number);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello my name is ${this.name}`);
    };
}


const davron = new User('Davron', 28);

const alex = new User('Alex', 33);
console.log(davron);
console.log(alex);
console.log(davron.hello());
console.log(alex.hello());

User.prototype.come = function() {
    console.log(`Пользователь ${this.name} пришел`);
};

davron.come();



function somePeople(surname, age) {
    this.surname = surname;
    this.age = age;
    this.sayGoodBye = function() {
        console.log(`Now I will say to ${this.surname} goodBye`);
        console.log(`Now I will say to ${this.surname} goodBye`);
    };
}

const human1 = new somePeople('Davron', 34);
const human2 = new somePeople('Albert', 45);

console.log(human1);
console.log(human2);

human1.sayGoodBye;



function User(name, id) {
    this.name = name; 
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 32);
console.log(ivan);
console.log(alex);
ivan.hello();

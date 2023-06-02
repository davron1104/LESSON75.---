"use strict";

const num = new Function(3);
console.log(num);



function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(){
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 33);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);



function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}


User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`);
};

const davron = new User('Davron', 36);
const dilya = new User('Dilya', 32);

davron.exit();

davron.hello();
dilya.hello();

console.log(davron);
console.log(dilya);
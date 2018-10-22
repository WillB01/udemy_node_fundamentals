const square = x => x * x;
console.log(square(2));

const user = {
    name: 'Bengt',
    sayHi(){
        console.log(arguments);
        // console.log(`H1. I'm ${this.name}`);
    }
};

console.log(user.sayHi());

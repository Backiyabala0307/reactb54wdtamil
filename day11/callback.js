// function sub(a, b) {
//     return a - b;
// }

// function div(a, b) {
//     return a / b;
// }

// function result(a, b, operate) {
//     return operate(a, b);
// }

// console.log("subtraction", result(10, 5, sub));
// console.log("division", result(4, 2, div));

let name;
let getname = (cb) => {
    setTimeout(() => {
        name = "backiya";
        cb();
    }, 3000);
};

let greet = () => {
    console.log(`hello ${name}`);
};

getname(greet);
// greet();
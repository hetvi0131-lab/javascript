// function
// what --> task. function is a block of code that performs a specific
// why -> reusable. to avoid code repetition and to make code modular and
// how --> function keyword, name, parameters, body, return statement

// // type of functions:
// // function name (params) {} function declaration
// function abc() {}
// // let fnc = function (){} --> function expression
// let fnc = function () {};
// // let fnc = () => {} --> arrow function -> fat arrow function
// let fnc1 = () => {};

// function temp_cart() {
// console.log("Adding Producat");
// }
// temp_cart();
// temp_cart();
// temp_cart();

// // parameters vs arguments
// // parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// // arguments are the real values passed to the function (args function call karti () ni andar lakheli(pass) kareli values)

// function cart (product) {
// // product params
// console.log("product", product)
// }

// cart("mobile"); // mobile - args
// cart("laptop");
// cart("tablet");

// function cart (product,price) {
// // product params
// console.log("product", product ,"price", price)
// }

// cart("mobile", 20000); // mobile - args
// cart("laptop", 50000);
// cart("tablet", 35000);


// // convert into function expression
// // let cart = function(){}
// let cart1 = function (producat) {
// // product -- params
// console.log("product " , producat)
// }
// cart1("Mobile"); // mobile
// cart1("Laptop");
// cart1("Tablet");

// // convert into arrow function
// let cart2 = (producat) => {
// }
// cart2("Mobile"); // mobile args
// cart2("Laptop");
// cart2("Tablet");

// // Default, rest and spread parameters in function
// // default
// function abc(v1, v2){
// console.log(v1, v2);
// }
// abc(20, 21);
// function cart3 (product="product", price="price") {
// console.log(product, price)
// }
// cart3()

// // rest --> Jyare function ma multiple arguments pass karva to vadhare params banava
// // pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ...)
// // jo function na parameter vadhare hoy to andar lakhvana aave chhe)

// function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
//     console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
// }

// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function cart4(...product) {
//     console.log(product);
// }

// cart4("p1", "p2", "p3", "p4", "p5");

// function abcd1(a,b, ...numbers) {
//     console.log(a,b, numbers);
// }

// abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

// function abcd2(v1, v2, ...numbers) {
//     console.log(v1, v2, numbers);
// }
// abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// return or early return
// return --> function mathi value bahar mokalva mate

function getValue(value) {
    if (value < 25) return "Value is less than 25";
    else if (value < 50) return "Value is less than 50";
    else if (value < 75) return "Value is less than 75";
    return "Value is 100 or more";
}

let result = getValue(80);
console.log(result);


// function can be passed as arguments to other functions
// let fnc = function(){}
// fnc(function(){})

function abc1(v1, v2) {
    console.log(v2);
    return v1();
}

abc1(function () {
    console.log("first class function");
}, "Hello");


function abc2(v1, v2) {
    console.log(v2);
    return v1();
}

abc2(function () {
    console.log("first class function");
}, "Hello");



// function can be returned from another function

function abc() {
    return function () {
        console.log("function within function");
    };
}

abc()();   // calling returned function


function abc2() {
    return () => {
        console.log("arrow function within function");
    };
}

abc2()();  // calling returned arrow function



// higher order function (HOF)
// function that takes another function as an argument or returns a
// function as a result (eva function je return kare ek function athava
// accept kare ek function params ma)

// function abcd(val){ val(); }
// --> abcd(function(){ console.log("hello"); })

// function abcd(val){}  --> higher order function

// function abcd(){ return function(){} } abcd()()  --> higher order

// pure vs impure function
// pure function --> function je same input par same output aapse ane
// koi bahar na state ne modify na kare (pure function --> je function
// bahar na state ne modify na kare)

let a = 20;
function change_a() {
    return "a not change(pure function) " + a;
} // -- pure function

console.log(change_a());

// impure function --> function je same input par different output
// aapse athava bahar na state ne modify kare (impure function --> je
// function bahar na state ne modify kare)

function change_a1() {
    a+=2;
    return "a change (impure function)" + a;
}
console.log(change_a1());


// closure function
// function je potana parent function na variables ne access kari
// shake (return thava valo function use karshe parent function na koi
// variable) (function within function)

function outer() {
    let outer_var = "Outer Function Variable";
    function inner() {
        console.log(outer_var);
    }
    inner();
}

outer();


// lexical scope --> nested function can access variables declared in their outer scope

function outer1() {
    let outer_var = "Outer Function Variable";
    function inner1() {
        console.log(outer_var);
        let inner_var = "Inner Function Variable";
        function most_inner() {
            console.log(outer_var);
            console.log(inner_var);
        }
        most_inner();
    }
    inner1();
}

outer1();



// Array -- Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]

// create
// variable_name = [values]
let arr = [1, 2, 3, 4];

// access
// position = [0 1 2 3]
// access
// array_name[position / index]
arr[0]

// modify
// array_name[position] = new value
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;


// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array -- place it into last

let a = [1, 2, 3, 4, 5];

// variable || function.method --> koi variable ke function in pachh
a.push(700, 200);
a.pop();

// use case -- enter new producats into existing producats list


// pop --> remove last value into array

let b = [10, 20, 30, 40];
b.pop(1);
b.push(50);
b.shift(2);

// use case -- remove last producat you add into your list

// shift -- remove first value into Array

let c = [10, 20, 30, 40];
c.shift();
// use case -- remove old producat automatic after sometimes


// unshift -- add value into array -- first

let d = [52, 35, 65, 85];
d.unshift(20, 25);

// use case -- add a value into top of that data you receive

// splice - remove value into array -- specific position and
// specific number of values

// into () - first index(position), how many value you want to remove

let e = [50, 60, 30, 40, 10];
e.splice(1, 4);
// e.splice(3, 0, 50, 100)

let E = ["red", "green", "blue", "yellow"];
E.splice(1, 2);

// use case -- select msg and remove multiple msg at on click


// slice - copy values from array -- specific position and
// specific number of values

// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy

let f = [100, 50, 25, 0];
temp_f = f.slice(1,3);
// let new_f = f.slice(1, 3);

let F = ["red", "green", "blue", "yellow"];
F.slice(1, 2);

// use case -- copy specific data and save it into new variable
// generate a report based on data and generate a file or save the


// reverse -- reverse value of array

let g = [25, 30, 35, 40, 85];
// g.reverse();

let G = [100, 250, 400, 350];
G.reverse();

// use case -- show latest update first into your fronted


// sort -- set into ascending order

let h = [50, 20, 80, 10, 40];
// h.sort();

let H = [100, 250, 400, 350];
H.sort();
H.reverse().sort();

let h1 = [11, 62, 3, 4, 25];
let sr = h1.sort(function(a, b){
    return a - b; // ascending order
})

let tasks = ['Wake up', 'Brush teeth'];
tasks.push("buy milk");

let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();

let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();

let playlist = ['Song B', 'Song C'];
playlist.unshift('song A');

let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'john', 'sara');

let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekday = days.slice(5, 8);

let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();

let scores = [45, 12, 78, 34, 89];
scores.sort();

let prices = [199, 49, 999, 299, 149];
let pri = prices.sort(function(a, b){
    return a - b; // ascending order
})

let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let pro = products.splice(0, 3);

let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse(). push('final steps');

let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception')
movies.shift()
movies.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);

let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);

let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();

let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');

let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);

let arr2 = [1, 2, 3];
arr2.push(arr2.shift());

<!-- task-1 -->

<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Error </p>
<p>Why : Cannot access 'nm' before initialization </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: Error</p>
<p>Why : undefined</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{  
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: Answer 2</p>
<p>Why : priority of block scope</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: Inside: 20 , Outside: 10 </p>
<p>Why : let is not change the value </p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: </p>
<p>Why : enter the object than change the value  and without the add object otherwise not change the value</p>
</div>
      
<br>
<hr>
<br>
<h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error: 1</p>
</div>

<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error: 1 </p>
</div>


<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error:  1212</p>
</div>


<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error: false </p>
</div>


<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error: 11</p>
</div>


<!-- task-2 -->



<h3>Example 1 :</h3>
<p>true + false </p>
<p>1 + 0 = 1 ans is 1</p>
<p> why: true is 1 and false is 0 </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>ans is 1</p>
<p> why: null is 0 and 1 is 1 </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>ans is '1212'</p>
<p> why: is considerd as a mixed that two values </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>ans is false</p>
<p> why: undefined is a false value in JavaScript, and !! converts it to its boolean form </p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>"12" - 1 = 11</p>
<p> why: - is considerd string </p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>

</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
</div>

<!-- task-3 -->

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p> output : Both are greater than 5
    why : Because x and y both satisfy the condition > 5, the if statement executes its true branch.
    </p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Output: Access granted
    Reason: isAdmin true hai aur OR (||) operator me ek condition true hona kaafi hai.
</p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Output: Pleasant day
    Reason: temp > 30 true tha, lekin ! (NOT) operator ne use false bana diya, isliye else wala block run hua.
</p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Output: Falsy value
Reason: JavaScript me 0 ek falsy value hoti hai, isliye if(a) condition false ho gaya aur else block run hua.
</p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Output: Grade: C
Reason: score = 78 hai, 90 aur 80 se kam hai lekin 70 se zyada hai, isliye ternary operator ne grade ko "C" assign kiya.
</p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<P>Output: Status: Gold
Reason: points = 120 hai jo 100 se bada hai, isliye ternary operator ne "Gold" assign kiya.
</P>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<P>Output: access: Deny
Reason: loggedIn true hai lekin hasToken false hai, aur && operator me dono true hone chahiye, isliye ternary operator ne "Deny" assign kiya.
</P>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<P>Output: 6
Reason: a++ post-increment operator hai; pehle a ki value 5 hoti hai aur increment ke baad 6 ho jati hai, isliye console me 6 print hota hai.
</P>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<P>Output: 9
Reason: ++a pre-increment operator hai; value pehle increment hoti hai (8 → 9), phir console me 9 print hota hai.
</P>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Output: 5 4
Reason: b++ post-increment hai — pehle value c me 4 jaati hai, phir b 5 ho jata hai.
</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Output: 5 5
Reason: ++b pre-increment hai — value pehle increment hoti hai (4→5), phir dono me 5 aata hai.
</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Output:
10
9
Reason: m-- post-decrement hai — pehle 10 print hota hai, phir value 9 ho jaati hai.
</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Output: 12
Reason: post-increment + pre-increment ka combined result 12 aaya.
</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Output:
101
101
Reason: ++likes increment karta hai aur function wahi return karta hai.
</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Output: Matched
Reason: count-- post-decrement hai — condition me 5 compare hua jo match ho gaya, phir count 4 ho gaya.
</p>
</div>


<!-- task-4 -->


<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<div>


<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<div>



<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<div>


<!-- task-5 -->


<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
<p>for (let i = 1; i <= 10; i++) {
    console.log(i);
     }</p>
</div>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
<p>let i = 10;
    while (i >= 1) {
    console.log(i);
    i--;
     }</p>
</div>

<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for(let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);
    }
}</p>
</div>


<!-- task-6 -->


## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p> Function declarations are hoisted and can be called before definition.
    Function expressions are not hoisted, so they cannot be called before definition.
</p>
</div>

<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err and Why</p>
<p> No Error 
    because function declaration used </p>
</div>

<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>Ans And How</p>
<p>Ans : a=3; b=5;
        a+b = 8;
    How : it's do addition of this arrow function
</p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans and why</p>
<p> Ans : Welcome User
    How : name is parameter , user is argument 
</p>
</div>

<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans, Err and Why</p>
<p> Ans : 1 2 Undifiend
    How : missing 1 argument </p>
</div>

<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans, Err and Why</p>
<p> Ans : Hello Guest
    Err : No Error
    How : No Argument passed, consider Default Value </p>
</div>

<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans, Err and why</p>
<p> Ans : (1, 2, 3, 4, 5)
    Err : No Error
    Why : REST Oprator che </p>
</div>

<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans, Err and Why</p>
<p> Ans : 1 output NaN & , 2 output ia 150
    Err : 1 Error because of Logical Error, 2 No Error
    Why : 1 logical error ne lidhe output NaN ave and 2 ma rest parameter che je value add kare che </p>
</div>

<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Ans And how</p>
<p> Ans : Checkage(16)
    How : condition True hoy to IF Otherwise Else
</div>

<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans and Why</p>
<p> Ans : Function f() {
    return;
}
    How : Return ni under koi value pass nathi karavni aetle undefault function call thay
</div>


<!-- task-7 -->


// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push("buy milk");
Ans :  ['Wake up', 'Brush teeth', 'buy milk']
Why : push thi value add thay


// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
Ans : ['Email', 'Message']
Why : last value remove thay


// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
Ans : ['Customer2', 'Customer3']
Why : remove first value


// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift('song A');
Ans : ['song A', 'Song B', 'Song C']
Why : Add first value


// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'john', 'sara');
Ans : ['Mike', 'john', 'sara', 'Emma', 'Sophia']
Why : 1 index remove , 1 value remove and add two value 


// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
Ans : ['Burger', 'Salad']
Why : 1 index remove and remove 2 value from starting index 1


// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekday = days.slice(5, 8);
Ans : ['Saturday', 'Sunday']
Why : add new array and start first index and end last index


// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
Ans : ['Hard', 'Medium', 'Easy']
Why : use to reverse order


// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort();
Ans : [12, 34, 45, 78, 89]
Why : value set the assending order


// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
let pri = prices.sort(function(a, b){
    return a - b; // ascending order
})
Ans : [49, 149, 199, 299, 999]
Why : create a function to sort lowest to highest prices


// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let pro = products.splice(0, 3);
Ans : ['Laptop', 'Phone', 'Tablet']
Why : display first 3 array


// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
ans:colors.splice(2, 1, 'Purple', 'Orange')
Why : 2 index remove , 1 value remove and add two value 


// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse(). push('final steps');
Ans : ['Step 3', 'Step 2', 'Step 1', 'final steps']
Why : push thi value add thay


// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))


// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception')
movies.shift()
movies.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
Ans :  ['Gladiator', 'Inception', 'Titanic']
Why : push add kare, shift first value remove kare, sort value ne accending kare 


// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);
Ans : [1, 4]
Why : 1 index value, remove 4 value


// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
Ans : [10, 20, 30, 40]
Why : start index and end index


// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
Ans : ['c', 'b', 'a'];
Why : revers value


// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
Ans : ['x', 'new', 'y', 'z']
Why : add new in index 1


// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
Ans : [300, 400]
Why : nagaive value last value thi calculate thay 


// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
// b) Keep the original array unchanged


// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
Ans :  [2, 3, 1]
Why : shift thi first value remove kari ppush thi last value add thay



<!-- task-8 -->


<!-- JavaScript – Interview‑Style Practice Questions (Beginner → Advanced) -->
/*****************************************************
 🟢 VARIABLES & DATA TYPES (1–15)
*****************************************************/

let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;

// 1
console.log(a == "a");   // true (value check)
console.log(a === "a");  // true (value + type same)

// 2
console.log(b == c);   // true (string "10" → number 10)
console.log(b === c);  // false (string !== number)
// ERROR REASON: == does type coercion, === does not.

// 3
b = Number(b);
console.log(b === c); // true

// 4
console.log(d === undefined); // true

// 5
if (d == null) console.log("d is null or undefined");
if (e == null) console.log("e is null or undefined");

// 6
console.log(null == undefined);  // true
console.log(null === undefined); // false

// 7
console.log(c + "10"); // "1010" (string concat)
console.log(c + Number("10")); // 20 (fixed)

// 8
let result = c / "a";
console.log(Number.isNaN(result)); // true

// 9
let num1 = Number("10");
let num2 = +"10";

// 10
let str1 = String(c);
let str2 = c.toString();

// 11
console.log(Boolean(0)); // false
console.log(!!"hello");  // true

// 12
const pi = 3.14;
// pi = 3; ❌ ERROR: Assignment to constant variable

// 13
let x = 5;
let y = x;
y = 20;
console.log(x); // 5 (unchanged)

// 14
console.log(0 == false); // true (coercion)

// 15
console.log("5" === 5); // false (fixed using strict equality)



/*****************************************************
 🟢 OPERATORS (16–30)
*****************************************************/

// 16 Even without %
let n = 4;
console.log((n & 1) === 0);

// 17 Max without if or Math.max
let m1 = 5, m2 = 9;
let max = m1 > m2 ? m1 : m2;

// 18 Calculator
function calc(a,b,op){
  if(op==="+") return a+b;
  if(op==="-") return a-b;
  if(op==="*") return a*b;
  if(op==="/") return a/b;
}

// 19 Default
let username = null;
console.log(username ?? "Guest");

// 20
let age = 18;
let status = age>=18 ? "Adult":"Minor";

// 21
let marks = 85;
let grade = marks>=90?"A":marks>=75?"B":"C";

// 22
true && console.log("Executed");

// 23
console.log(false && "Won’t run");

// 24
console.log("5" == 5);  // true
console.log("5" === 5); // false

// 25
let val = null;
console.log(val ?? "Default");

// 26
console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0

// 27
let arr1=[1,2], arr2=[3,4];
let merged=[...arr1,...arr2];

// 28
function sumAll(...nums){
  return nums.reduce((a,b)=>a+b,0);
}

// 29
let copy=[...arr1];
copy.push(99);

// 30
console.log(2+3*4); // 14 (multiplication first)



/*****************************************************
 🟡 CONTROL FLOW (31–45)
*****************************************************/

// 31
function gradeSys(m){
 if(m>=90) return "A";
 else if(m>=75) return "B";
 else return "C";
}

// 32
function gradeSwitch(g){
 switch(true){
  case g>=90: return "A";
  case g>=75: return "B";
  default: return "C";
 }
}

// 33
switch(2){
 case 1: console.log("One");
 case 2: console.log("Two"); // fall-through
}

// 34
let user="admin", pass="123";
if(user==="admin"){
 if(pass==="123") console.log("Login success");
}

// 35
if(user==="admin" && pass==="123") console.log("Login success");

// 36
if(true && true) console.log("Both true");

// 37
if(age>18 || age===18) console.log("Valid");

// 38
let choice=1;
switch(choice){
 case 1: console.log("Start"); break;
 case 2: console.log("Stop"); break;
}

// 39 Missing break shows fall-through

// 40 if-else equivalent of switch done above

// 41
let num=50;
if(num>=1 && num<=100) console.log("In range");

// 42
function test(val){
 if(!val) return "Invalid";
 return "Valid";
}

// 43
let light="red";
switch(light){
 case "red": console.log("Stop"); break;
 case "green": console.log("Go"); break;
}

// 44
let rain=true;
if(rain) console.log("Take umbrella");

// 45
function divide(a,b){
 if(b===0) return "Cannot divide by zero";
 return a/b;
}



/*****************************************************
 🟡 LOOPS (46–60)
*****************************************************/

// 46
for(let i=1;i<=100;i++) console.log(i);

// 47
for(let i=2;i<=100;i+=2) console.log(i);

// 48
for(let i=1;i<=10;i++){
 if(i===5) break;
}

// 49
for(let i=1;i<=10;i++){
 if(i%3===0) continue;
}

// 50
let sum=0;
for(let i=1;i<=5;i++) sum+=i;

// 51 Reverse number
let numRev=123, rev=0;
while(numRev>0){
 rev=rev*10+numRev%10;
 numRev=Math.floor(numRev/10);
}

// 52 Count digits
let count=0,temp=12345;
while(temp>0){ count++; temp=Math.floor(temp/10); }

// 53 Factorial
let fact=1;
for(let i=1;i<=5;i++) fact*=i;

// 54 Fibonacci
let f1=0,f2=1;
for(let i=0;i<5;i++){
 let next=f1+f2;
 f1=f2; f2=next;
}

// 55 Break nested
outer: for(let i=0;i<3;i++){
 for(let j=0;j<3;j++){
  break outer;
 }
}

// 56 continue shown above

// 57 Multiplication
for(let i=1;i<=10;i++) console.log(5*i);

// 58 Infinite loop fix
let k=0;
while(k<5){ k++; }

// 59 for vs while → for when count known

// 60
[1,2,3].forEach(n=>console.log(n));



/*****************************************************
 🟡 FUNCTIONS (61–80)
*****************************************************/

// 61
function sum(a,b){ return a+b; }

// 62
const sumArrow=(a,b)=>a+b;

// 63
function greet(name="Guest"){ return name; }

// 64
function outer(){ return function(){ return "Inner"; } }

// 65
function run(fn){ fn(); }

// 66
function process(cb){ cb("Done"); }

// 67 Pure
function add(a,b){ return a+b; }

// 68 Side effect
let counter=0;
function inc(){ counter++; }

// 69 Recursion
function factRec(n){
 if(n===1) return 1;
 return n*factRec(n-1);
}

// 70 Iterative
function factIter(n){
 let r=1;
 for(let i=1;i<=n;i++) r*=i;
 return r;
}

// 71
function total(...args){
 return args.reduce((a,b)=>a+b,0);
}

// 72
function hof(fn){ return fn(5); }

// 73 Closure
function counterFn(){
 let c=0;
 return ()=>++c;
}

// 74 Counter
let cnt=counterFn();

// 75 Currying
const multiply=a=>b=>a*b;

// 76 Memoization
function memo(){
 let cache={};
 return function(n){
  if(cache[n]) return cache[n];
  return cache[n]=n*n;
 }
}

// 77
function safe(a){
 if(typeof a!=="number") return "Invalid";
 return a*2;
}

// 78 Arrow doesn’t have own this

// 79 Run once
let once=(function(){
 let done=false;
 return function(){
  if(!done){ done=true; console.log("Run"); }
 }
})();

// 80 DRY
function square(n){ return n*n; }



/*****************************************************
 🔵 ARRAYS (81–101)
*****************************************************/

let arr=[1,2,3,4,5];

// 81
arr.reduce((a,b)=>a+b,0);

// 82
Math.max(...arr);

// 83
[...new Set([1,2,2,3])];

// 84
let sorted=[...arr].sort((a,b)=>b-a);
let second=sorted[1];

// 85
arr.filter(n=>n>0);

// 86
arr.map(n=>n*n);

// 87
arr.reduce((c)=>c+1,0);

// 88
arr.filter(n=>n>2).map(n=>n*2).reduce((a,b)=>a+b,0);

// 89
arr.find(n=>n>3);

// 90
arr.some(n=>n>4);

// 91
arr.every(n=>n>0);

// 92
let [first,...rest]=arr;

// 93
[...arr,...[6,7]];

// 94 Deep clone
JSON.parse(JSON.stringify(arr));

// 95 Bubble sort
function bubble(a){
 for(let i=0;i<a.length;i++){
  for(let j=0;j<a.length-1;j++){
   if(a[j]>a[j+1]){
    [a[j],a[j+1]]=[a[j+1],a[j]];
   }
  }
 }
 return a;
}

// 96 Rotate
function rotate(a){
 return [...a.slice(1),a[0]];
}

// 97 Flatten
function flat(a){
 return a.reduce((acc,val)=>
  Array.isArray(val)?acc.concat(flat(val)):acc.concat(val),[]);
}

// 98 Custom map
Array.prototype.myMap=function(cb){
 let res=[];
 for(let i=0;i<this.length;i++){
  res.push(cb(this[i],i,this));
 }
 return res;
}

// 99 Custom filter
Array.prototype.myFilter=function(cb){
 let res=[];
 for(let i=0;i<this.length;i++){
  if(cb(this[i])) res.push(this[i]);
 }
 return res;
}

// 100 Custom reduce
Array.prototype.myReduce=function(cb,acc){
 for(let i=0;i<this.length;i++){
  acc=cb(acc,this[i]);
 }
 return acc;
}

// 101 FINAL BOSS
let final = arr
 .filter(n=>n%2===0)
 .map(n=>n*10)
 .reduce((a,b)=>a+b,0);

console.log(final);

<!-- JavaScript Core Concepts – Interview Questions (Beginner → Advanced) -->
# JavaScript Interview Q&A (Beginner to Advanced)

---

# 🟢 BEGINNER LEVEL (1–20)

## Q1. Variables

`var` is function-scoped and can be re-declared.
`let` is block-scoped and can be reassigned.
`const` is block-scoped and cannot be reassigned.

---

## Q2. Data Types

Primitive types:

* string
* number
* boolean
* undefined
* null
* bigint
* symbol

---

## Q3. Type Checking

Use `typeof` operator.

```js
typeof variable;
```

---

## Q4. Operators

`==` compares values (type coercion allowed).
`===` compares value and type (strict comparison).

---

## Q5. Arithmetic Operators

```js
let x = 10;
console.log(x + 5 * 2);
```

Output: `20`
Reason: Multiplication happens before addition.

---

## Q6. String Concatenation

```js
console.log('5' + 2);
```

Output: `'52'` (number converts to string)

---

## Q7. Boolean Logic

```js
console.log(true && false);
```

Output: `false`

---

## Q8. Functions

A function is a reusable block of code used to perform a task.

---

## Q9. Function Call

```js
function add(a, b) {
  return a + b;
}
add(2, 3);
```

Output: `5`

---

## Q10. Arrays

```js
let arr = [1, 2, 3];
```

---

## Q11. Array Access

```js
const arr = [10, 20, 30];
console.log(arr[1]);
```

Output: `20`

---

## Q12. Objects

An object stores data in key-value pairs.

---

## Q13. Object Access

```js
const user = { name: 'A', age: 20 };
console.log(user.age);
```

Output: `20`

---

## Q14. Control Flow

An `if` statement runs code only if a condition is true.

---

## Q15. Condition Check

```js
let x = 5;
if (x > 3) console.log('Yes');
```

Output: `Yes`

---

## Q16. Loops

A loop repeats code multiple times.

---

## Q17. for Loop

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

Output:

```
0
1
2
```

---

## Q18. while Loop

Use `while` when the number of iterations is unknown.

---

## Q19. Increment Operator

```js
let a = 5;
a++;
console.log(a);
```

Output: `6`

---

## Q20. Comments

Single-line:

```js
// comment
```

Multi-line:

```js
/* comment */
```

---

# 🟡 INTERMEDIATE LEVEL (21–35)

## Q21. Scope

Block scope means variables declared with `let` or `const` exist only inside `{}`.

---

## Q22. Hoisting

Hoisting moves variable and function declarations to the top of their scope before execution.

---

## Q23. Undefined vs Null

`undefined` = variable declared but not assigned.
`null` = intentional empty value.

---

## Q24. Truthy & Falsy

Falsy values:

* false
* 0
* ''
* null
* undefined
* NaN

---

## Q25. Functions vs Arrow Functions

Arrow functions:

* No own `this`
* Shorter syntax

---

## Q26. Parameters vs Arguments

Parameters = variables in function definition.
Arguments = values passed when calling.

---

## Q27. Return Keyword

If no return → function returns `undefined`.

---

## Q28. Array Methods

`push()` adds to end.
`pop()` removes from end.

---

## Q29. Loop vs Array Methods

Use loops for complex control.
Use array methods for cleaner functional style.

---

## Q30. Object Iteration

```js
for (let key in obj) {
  console.log(key, obj[key]);
}
```

---

## Q31. Break & Continue

`break` stops loop.
`continue` skips current iteration.

---

## Q32. Comparison Operators

```js
console.log(0 == false);  // true
console.log(0 === false); // false
```

---

## Q33. Ternary Operator

```js
status = age >= 18 ? 'adult' : status;
```

---

## Q34. Array Destructuring

Extract values from array into variables.

```js
let [a, b] = [1, 2];
```

---

## Q35. Spread Operator

Copies or merges arrays.

```js
let newArr = [...arr];
```

---

# 🔵 ADVANCED LEVEL (36–50)

## Q36. Closures

A closure remembers variables from its outer scope.

```js
function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
```

---

## Q37. Execution Context

Environment where JS code runs (Global & Function context).

---

## Q38. Call Stack

Stack that manages function execution order (LIFO).

---

## Q39. Pass by Value vs Reference

Primitives copy by value.
Objects/arrays copy by reference.

---

## Q40. Shallow vs Deep Copy

Shallow copy copies references.
Deep copy creates fully independent copy.

---

## Q41. Higher-Order Functions

A function that takes or returns another function.

---

## Q42. Callback Functions

A function passed as an argument to another function.

---

## Q43. Immutability

Prevents unexpected data changes and improves predictability.

---

## Q44. Event Loop

Mechanism that handles asynchronous operations in JS.

---

## Q45. Synchronous vs Asynchronous

Synchronous runs line by line.
Asynchronous runs tasks without blocking execution.

---

## Q46. forEach vs map

`forEach()` executes function but returns nothing.
`map()` returns a new array.

---

## Q47. == Interview Trap ⭐

```js
console.log([] == []);
```

Output: `false`
Reason: Different references.

---

## Q48. typeof Interview Trap ⭐

```js
console.log(typeof null);
```

Output: `'object'` (historical JS bug)

---

## Q49. NaN Check

```js
Number.isNaN(value);
```

---

## Q50. FINAL INTERVIEW QUESTION 

JavaScript execution flow:

1. Global Execution Context created.
2. Memory phase (hoisting).
3. Code execution line by line.
4. Functions pushed to Call Stack.
5. Async tasks handled by Web APIs.
6. Event Loop moves callbacks to Call Stack when ready.

---
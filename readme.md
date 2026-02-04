
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
Why : push thi value add thay


// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
Why : last value remove thay


// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
Why : remove first value


// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift('song A');
Why : Add first value


// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'john', 'sara');
Why : 1 index remove , 1 value remove and add two value 


// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
Why : 1 index remove and remove 2 value from starting index 1


// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekday = days.slice(5, 8);
Why : add new array and start first index and end last index


// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
Why : use to reverse order


// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
Why : value set the assending order


// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
let pri = prices.sort(function(a, b){
    return a - b; // ascending order
})
Why : create a function to sort lowest to highest prices


// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let pro = products.splice(0, 3);
Why : remove first 3 array


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
Why : 


// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
// b) Keep the original array unchanged




// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
Ans :  [2, 3, 1]
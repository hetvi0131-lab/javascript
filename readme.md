
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
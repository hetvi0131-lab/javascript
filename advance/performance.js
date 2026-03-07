// performance-optimizations:

// bebouncing --> jyare thame koi action(events like mouse hover,
// input, click etc) and you don't want to fire a event or perform
// action(ex. like you don't want to print on console every time when
// you enter somthing in your input field)

// you define a delay and when that delay come the function will
// be run(you got a reaction)

let btn = document.querySelector("button");
let body = document.querySelector("body");

function changecolor(delay){
    setTimeout(() => {
        body.style.backgroundColor = "black";
    }, delay);
}

btn.addEventListener("click", () => {
    changecolor(3000);
});

let inp = document.querySelector("input");

function print(fnc, delay) {
    let timer;
    return function (...agrs) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fnc(...agrs);
        }, delay);
    };
}

inp.addEventListener(
    "input",
    print(function () {
        console.log("debounce", inp.value);
    }, 500),
);

// throttle --> intercal par chalse, action jo chalu rahe and tame ek interval set kareli chhe to, te interval event fire these (chalse)

function throttleprint(fnc, delay){
    let timer = 0;
     return function (...agrs) {
       let now = Date.now();
       if(now - timer >= delay){
        timer = now;
        fnc(...agrs);
       }
    };
}

inp.addEventListener(
    "input",
    throttleprint(function () {
        console.log("throttle", inp.value);
    }, 2000),
);

// === why website is slow?? ====
// causes:
// app becomes slow over time
// ram usage keeps increasing
// browser tab crashes
// multiple duplicate event triggers
// big size images

// how to stop
// 1. image loading -- lazy loading
// lazy loading functions
const lazy = new IntersectionObserver(
    
)
// 2. big js file
// 3. reflows and repaints
// 4. memory leaks

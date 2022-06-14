
//JavaScript Methods

// splice
let arr = [1,2,3,4,5]
arr.splice(0,2,9,8)
console.log(arr)

// slice
let arr2 = [1,2,3,4,5,6]
console.log(arr2.slice(2,5));  // [3,4,5]
console.log(arr2);      // [1,2,3,4,5,6]

// concat
let arr12 = arr.concat(arr2);
console.log(arr12);

// join
arr2.join();
console.log(arr2);

// split
console.log('Mir Baloch'.split(''));

// include
console.log(arr2.includes(1))

// indexof
console.log(arr2.indexOf(2));

// lastIndexOf
console.log(arr2.lastIndexOf(3));

// toString
console.log(arr2.toString());

// min
console.log(Math.min(1,2,3,4));

// max
console.log(Math.max(8,6,5,4,9));

// object.keys
console.log(Object.keys(arr2));

// object.values
console.log(Object.values(arr2));

// call() method accepts arguments in an arguments
const person = {
    fullName : function(city, country){
        return this.firstName +" "+ this.lastName +" "+ city +" "+ country;
    }
}

const person1 = {
    firstName :"Mir",
    lastName :"Baloch ,"
}

let result  = person.fullName.call(person1, "Sui ,", "Pakistan")
console.log(result);


// apply() method accepts arguments in an array:
const guy = {
    address : function(city, country){
        return this.fName +" "+ this.lName +" "+ city +" "+ country;
    }
}

const guy1 = {
    fName :"Mir",
    lName :"Hussain ,"
}

let r  = guy.address.apply(guy1, ["Sui ,","Balochistan"]);
console.log(r);

// trim(): remove space from start and end
let str = " Mir Hussain";
console.log(str);
console.log(str.trim(""));

// replace: replace Hussain by Baloch
console.log(str.replace("Hussain","Baloch"));



// replaceAll: remove all the spaces
console.log(str.replaceAll("M","R"));



// int to string
let num = 123;
num = num.toString();
console.log(typeof(num));


// toUpper() and toLower()
console.log(str.toUpperCase());
console.log(str.toLowerCase());


// toFixed();
console.log(5.3.toFixed()) // 5
console.log(5.3.toFixed(2)) // number into string 5.5


// parseFloat();
str1 = '123.56mir'
console.log(parseFloat(str1));   // 123.56


// Number
let n = Number('123mir');  //NaN
let n1 = Number('123');  //123

console.log(n);
console.log(n1);


//shorthand of number : search on google
let sn = +'123.45';
console.log(sn);


// 2+ +'3' and 2-'3' and 2+'3'
console.log(2+ +'3');
console.log(2-'3');
console.log(2+'3');



// foreach
arr.forEach(function(currentItem, index, array){
    console.log(index, '=>', currentItem, array);
})


// arrow function
let myFunction = (a,b) => a*b;
console.log(myFunction(2,4));


// anonymous  function
const x = function(a,b) {return a+b};
let  z = x(4,6);
console.log(z);


// IIFE : immediatly invoked function expression
var userName = "Bill";

(function (name) {

    function display(name)
    {
        alert("MyScript2.js: " + name);
    }

    display(name);
})(userName);

// warn
console.warn("Wow Very Dangreous (warn)");

// error
console.error("Wow Very Error (error)");


// confirm

<button onclick="myFunction()">Try it</button>

function myFunction() {
  confirm("Press a button!");
}


const M = console.log;
M("Mir")

console.log({} == {})  // false

// pass by value

function passByvalue(val){
    return val*val;
}

let num2 = 10;
console.log(passByvalue(10));
console.log(num2);  // num will not be affected


// pass by reference

function passByreference(array){
    array[0] = 99;
    return array; }

let arr3 = [1,2,3,4]
console.log(arr3); // orignal array
console.log(passByreference(arr3)); // affected array



// setTimeout
console.log('one');
setTimeout(function(){
    console.log('setTimeout');
},2000)

console.log('three');

// setInterval
setInterval(function(){
    console.log('setInterval')
},1000)



// Higher order function

function HOF(func){
       
        func()
        console.log("other funcion is in Higher order function")
    }
    
    function otherFunction(){
        console.log("This is other function")
    }
    
    HOF(otherFunction)

    // closure

    function Counter() {
        var counter = 0;
    
        function IncreaseCounter() {
            return counter += 1;
        };
    
        return IncreaseCounter;
    }


    var counter = Counter();
console.log(alert(counter()));
console.log(alert(counter()));
console.log(alert(counter()));
console.log(alert(counter()));


function bahirwala(){
    let a=4;
    return function doSome(){
        let b=5;
        return a+b;
    }
}

let r1 = bahirwala()
console.log(r1);


Error('Error')
ReferenceError("a is not declared")
SyntaxError("; missing")
TypeError("let a = undefined \n a.sum()")
RangeError("when a number is outside an allowable range of values.")

throw new RefrenceError('Data Entry Error')
throw new SyntaxError('Data Entry Error')
throw new TypeError('Data Entry Error')
throw new RangeError('Data Entry Error')

// map

var arr4 = [1,2,3,4,5];
var r2 = arr4.map((itm,i,a)=>{
    return 2*itm;
})

console.log(r2);



// map

var arr5 = [1,2,3,4,5];
var r0 = arr5.map((itm,i,a)=>{
    return 2*itm;})
console.log(r0);


// filter
var ages = [34,45,21,32,22,55]

function findAge(age){
    return age >= 30; }

var rr = ages.filter(findAge);
console.log(rr);


// reduce
var r3  = ages.reduce((pre,curr)=>pre+curr);
console.log(r3);

// sort
var r4  = ages.sort((a,b)=>a-b); // return in asecending
console.log(r4);

var r5  = ages.sort((a,b)=>b-a); // return in desecending
console.log(r5);


// split and sort into array
let Fullname = 'Dev Mir';
console.log(Fullname.split('').sort());

// split, sort then reverse into array
console.log(Fullname.split('').reverse());



//some: retrn boolean value true if some values in array is even otherwise false
var arr6 = [1,21,13,41,5,16];
console.log(arr6.some(itm => itm%2==0));


// every: return true if all values is satisfy this condition
console.log(arr6.every(itm => itm%2==1))


// find: return if found
function findVal(val){
    return val>10;
}
console.log(arr6.find(findVal));



// fill
console.log(arr6);
console.log(arr6.fill(100,4,6));  //Fill the last two array elements with 100


// from: Array.from() method returns an array from any iterable object.
var Farr = [345,23,45,65,23]
console.log(Array.from(Farr));


const fieldNumber = 3;
const myObject = {
    field1:5,
    field2:10,
    ['field${fieldNumber}']:15
    
}
console.log("Hi Mir");
console.log(myObject.field3);












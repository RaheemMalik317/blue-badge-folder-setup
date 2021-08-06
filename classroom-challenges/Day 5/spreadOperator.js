/* 
 - SPREAD OPERATOR

        - The spread operator pulls out all elements in an array and gives them bak to you as a standalone list of elements.
        - It takes in an iterable object and object and expands it into individual elements. The spread operator is commonly used to make copies.
            -Allows to mainpulate both arrarys and objects
        - Denoted by the ellipsis (...)
*/

let students = ["Sterling", "Mitch"];
// //Wrong SYNTAX 
// ...students//"Sterling", "Mitch"

// let copiedStudents = [...students];
let copiedStudents = [[...students]]
//the spread operator is good at making a new copy of that array.
//NOTE: that it is NOT doing this: [ [ 'Sterling', 'Mitch' ] ] 
//console.log(copiedStudents, students); // OutPut [ 'Sterling', 'Mitch' ] [ 'Sterling', 'Mitch' ]

console.log(copiedStudents, "Line 19");
students.push("Rodney");//Code happens from top to bottom. And we are pushing to the original array after using the spread operator.
console.log(students, "Line 21");


//MATH
console.log(Math.min(1, 5, -3));
const prices = [10.99, 5.99, 3.99, 6.57];
console.log(Math.min(prices));//NaN
console.log(Math.min(...prices));//3.99


//CONCATENATE ARRAYS
let sent1 = [1,2,3,4];
let sent2 = [5,6,7,8];
let concat = [...sent1, ...sent2];
console.log(concat); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]


//PASS ARGUMENTS
let sentence = ["Oh hi Mark", false, 2];

function sent(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

sent(...sentence) //Oh hi Mark
                  //false
                  //2


//COPY AN OBJECT
let obj = {a:1, b:2, c:3};
let copyObj = {...obj};
console.log(obj, copyObj);

//NOT THIS
let obj = {a:1, b:2, c:3}
let copyObj = {obj};
console.log(obj, copyObj);

//MERGE OBJECTS
let obj1 = {a:1, b:2, c:3, d:4};
let obj2 = {e:5, f:6, g:7, h:8};

let merge = {...obj1, ...obj2};
console.log(merge);

//NOTE
let obj1 = {a: "Hello", b:"Mark", c:"!"};
let obj2 = {d: "Goodbye"};

let obj3 = {...obj1, ...obj2}
console.log(obj3);//NOTE: When merging objects, If they have the same key, the latter object will take precedence.


//ERROR
let obj = {a:1, b:2, c:3};
let copyObj = [...obj];
console.log(copyObj);
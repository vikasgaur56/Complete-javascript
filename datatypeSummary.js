//Datatypes are divided into two types based on there storage and usage
// Primitive

// 7 types : String , Number , Boolean, null, undefined , symbol, bigint
const score=100;
const isLoggedin= false // boolean
const outsidetemp = null // completely empty
const id = Symbol('123')
const id2 = Symbol('123')

console.log(id===id2);

// Reference (non primitive)

// array,objects, functions : typeof these datatypes is object

let hero=['ironman','batman','superman'];
let obj={
    name:'vikas',
    age:'55'
}

console.log(typeof obj);
console.log(typeof null); //typeof null is object


// Stack (Primitive) ,Heap(Non-primitive)


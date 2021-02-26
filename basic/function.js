//Function declaration
function Test() {
 //console.log("Hi This is Test");
}
Test();
//function without parameter and returns
function TestReturn(name) {
    return `Hi i am ${name}`;
   }
 //console.log(TestReturn("test"));

 function PickMultiply5(value){
     if(value%5==0)
        return value;
     return "Function for you";
 }
 //console.log(PickMultiply5(250));
 //console.log(PickMultiply5(654));

 function IterableReturn(value){
     for(var i=0;i<value;i++){
         if(i%2==0){
             return i;
         }
     }
 }
 //console.log(IterableReturn(10));
//function with paramater
//function with two paramater
function With2Parameter(parm1,parm2){
    return parm1+parm2;
}
//console.log(With2Parameter('5','2'));
//function with many paramter
function ManyParameter(parm1, parm2,parm3){
    return parm1+parm2+parm3;
}
function ManyParameter(arr)
{
    let total=0
    for(var i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}
// console.log(ManyParameter([2,5,6,4,7,8,5,6,9,8,4,5,4,2]));
//function with unlimited number of parameter-regular & arrow
function unLimitedParamter(){
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
// unLimitedParamter(10,20,30,40,50);
unLimitedParamter();
// unLimitedParamter(20,"sdjhfks",true,[],{name:"test"},null,undefined)
//Anonymous fuction
//expresssion function
let test =function(){
    console.log("executed");
}
// console.log(test);

// console.log(test());
let calc ={
    add:function(value1,value2){return value1+value2;},
    sub:function(value1,value2){return value1-value2;},
    multiply:function(value1,value2){return value1*value2;},
};
// console.log(calc.add(10,20));

// console.log(test());

// let test=function(){
//     return "test";
// }

//self invoking function
(function(){
    // console.log("test")
})();

(function(n){
    // console.log(n+n);
})(10);

let addedValue =(function(n){
    return (n+n);
})(10);
// console.log(addedValue);

// let $ = (function(){
//     return function(n){
//         return n+10;
//     }
// })();
//arrow function
let arrow =(...args)=>{ 
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
 };
// console.log(arrow(20,"sdjhfks",true,[],{name:"test"},null,undefined));
var calc2 ={
    add : (a,b)=>a+b,
    sub:(a,b)=>a-b
}
//function with default paramter
function test2 (value=10){
    return value+100;
}
console.log(test2());
//fullname ->firstname-parameter lastname - "test" return firstname +lastname

function fullname(firstname){
    var Test=`${firstname} test`;
    return(Test);
}
//console.log(fullname("Deena"));

 
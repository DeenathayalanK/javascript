//scope
    /*var,let,const*/
    // var ---used for global and out side function (long term use)
    // let ---- short time usage 
    // const ---- fixed m/y mutable modify Permission 
    
    //local scope
    //global scope  
        // var test = "hey hi";   /*global scope */
        // function newF(){
        //     var hello="hello";  /* local scope*/
        //     console.log(hello);
        // }
        // newF();
        // console.log(test);

        /***** var Positives *******/
        //updattion and redclareation
        // var testupdate ="hello"
        // console.log(testupdate);
        // var testupdate="hey hi"
        // testupdate="hey hi"
        // console.log(testupdate);
        //hoisting 
         // undefined 
        // console.log(hello); 
        // var hello="hi hello";
         // not undefined 
        // console.log(hello); 
        
      /***** var Negatives *******/
        // var test ="hello";
        // var time = 5
        // if(time>4){
        //     var test =" hey hi ";
        // }
        // console.log(test)
//let
        // let test ="hello";
        // let time = 5
        // if(time>4){
        //     let test =" hey hi ";
        // }
        // console.log(test)
        //redeclare and update
        // let test2="test"
        //hoisting
        // console.log(test2)
        //  let test2 ="test2"
        //  console.log(test2); 
        // let test ="hello";
        // let time = 5
        // //chunk of blocks
        // if(time>4){
        //     // let test =" hey hi ";
        //     console.log(test);
        // }
        // console.log(test)  
        //const
        // const test ="hello";
        // const time = 5
        // if(time>4){
        //         const test =" hey hi ";
        //         console.log(test); //hey hi
        //         {
        //             const test ="test"
        //             console.log(test) //test
        //         }
        //     }
        //     console.log(test)  //hello
        //test.name="test";
        // test={name :"test1"};
    //window scope
    //closure - later
//object
    //empty object
    const test ={}
    //object values
    //retriving value from object
        //dot notation
            // test.name="test"
            // test.name="testwwww"
        //bracket notation
            // test[`name`]="125646513"
            // let test1 ="no of student"
            // test[`${test1}`] =35
        // object of object
        // test.studentDetail={
        //     name:"john"
        // }
        // test.GetNofStdents=function(){
        //     return this[test1]
        // }
        // test.firstName="john";
        // test.lastName="michle"
        // test.GetFullName=function(){
        //     return `${this.firstName} ${this.lastName}`;
        // }
    
    //create objewct method
        //object key svalue
         test.firstName="john";
        test.lastName="michle"
        test.GetFullName=function(){
            return `${this.firstName} ${this.lastName}`;
        }
        // console.log(test);
        // console.log(Object.keys(test));
        // Object.keys(test).forEach(element => {
        //     if(typeof test[element] === 'function')
        //         console.log(test[element]())
        //         else
        //         console.log(test[element])
        // });
        //object value
        test.hobbies=["eating","running"]
        // console.log(test);

        // console.log(Object.values(test));

        //object entris
        // console.log(Object.entries(test))
        //own property
        // console.log(test.hasOwnProperty("firstName") && test["firstName"])
    //delete object
    // console.log(test);
    // console.log(delete test["hobbies"]);
    // console.log(test);

    //clone object
//json
// const test1 =JSON.parse(JSON.stringify(test));
const test1 = Object.assign({},test)
console.log("test",test)
 test1.firstName="mark"
console.log("test1",test1)
console.log("test",test)
//pass by value
//pass by refernce
// function modifyTest(value){
//     console.log("value",value);
//     value.mdofiyFunction="i am changed and updated";
//     console.log("value",value);
// }
// const test1 =test; 
// modifyTest(test)
// console.log("test",test)

// const value1 ="testte";
// function modifyString(value){
//     console.log("value",value);
//     value="test44"
//     console.log("value",value);
// }
// modifyString(value1)
// console.log("value1",value1);

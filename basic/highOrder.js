//high order Function
    //callback
    // const square =(n)=>{
    //     return n*n;
    // }
    // const add=(n)=>{
    //     return n+n;
    // }
    // function cube(callback,n){
    //     return callback(n)*n;
    // }
    // // console.log(square(2));
    // console.log(cube(square,3));
    // console.log(add(3));
    //returning function
        // const highOrder=(n)=>{
        //     const doSomething=(t)=>{
        //         const doWhatEver =(s)=>{
        //             return s*t*n;
        //         }
        //         return doWhatEver;
        //     }
        //     return doSomething;
        // }
        // console.log(highOrder(10)(25)(30))
    //closure
    // function outerFunction(){
    //     let count=0;
    //     function innerFunction(){
    //         count++;
    //         return count;
    //     }
    //     return innerFunction;
    // }
    // const innerFunc=outerFunction();
    // console.log(outerFunction()());//1
    // console.log(outerFunction()());//2
    // console.log(outerFunction()());//3
    // console.log(outerFunction()());//4
    // console.log(outerFunction()());//5
    // function outerFunction(){
    //     let count=10;
    //     function plusOne(){
    //         count++;
    //         return count;
    //     }
    //     function minusOne(){
    //         count--;
    //         return count;
    //     }
    //     return {
    //         plusOne:plusOne,
    //         minusOne:minusOne
    //     }
    // }
    // const ticketCalc=outerFunction();
    // console.log(ticketCalc.plusOne());
    // console.log(ticketCalc.minusOne());
    // console.log(ticketCalc.minusOne());
    // console.log(ticketCalc.minusOne());
    //setting time
        //setinterval
        // function printHello(){
        //     let count=0
        //     function increment(){
        //         count++
        //         console.log(count)
        //     }
        //     // console.log("hello")
        //     return increment;
        // }
        // const counter=printHello()
        // setInterval(counter,5000)
        //settimeout
        // function printHello(){
        //     console.log("hello")
        // }
        // setTimeout(printHello,5000)
    //functional programming
        //map
        const fruits = ["apple","orange","pine","banana"];
        const user = [
            {
                firstName:"user",
                lastName:"test",
                age:27
            }, {
                firstName:"user1",
                lastName:"test",
                age:21

            }, {
                firstName:"user2",
                lastName:"test",
                age:32

            }, {
                firstName:"user3",
                lastName:"test",
                age:33

            }, {
                firstName:"user4",
                lastName:"test",
                age:25

            },
        ];
        // const test =[];
        // for(let item of user){
        //    test.push({
        //         ...item,
        //         fullName:`${item.firstName} ${item.lastName}`
        //     })
        // }
        // console.log(test)
        // user.forEach(element => {
            
        //         element.fullName=`${element.firstName} ${element.lastName}`
        //             });
        // console.log("foreach",user)
        function GetFullName(item){
             console.log(item);
            return { 
                ...item,
                fullname:`${item.firstName} ${item.lastName}`
            }
            
        }
    //    console.log(GetFullName(user));

        // function GetFullName(item){
        //     return {
        //         firstName:item.firstName,
        //         fullName:`${item.firstName} ${item.lastName}`
        //     }
        // }
        // function arrayToListOfObject(item){
            
        //     return {
        //         fruits:item
        //     }
        // }
        // // console.log(arrayToListOfObject(fruits));
        // // console.log(fruits.map(arrayToListOfObject))
        // console.log(user.map(GetFullName));
        const vavlue=[10,289,35,4564]
        function calcdiscount(item,index,array){
            // console.log("item => ",item)
            // console.log("index => ",index)
            // console.log("array => ",array)
            // // console.log(item -10);
            // console.log(item-10);
            return item-10;
        }
        //console.log(vavlue.map(calcdiscount));
        // console.log(vavlue);
        //forEach
        // console.log(vavlue.forEach(calcdiscount))
        // console.log(vavlue)
        //filter
        // console.log(user.filter((item)=>item.age>30));
        //reduce
        const number =[152,51,75,25,50,23,75]
        // console.log(number.reduce((prev,current,index)=>{
        //     console.log("previous", prev)
        //     console.log("current", current)
        //     console.log("index", index)
        //  return prev-current;
        // }));
        //every
        // console.log(number.every(item=>item%5==0));
        //some
        // console.log(number.some(item=>item%5==0));
        //find
        // console.log(number.find(item=>item%5==0));
        //findindex 
        console.log(number.findIndex(item=>item==75));

        //lasIndexoff
         console.log(number.lastIndexOf(75));

        //sort
        //console.log(number.sort());
            //string
            // console.log(number.sort((x,y)=>x-y));
            //number
            //object array
// error handling
    //try
    //catch
    //throw
    //finally


function getFull(){
    try {
        console.log("get full start try");
        let firstName="test";
        console.log(firstName +" "+lastName);
    } catch (error) {
        console.log("get full start catch");
        console.log(error);
        throw error;
        console.log("get full end catch");
    }
}
function user(){
    try{
        console.log("user start try")
        getFull();
        console.log("After error in try");
    }
    catch(error){
        console.log("start catch");
        console.log(error);
        console.log("end catch");
    }finally{
        console.log("finally executed");
    }
}
// user()




function getFull1(){
    try {
        console.log("get full start try");
        let firstName="test";
        console.log(firstName +" "+lastName);
    } catch (error) {
        console.log("get full start catch");
        console.log(error);
        throw "something went wrong";
        console.log("get full end catch");
    }
}
function checkAdult(age){
    try {
        console.log("get full start try");
        if(age<18)throw "not adult. you are restricted"
        else
        if(age>50)throw "super senior. you are restricted"
        else
        console.log("you are permitted");
    } catch (error) {
        console.log("get full start catch");
        console.log(error);
        throw error;
        console.log("get full end catch");
    }
}
function user1(){
    try{
        console.log("user start try")
        checkAdult(10);
        console.log("After error in try");
    }
    catch(error){
        console.log("start catch");
        console.log(error);
        console.log("end catch");
    }finally{
        console.log("finally executed");
    }
}
user1()
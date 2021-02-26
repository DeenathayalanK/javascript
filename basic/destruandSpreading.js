//Destructing and spreading
    //destruting array
        // const number = [1,2,3];
        // let [one,two,three]=[1,2,3];
        // console.log(one);
        // console.log(two);
        // console.log(three);
        //destructe iteration for array 
        let eatable = [["fruit","apple","sweet"],["fruit","orange","sour"],["vegatable","carrot","sweet"]]
        for(const [specification,item,taste] of eatable){
            // console.log(specification,item,taste);
        }
        // for(var item of eatable){
        //     // console.log(item)
        //         // console.log(item[0], item[1]);
        //         var specification = item[0];
        //         console.log(specification)
        // }
    //destructing object
    const student  = {
        name:"sam",
        // age:20,
        id:10,
    }
    // let {age,id,name} = student
    // console.log(name);
    // console.log(age);
    // console.log(id);
        //rename during structing
        // let {age: a ,id : studentId , name:fullName,rank : r =0 } = student
        // console.log(a);
        // console.log(studentId);
        // console.log(fullName);
        // console.log(r);
        //object parameter without destructing
        const getFullNameAndAge=function (student){ return `${student.name} ${student.age}`}
        // console.log(getFullNameAndAge(student));
        //object parameter with destructing
        const getFullAndAge =({name:Name,age:Age=21})=>{return `${Name} ${Age}`}
        // console.log(getFullAndAge(student));
        //object iterate using destructing
        let employee =[{
            name:"test",
            desination:"developer",
            type:"fullTime"
        },{
            name:"test1",
            desination:"developer",
            type:"contractor"
        },{
            name:"test2",
            desination:"tester",
            type:"part time"
        },
    ]
        for(const {name, desination, type:t} of employee){
            // console.log(name, desination, t);
        }
    //spread or rest operator "..."
    //spread operator to get the rest of array elements
    // const nums =[1,2,3,4,5,6,7]
    // let [one,two,...restNumbers]=nums;
    // console.log(one)
    // console.log(two)
    // console.log(restNumbers)
    //spread to use for copy array
    // const test = [1,2,2,3,4,5]
    // const values=[...test];
    // console.log(test)
    // console.log(values)
    // values.push(6)
    // console.log(test)
    // console.log(values)
    // const even =[2,4,6];
    // const odd =[1,3,5];
    // console.log([...even,...odd]);
    //spread to use for copy object
    const user ={
        "name":"deena",
        title:"softe enginer",
        "country name":"india"
    }
    const loginUser={
        authKey:500,
        ...user
    }
    const compiledUser={
        ...user,
        ...loginUser
    }
    console.log(loginUser)
    //spread operator with arrow function


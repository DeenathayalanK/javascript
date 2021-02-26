//SET
    //empty set
    const nnumbers =new Set();
    //set from array
    const language =["nodejs","c","c++","java","nodejs","javascript"]
    const setOfLanguage = new Set(language);
    //add a element in set
    setOfLanguage.add("c#");
    //delete element in set
    setOfLanguage.delete("javascript");
    // console.log(setOfLanguage)
    //checking
    // console.log(setOfLanguage.has("javascript"));

    //clearing
    setOfLanguage.clear()
    // console.log(setOfLanguage);

    //union
    const num=[1,2,3,4,5];
    const num1=[3,4,5,6,7];
    // let numUnion=[...num,...num1];
    // console.log(new Set(numUnion));
    //intersection
    const setofNum1=new Set(num1);
    const setofNum=new Set(num);
// console.log(num.filter(x=>setofNum1.has(x)));
    //difference
// console.log([...num.filter(x=>!setofNum1.has(x)),...num1.filter(x=>!setofNum.has(x))]);
//MAP
    //empty map
    const map =new Map()
    console.log(map);
    //map from array
    // var locat=[["lat","524.154","5456"],["lon","12.564"]]
    var user ={
        name:"test",
        age:12,
        group:"a"
    };
    const userArr=Object.entries(user);
    // console.log(userArr)
    const a=new Map(userArr);
    // console.log(a)
    //add values
    a.set(12,"user");
    a.set({auth:"2365"},true)
    a.set([1,2.4,25,1],true)
    console.log(a)
    //getting values
    console.log(a.get("age"));
    for(const [test,test1,test2=10] of a){
        console.log(test,test1,test2);
    }
    //check keys
    console.log(a.has(12));
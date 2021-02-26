//empty array
//console.log([]);
//array with value
//console.log([1]);
//array split
//console.log("dee na".split(" "))
//array using index 
var arr=[1,2,3,4,5,6,7]
//console.log(arr[0]);
//modying array
var a =[100,101,102,103]
//console.log(a[1]);
//console.log(a[5]);
//console.log(a);
a[5]=1056;
//console.log([1287389,"kejfdghjskd",[2983749,[92834789]]]);
//manipulating array
    //array constructor
        var ds=Array();
        //console.log(ds);
        var cons=Array(10);
        //console.log(cons);
    //static value 
        var cons1=Array(10).fill("test")
        //console.log(cons1);
    //concat
    var a1=[1,2,3]
    var a2=[4,5,6]
    //console.log(a1.concat(a2));
    //array length
    //console.log(a1.length);
    //checking array
        var checkArray=[1,2,34,5];
        var checa="[12,43,4354,23]"
        console.log(Array.isArray(checkArray));
    //array to string
    var ars=[1,2,3,4];
    console.log(ars.toString());
    var a =[1,2,3]
    var b=a;
    console.log(b);

    //sllice and splice
    a=[1,2,3,4,5,6]
    /*(6) [1, 2, 3, 4, 5, 6]
    a.slice(3,a.length);

    (3) [4, 5, 6]
    a.slice(3);

    (3) [4, 5, 6]
    a.slice(2);

    (4) [3, 4, 5, 6]
    a.slice(3);

    (3) [4, 5, 6]
    a.slice();

    (6) [1, 2, 3, 4, 5, 6]
    a.slice(0)
    (6) [1, 2, 3, 4, 5, 6]
    a.splice(3,1)
    [4]
    a
    (5) [1, 2, 3, 5, 6]*/
    //join array
    var a =[1,2,3,4,5];
    console.log(a.join("-"));
    //array add value - stack ds
    // push
    // pop
    a=[1,2,3,4]
    console.log(a.push(5))
    //remove values from array - stack ds
    console.log(a.pop())
    //add array 
    a=[1,2,3,4]
        console.log(a.unshift(10));
    //remove array 
    console.log(a.shift())
    //reverse array
    a=[1,2,3,4]
    console.log(a.reverse());
    //sorting array
    a=["react", "node", "angular"]
    console.log(a.sort())
//array of arrays
a=["test",["test","test"]]
console.log(a);
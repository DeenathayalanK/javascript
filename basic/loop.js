// var a =1

// while(a<1){
//     console.log(a++);
// }

// do {
//     console.log("do",a++)
// }while(a<1)

// for(var i=0;i<10;i++){
//     console.log(i);
// }

var fruits = ["orange", "apple", "banana"];

for (var fruit of fruits) {
  console.log(fruit);
}

var person = { Name: "test", age: 10, gender: "male" };

for (var item in person) {
    console.log(item);
}
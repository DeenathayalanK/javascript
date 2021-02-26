//class
    //class instance
    // class student{

    // }
    // const john = new student();
    // console.log(john);
    //class constructor
        //without paramater
        // class student{
        //     constructor(){
        //         console.log(this);
        //     }
        // }
        // const john = new student();
        // console.log(john);
        //with paramter
        //default parameter
        // class student{
        //     constructor(firstName="mike",lastName="miller"){
        //         this.firstName=firstName;
        //         this.lastName=lastName;
        //         console.log(this);
        //     }
        // }
        // const john = new student("test",'user');
        // const test = new student();
    //class methods
    //   class student{
    //         constructor(firstName="mike",lastName="miller"){
    //             this.firstName=firstName;
    //             this.lastName=lastName;
    //         }
    //         getFullName(){
    //             return `${this.firstName} ${this.lastName}`
    //         }
    //     }
    //     const test = new student("Hello",'user');
    //     const test1 = new student("phil",'alan');
    //    // const test = new student("test",'user');
    //     console.log(test.getFullName());
    //     console.log(test1.getFullName());
    //properties 
        //with intital vavlue
        // console.log(test1.firstName);
        // update value
        // test1.firstName="john"
        // console.log(test1.firstName);
        //getter
        //setter
    //   class student{
    //         constructor(firstName="mike",lastName="miller",age=18){
    //             this.firstName=firstName;
    //             this.lastName=lastName;
    //             this.age=age;
    //             this.score=0
    //         }
    //         getFullName(){
    //             return `${this.firstName} ${this.lastName}`
    //         }
           
    //         get IsAdult(){
    //             return this.age>18;
    //         }
    //         set upDateScore(pp){
    //             this.score+=pp;
    //         }
    //         set ReduceScore(score){
    //             this.score-=score;
    //         }
    //     }
        // const test = new student("Hello",'user',17);
        // console.log(test.getFirstName);
        // console.log(test.IsAdult);
        // test.upDateScore=10;
        // console.log(test.score);
        // test.upDateScore=20;
        // console.log(test.score); 
        // test.upDateScore=30;
        // console.log(test.score);
        // test.ReduceScore=20;
        // console.log(test.score);
    //static methods
      class DateTimeHelper{
        static getCurrentLocaleTime(){
            return new Date().toLocaleString().replace(",","").replace(/:.. /," ");
        }
        static getMyLocaleDate(date){
            return date.toLocaleString().replace(",","").replace(/:.. /," ");
        }
    }
      class ArrayHelper{
        static MergeTwoArrayWithOutDuplicate(a,b){
            return Array.from(new Set([...a,...b]))
        }
      }
      class CalculationHelper{
        static AddTwoNumbers(a,b){
            return a+b;
        }
      }
      console.log(DateTimeHelper.getMyLocaleDate(new Date("2020-12-12")));
      console.log(CalculationHelper.AddTwoNumbers(10,20));
      console.log(ArrayHelper.MergeTwoArrayWithOutDuplicate([1,2,3,4,5],[3,2,4,5,1,6,7]));
    //inherientance
        //overriding method
      
        class Person{
            constructor(firstName,city){
                this.firstName=firstName;
                this.city=city;
            }
            getFullName(){
                return this.firstName;
            }
        }
        class student extends Person{
            constructor(firstName,city,gender){
                super(firstName,city) /// Base class constructer Calling Function
                this.gender=gender;
            }
            getFullName(){
                return this.firstName;
            }
            getGender(){
                return this.gender;
            }
        }
        const test =new student("test","chennai","male")
        console.log(test.getFullName());
        console.log(test.getGender());
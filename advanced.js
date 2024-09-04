//spread operators

/*const globalPlayer={
    id:0,
    name:"bot",
    powerlevel:100,
};*/

//const player1= {...globalPlayer};      //spread Operator
/*const player1=Object.assign({},globalPlayer);  //method-2 object method
player1.powerlevel=50;

console.log(globalPlayer);
console.log(player1);*/

//immutable example

/*let mystring="nadeem";
let stringDupe=mystring;
stringDupe="fidu";
console.log(mystring);
console.log(stringDupe);*/


//spread operator with Array

//const globalPlayer1=["nadeem" , "fidu"];
//const globalPlayer2=["raja", "sherin"];

//player1=globalPlayer1.concat(globalPlayer2);   //joining using normal concat method
//const player1=[...globalPlayer1,...globalPlayer2];  //joining using spread operator
//const player2=[...globalPlayer2, "Raja Sherin"];    //pushing a new value
 

//console.log(player1);
//console.log(player2);
//console.log(globalPlayer1);
//console.log(globalPlayer2);


//array destructrising

//const array=["nadeem","raja"];
//const[first,second]=array;
//console.log(second);

//object destructurising

/*const she={
    id:0,
    name:"rajasherin",
    age:16,
};

const {name,id} = she; 
console.log(name,id); */

//Rest

/*const she={
    id:0,
    name:"rajasherin",
    age:16,
};
const{id,...rest}=she;
console.log(id);

console.log(rest);*/

/* Regular or normal functions

function sample(){
   console.log("Skyline");
}
sample(); */

//Arrow function

// let sample = () => console.log("GTR");
// sample();

//ForEach

// const she=[
//     {
//     id:0,
//     name:"raja",
//     age:16,
// },

// {
//     id:1,
//     name:"sherin",
//     age:16,
// },

// {
//     id:2,
//     name:"rajasherin",
//     age:16,
// },

// ];

// for(let i=0;i<she.length;i++){
//     console.log(she[i].name);              //normal way to print array using for loop
//}

// she.forEach(function(value,index,array){
// console.log(value.name);                        //using forEach method
// });

// she.forEach((value,index,array) => console.log(value.name));             //simplified code using arrow 

//Map

const she=[
    {
    id:0,
    name:"raja",
    age:16,
},

{
    id:1,
    name:"sherin",
    age:16,
},

{
    id:2,
    name:"rajasherin",
    age:16,
},

];

// const newArray=she.map((value) => value.name);
// console.log(newArray);

//Constructor Map

    // let val=new Map();
    // val.set("num",1)
    // val.set("nu",10)
    // console.log(val);

//if we do this same operation without map method.the synatax will be like this

// let newArray=[];
// for(let i=0;i<she.length;i++){
//     newArray.push(she[i].name);
// }
// console.log(newArray);

//filter 

// const newArray =she.filter((value) => value.age===16);
// console.log(newArray);

//reduce

// const arr=[1,2,3,27,10,5];
// let sum=0;
// const newArr=arr.reduce((sum,value) => value +sum,0);
// console.log(newArr);

//Find

// const myObj=she.find((value) => value.name==="rajasherin");
// console.log(myObj);

//Sort method

//const arr=[1,2,3,27,10,5,2006];
// const desc=arr.sort((a,b) =>b-a );                    //for Descending order
// console.log(desc);

// const asc=arr.sort((a,b) => a-b);
// console.log(asc);                                    //for Ascending order


//ES10

// const nestedArr=[27,[10,2006],27,2727];
// console.log(nestedArr.flat());

//Reduce without using arrow function

// const prices=[5,20,50,150,500];
// const total=prices.reduce(sum);
// console.log(`$ ${total.toFixed(2)}`);


// function sum(accumulator,value){
//     return accumulator+value;
// }

//JSON

// const sampleJSON=`{
// "id" : 1,
// "name" : "BMW",
// "model" : 2024
// }`;

// const parsedJSON= JSON.parse(sampleJSON);
// console.log(parsedJSON);

// console.log(sampleJSON);



// function sum(a,b){
//     // console.log(a+b);
//     c=a+b;
//     return c;
// }

//  let val=sum(10,17);
//  console.log(val);
 
// const numbers = [1, 2, 3, 4, 5];

// Higher-order function: map
// const doubled = numbers.map(function (num) {
//     return num * 2;
// });

// console.log(doubled); 



// function createMultiplier(multiplier) {
//     return function (num) {
//         return num * multiplier;
//     };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15


// function sample(output){
//     output();
// }

// function simple(){
//     console.log("skyline");
//     }

//     sample(simple);
    

//closure

// function outer(){

//  let mes="nadeem";

//     function inner(){
//        console.log(mes);
//     }
//     inner();
// }
// outer();


// function* cars(){
//     yield "BMW"
//     yield "GTR"
//     yield "Bugatti"
// }
// let fav=cars();
// console.log(fav.next().value);
// console.log(fav.next().value);
// console.log(fav.next().value);
// console.log(fav.next().value);

//function composition

// function add (a,b){
//     return a+b;

// }

// console.log(add(5,3));
// let sum=add(30,10);
// console.log(sum);


// let result=(m,n) =>console.log(n+m);
 
// //  result(10,20);

// let div=(a,b) =>{
//     let divide=a/b;
//     return multi (divide)
// }

// let multi =num => {
//     let multiplied=num*2;
//     return add (multiplied)
// }

// let add=num => {
//     let result=num+1;
//     return display(result)
// }

// let display=res=>{
//     console.log(res); 
// }

// div(4,9);


// let value=NaN;
// console.log(Number.isNaN (value));

//callback

// function sample(a,cb){
//     setTimeout(()=>{
//         let sum= 1000-a;
//         cb(sum)
//     },3000)
  
// }
// console.log("hello");

// function cb(sum){
//     console.log(sum);  
// }

// let a=20;

// sample(a,cb);

// console.log(1+5);

 
//function composition

// function sample(a){
// return a*2;
// }

// function add(val){
//   return val+2;
// }

// function compose(x){
//     return add(sample(x));
// }
// console.log(compose(5));

//function borrowing

// let obj={
//     firstName:"Nadeem",
//     lastName:"Mohammed",
//     printfFullName:function(){
//         console.log(this.firstName+ " "+this.lastName);
        
//     }
// }
// obj.printfFullName();

// let obj2={
//     firstName:"Mohammed",
//     lastName:"Pc",
// }
// obj.printfFullName.call(obj2);

//Call

// let printfFullName=function(){
//     console.log(this.firstName+ " "+this.lastName);
// }

// let name={
//     firstName:"Nadeem",
//     lastName:"Mohammed",
// };
// let name2={
//     firstName:"Raja",
//     lastName:"Sherin",
// };
// printfFullName.call(name);
// printfFullName.call(name2);

//This keyword in  global scope

// console.log(this);

//This keyword in function invokation

// function sample(){
//     console.log(this);
// }
// sample();

//This keyword in method invokation

// let obj={
//     name:"Skyline",
//     getName(){
//         console.log(this);        
//     },
// };
// obj.getName();

// function getName(){
//     console.log(this.name);
// }

// let obj1={
//     name:"GTR",
//     method:getName,
// };

// let obj2={
//     name:"BMW M5 CS",
//     method:getName,
// };

// obj1.method();
// obj2.method();

// function getName(){
//     console.log(this.name);  
// }

// let person1={
//     name:"Nadeem",
//     age:17,
// };

// let person2={
//     name:"Raja Sherin",
//     age:16,
// };

// getName.call(person1);
// getName.call(person2);

//Apply

    // function getName(para1,para2){
    //     console.log(this.name+" "+para1 +" "+para2);  
    //  }
     
    //  let person1={
    //      name:"Nadeem",
    //     age:17,
    //  };
    
    // let person2={
    //    name:"Raja Sherin",
    //     age:16,
    // };
    
    //  getName.apply(person1 ,["Mohammed","Pc"]);
    //  getName.apply(person2 ,["K","c"]);

    //Bind

    // function getName(){
    //         console.log(this.name);  
    //       }
         
    //     let person1={
    //         name:"Nadeem",
    //          age:17,
    //      };
        
    //    let person2={
    //        name:"Raja Sherin",
    //        age:16,
    //    };

    //    const newGetName=getName.bind(person2);
    //    newGetName();

    //Currying

    // function add(a){
    //     return function(b){
    //         return a+b;
    //     };
    // } 
    // console.log(add(1)(2));
    
    //another example with 3 arguments

    // function multi(a){
    //     return function(b){
    //         return function(c){
    //             return a*b*c;
    //         };
    //     };
    // };
    // console.log(multi(1)(2)(3));
    
    //Explicit type casting(Conversion)

    // let num=String(27);
    // console.log(typeof num, num);

//  function  sample(){
//     return new Promise((resolve,reject)=> {
//         let a=  fetch('https://jsonplaceholder.typicode.com/posts')
//         reject("err")
//     }) 
  
//  }    
//  async function binshad() {
//     try{

//         const b=await sample();
//         console.log(b);   
//     }
// catch(err){
// console.log(err);

// }
//  }
//  binshad();

//Finding unique elements using set method

// let array=[1,2,3,4,5,8,2,1,3,4];
// let sample=new Set(array);
// console.log(sample);

const obj={
    id:0,
    name:"sherin",
};
const{name,id}=obj;
console.log(name,id);

let me=function sm(){
    hbvdf
}


//promise syntax

let myPromise=new Promise((resolve,reject)=>{
   //resolve("Success");
   reject("Error");   
});
myPromise
.then((res)=>{
    console.log(res);
})
.catch((rej)=>{
    console.log(rej); 
});

//HOF
// const num=[1,2,3,5];
// const doubled=num.map(function(num){
//    return num*2;
// });
// console.log(doubled);





// let weather = "rainny"
// console.log(weather == "sunny" ? "school open" : "school close");
// function multiply(a:number,b:number){
//     return (a * b)
// }
// let result = multiply(10,10)
// console.log(result);

// let arrowFunction = (sub1:number,sub2:number) =>{
//     return (sub1 / sub2)
// }
// let answer = arrowFunction(100000,2000)
// console.log(answer);

// let myName = (firstName:string,lastName:string = "sumair")=>{
//     return `${lastName} ${firstName}`
// }
// let fullName = myName("khan")
// console.log(fullName);
// let age = 18;
// if(true){
//     console.log(age);
// }
// console.log(a); // undefined
// var a = 5;
// greet(); // Output: "Hello!"

// function greet() {
//     console.log("Hello!");
// }
// console.log(square); // Output: undefined
// console.log(square(2)); // Error: square is not a function
// var square = function(x) {
//     return x * x;
// };
//-----------------------------------------------------------------------------------------------
//   objects
// let carModels = {
//     name: "audi",
//     modelNumber: 2024,
//     color:"black"
// }
// console.log(carModels);
// Importing the functions from operations module
// import { add, minus, multiply, divide } from './operations';

// let calculator = () =>{
//     let a = 10;
//     let b = 5;
//     console.log(`addition ${add(a,b)}`);
//     console.log(`multiply ${multiply(a,b)}`);
//     console.log(`minus ${minus(a,b)}`);
//     console.log(`divide ${divide(a,b)}`);
// }
// calculator()
//---------------------------------------------------------------------------------------
// let user1 : {
//     name:string,
//     age:number,
//     role:string
// }
// user1 = {
//     name : "sumair khan",
//     age:2342,
//     role:"manager"
// }
// console.log(user1.role);       // this is the best way to write 

// let user1:any = {
//     name:"khan",
//     age:898,
//     model:"zero meter"
// }
// console.log(user1.model);

// type Generation = {
//     name:string,
//     model:number,
//     color:{
//         colorcar:string,
//         colorcar1:number
//     }
// }
// let cars:Generation = {
//     name:"audi",
//     model:2020,
//     color:{
//         colorcar:"black",
//         colorcar1:9832
//     }
// }
// console.log(cars.color.colorcar1);
// console.log(cars.color.colorcar);
// ----------------------------------------------------------------------------------------
//                    Type literals
// Type literals aapko allow karte hain ke aap variables ko specific aur fixed values tak restrict kar sakein, jo aapke code ko zyada predictable aur type-safe banata hai.
// type Person = {
//     name: "John" | "Jane";
//     age: 25 | 30 | 35;
//   };
  
//   let individual: Person;
  
//   individual = { name: "John", age: 25 }; // Valid
//   individual = { name: "Jane", age: 30 }; // Valid
//   individual = { name: "John", age: 40 }; // Error: Type '40' is not assignable to type '25 | 30 | 35'.
// let trafficLight1: 10 = 10;
// let trafficLight: "blue" = "blue";
// console.log(trafficLight1);
//------------------------------------------------------------------------------------------
//type unions multiple cheezen use kr sakhte hain
// let age:string | number = 2132
// console.log(age);

// let trafficLight: "red" | "pink" | "green" = "green"    // ye restrick hoo gai
// console.log(trafficLight);
// let trafficLight1:string | number = 13233               // is m kuch bhi use kr sakhte hain
// console.log(trafficLight1);
//-------------------------------------------------------------------------------------------
// type Student = {
//     name:string;
//     rollNumber:number
// }
// type teacher = {
//         name:string;
//         exp:number
//   }
// let students1:Student = {
//         name:"hamza",
//         rollNumber:1234
// }
// let teachers:teacher = {
//         name:"hamza",
//         exp: 4
// }

// let both1: teacher & Student = {
//         name:"Ahmed",
//         rollNumber:1234,
//         exp: 4
// }

// console.log(both1);
//-------------------------------------------------------------------------------
// let array = ["banana","grapes","kiwi"]
// console.log(array.indexOf("kiwi")); //
// console.log(array.length);
// console.log(array[1]);

// let vegetables = ["tomato","potato","onion","chilli"]
// vegetables.push("pudina")
// console.log(vegetables);


// let vegetables = ["tomato","potato","onion","chilli"]
// vegetables.pop()
// console.log(vegetables);


// let vegetables = ["tomato","potato","onion","chilli"]
// vegetables.unshift("pudina")
// console.log(vegetables);


// let vegetables = ["tomato","potato","onion","chilli"]
// vegetables.shift()
// console.log(vegetables);


// let vegetables = ["tomato","potato","onion","chilli","pudina"]
// let allVegetables = vegetables.slice(2, 3)      
// console.log(allVegetables);

//splice

// let vegetables = ["tomato","potato","onion","capsicum","carrot"]
// //  vegetables.splice(6, 0, "tomato")
//  vegetables.splice(1,3, "tomato")
// console.log(vegetables);

//------------------------------------------------------------------------------------
// enum Direction{
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// // let AllDirection = Direction.Down
// let AllDirection = Direction.Right
// console.log(AllDirection);
// console.log(Direction[3]);
// console.log(Direction["Left"]);

// enum Color{
//     Red = 1,
//     Yellow = 2,
//     Green = 3
// }
// let trafficLight: Color = Color.Green
// console.log(trafficLight === Color.Green ? "you can go" : "you can stop");
// if(trafficLight === Color.Green){
//     console.log("You Can Go");
// }else{
//     console.log("You Can Stop");
// }
//=======================
// this code show some error
// enum Color {
//     Red = 1,
//     Yellow = 2,
//     Green = 3
// }

// let trafficLight: Color = Color.Green;

// if (trafficLight === Color.Yellow) {
//     console.log("you can go");
// } else {
//     console.log("you can stop");
// }

// let dayOff = "Saturday"
// switch(dayOff){
//     case  "Saturday":
//         console.log("Go Hiking.");
//         break
//         case "Sunday":
//             console.log("Rest day");
//             break
//             default:
//                 console.log("Work Day")
// } 
// console.log(dayOff);
//=========================================================================================
//                 loops
// for(let i = 0; i<10; i++){
//     console.log("sumair");
    
// }
// for(let i = 0; i<30; i--){
//     console.log("sumair");
// }

// for(let i = 1; i<11; i++){
//               console.log(`10 * ${i} = ${i * 10} `);         
// }
// for(let i = 1; i<=10; i++){
//           let tableOf = 2
          
//           console.log(tableOf*i);
// }

// for(let i = 0; i<10; i++){
//                         console.log(10 -i);         
//     } ye print hoga
//10
9
8
7
6
5
4
3
2
1
// let friends = ["Sumair","ubaid","ammad"]
// for(let i=0; i<3; i++){
// console.log(friends[i]);
// }
// console.log(friends[0]);
// console.log(friends.length); // 3 values
// let friends = ["Sumair","ubaid","ammad"]
// for(let i=0; i<friends.length; i++){
// console.log(`hello ${friends[i]}`);
// }
// let vegetables = ["pudina","hara dhaniya","piyaz"]
// // for(let i = 0; i<3; i++){
// //     console.log(`le amma sb le aya ${vegetables[i]}`);
    
// // }
// for( let i = 0; i<vegetables.length; i++){
//     console.log(vegetables[i]);
    
// }
//---------------------------------------------------------------------------------

//  let myVar1: unknown = 12;
// console.log((myVar1 as number).toFixed(2));

// let sum = (...rest:number[]) =>{
//     console.log(rest);
    
// }
// sum(23,34,45,56)

// let sum = (...rest:number[]) =>{
//         let sum = 1
//         for(let i = 0; i < rest.length; i++){
//             sum *=rest[i]
//         }
//         console.log(sum);
// }
// sum(50,50,50)

// let add = (num1:any,num2:any):void =>{
//     return num1 + num2
// }
// let answer = add(23,23)
// console.log(answer);

// let myFun = () =>{
//     console.log("hey");
// }
// myFun()
// console.log("first");

// setTimeout(() => {
//     console.log("second");
    
// }, 5000);

// console.log("third");
//-----------------------------------------------------------------------------------------
// function orderPizza( makePizzaCb:any ){
// setTimeout(() => {
//       console.log("ordered pizza");
//       makePizzaCb ( packedPizza )
          
// }, 1000);
// }

// function makePizza(packedPizzaCb:any){
// setTimeout(() => {
//      console.log("prepared Pizza");
     
// }, 4000);
// }
// function packedPizza(){
// setTimeout(() => {
//     console.log("packed pizza");
    
// }, 10000);
// }
// function deleverPizza(){
//     setTimeout(() => {
//         console.log("deleverd!");
        
//     }, 15000);
//     }

// orderPizza(makePizza)
// packedPizza()
// deleverPizza()
//--------------------------------------------------------------------------------------------
// function orderPizza():Promise<string>{
//     return new Promise ((resolve,reject)=>{
//      setTimeout(() => {
//         let outOfStock = true
//         if(!outOfStock){
//             console.log("ordered pizza");
//             resolve("prepared pizza")
//         }else{
//             // console.log("out of stock");
            
//             reject()
//         }
        
//      }, 1000);
//     })
// }
// function makePizza(){
//     setTimeout(() => {
//         console.log("make pizza");
        
//     }, 5000);
// }

// function packedPizza(){
//     setTimeout(() => {
//         console.log("packed pizza");
        
//     }, 9000);
// }
// // orderPizza()
// // makePizza()
// // packedPizza()
// orderPizza().then(makePizza).catch(()=>{
//     console.log("canelled");
    
// })

//-------------------------------------------------------------------------------------
//                 oops
// class House{
//     houseNumber:string= "A232" 
//     ownerName:string="sumair"
// }
// let answer = new House();
// console.log(answer);

// class House{ 
//     houseNumber:string;
//     ownerName:string
//     constructor(hnum:string,name:string){
//         this.houseNumber = hnum;
//         this.ownerName = name
//     }
// }
// let answer = new House("A123","sumair")
// answer.houseNumber = "B321"
// console.log(answer.houseNumber);

// let answer2 = new House("KHN431","Khan")
// console.log(answer2);

// class House{
//     houseName!:string
//     ownerName!:string
//     numOfDoors!:string
//     constructor(hNam:string,hNam2:string,hNam3:string){
//         this.houseName = hNam
//         this.ownerName = hNam2
//         this.numOfDoors = hNam3
//     }
//     lift(){
//         console.log("Up And Down");
        
//     }
// }
// let answer = new House("231ABC","Sumair","khan")
// console.log(answer.houseName);
// answer.lift()

// class Dog{
//     name!:string
//     constructor(name:string){
//         this.name = name
//     }
//     woof(){
//         console.log("woof woof");
        
//     }
//     walk(){
//         console.log("walking");
        
//     }
// }

// let d1 = new Dog("Tommy")
// console.log(d1.name);
// d1.woof()
// d1.walk()

// class Cat{
//     name!:string
//     constructor(name:string){
//         this.name = name
//     }
//     meow(){
//         console.log("meoww meoww");
        
//     }
// }
// let answer = new Cat("Kitti")
// console.log(answer.name);
// answer.meow()

// class Animal{
//     name!:string
//     constructor(name:string){
//         this.name = name

//     }
//     walk(){
//         console.log("walking");
        
//     }
// }
// class Dog extends Animal {
//     woof(){
//         console.log("woof woof");
        
//     }
// }
// let answer = new Dog("ammad")
// console.log(answer.name);
// answer.woof()
// answer.walk()
//----------------------------------------------------------------------------------

// class Animal{
//     name!:string
//     age!:number
//     constructor(aName:string,age:number){
//         this.name = aName
//         this.age = age
//     }
//     makeSound(){
//         console.log(this.name,this.age,"general Sound");
        
//     }
// }

// let answer = new Animal("Tommy",20)
// answer.makeSound()
// this is called inheritance
//--------------------------------------------------------------------------------------
// class Animal{
//     name!:string
//     constructor(aName:string){
//         this.name = aName
//     }
//     makeSound(){
//         console.log(this.name,"General Sound");
        
//     }
// }
// class Dog extends Animal{
//     constructor(bName:string){
//         super(bName)
//     }
//     makeSound(){
//         console.log(this.name, "woof");
        
//     }
// }

// let answer =  new Dog("david")
// answer.makeSound()
// console.log(answer.name);
//           this is called polymorphism
//--------------------------------------------------------------------------------------
// class Parents{
//     public name!:string;
//     protected cardPinNumber:number = 123
//     constructor(aName:string){
//         this.name = aName
//     }
// }
// class Child extends Parents{
//   withdral(pin:number){
//     if(this.cardPinNumber == pin){
//         console.log("Amount Detucted");
//     }else{
//         console.log("Invalid Code");
        
//     }
//   }
// }
// let answer = new Child("ali")
// answer.withdral(12)
// this is called encapsulation
//=========================================================================
// interface iShap{
//     draw:()=>void;
// }
// class Triangle implements iShap{
//  draw(){
//     console.log("drawing");
    
//  }
// }
// let answer = new Triangle()
// console.log(answer);
// this is called abstration 
//======================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
//                        NEW ALL REPEAT WORK OF TYPESCRIPT

// function determineGrade(totalNumber:number){ 
//     let grade = 0;
//     if(totalNumber >=90){
//         console.log(`Wow you have A grade`);
//     }else if(totalNumber >=80){
//         console.log(`Wow you have B grade`);
//     }else if(totalNumber >=70){
//         console.log(`Wow you have C grade`);
//     }else{
//         console.log(`Failed`);
//     }
// }
// determineGrade(72)
// determineGrade(82)
// determineGrade(92)
// determineGrade(2)
//-------------------------------------------------------------------------
// function determineGrade(score: number): string {
//     let grade: string;

//     if (score > 90) {
//         grade = "A";
//     } else if (score > 80) {
//         grade = "B";
//     } else if (score > 60) {
//         grade = "C";
//     } else {
//         grade = "F";
//     }

//     return grade;
// }

// // Example usage:
// const score1 = 95;
// console.log(determineGrade(score1)); // Output: "A"

// const score2 = 85;
// console.log(determineGrade(score2)); // Output: "B"

// const score3 = 75;
// console.log(determineGrade(score3)); // Output: "C"

// const score4 = 50;
// console.log(determineGrade(score4)); // Output: "F"
//========================================================================================


// let age:number = 13;
// let height:number = 110
// if(age >= 12 && height >= 120){
//     console.log("Allowed");
// }else{
//     console.log("Not Allowed");
// }

//-------------------------------------------------------------------------------------------

// const number = [1,3,5,7,9]
// const square = (num:number):number => num * num
// const squareNumber = number.map(square)
// console.log(squareNumber);

// let greet = (name:string="Guest") =>{
//      return `hello ${name}`
// }
// // let result = greet("Sumair")
// let result = greet()
// console.log(result);
//=========================================================================================
// let myObjects = {
//     name:"John",
//     age:23,
//     class:34,
//     subject:"english"
// }
// console.log(myObjects.name);
// console.log(myObjects.age);
// console.log(myObjects.class);
// console.log(myObjects.subject);

// import {addition,subtraction,multipilcation,division} from "./operations"

// function calculator(){
//       let a = 10;
//       let b = 5
//       console.log(`${addition(a,b)} addition `);
//       console.log(`${subtraction(a,b)} subtraction `);
//       console.log(`${multipilcation(a,b)} multipilcation `);
//       console.log(`${division(a,b)} division `);
      
// }
// calculator();

//----------------------------------------------------------------------------------------
// nested function
// let calculateArea = (lenght:number,width:number)=>{
//     let multiply = (a:number,b:number) =>{
//     return a * b
//     }
//  return multiply(lenght,width)
// }
// let lenght = 5;
// let width = 10
// const area = calculateArea(lenght,width)
// console.log(area);



// const calculateArea = (lenght:number,width:number) =>{
//   function multiple(a:number,b:number){
//      return lenght * width
//   }
//   return multiple(lenght,width)
// }
// let lenght = 4000
// let width = 50884
// const area = calculateArea(lenght,width)
// console.log(area);


// let processString = (name:string) =>{
//        let toUpperCase = (name1:string) =>{
//         return name1.toUpperCase()

//        }
//        let reverse = (name1:string)=>{
//         return name1.split("").reverse().join("")
//        }
//        let upperCase = toUpperCase(name)
//        let final = reverse(upperCase)
//        return final
       
//     }
// let result = processString("sumair")
// console.log(result);
//====================================================================================
//  type literals
// let myName:"sumair" = "sumair"
// console.log(myName);
// type unions
// let myName: string | number = 23
// let myName: string | number = "23"
// console.log(myName);

// let drinks: "tea" | "cold drinks" = "cold drinks";
// console.log(drinks);

//=======================================================================================

// type Student = {
//   name:string,
//   age:number,
//   class:string
// }
// type Teacher = {
//     name:string,
//     whichClass:number,
//     section:string
// }
// let myStudent:Student={
//     name:"Sumair",
//     age:23,
//     class:"Red"
// }


// let myteacher:Teacher={
//     name:"Miss Uzma",
//     whichClass:17,
//     section:"B"
// }
// let both: Student & Teacher ={
//      name:"HOD",
//      age:55,
//      class:"ALL",
//      section:"blue",
//      whichClass:12
// } 
// console.log(both);
//==============================================================================================
//              array

// let findMax = (maxNumber:number[]) =>{
//     // return Math.max(...maxNumber)
//     return Math.min(...maxNumber)
// }
// const max = findMax([10,28,498,29,34.4045])
// console.log(max);

//=========================================================================================
//   push shift pop unshift
// let shoppingList:string[] = ["Eggs", "Butter", "Cheese"]
// shoppingList.push("Milk")
// shoppingList.unshift("Bread")
// shoppingList.pop()
// shoppingList.shift()
// console.log(shoppingList);

// let updateShoppingList = (shoppingList:string[]):string[]=>{
//         shoppingList.push("Milk")
//         shoppingList.unshift("Bread")
//         shoppingList.shift()
//         shoppingList.pop()
//         return shoppingList
// }
// const update = ["Eggs","butter","cheese"]
// let list = updateShoppingList(update)
// console.log(list);


// function updateShoppingList(shoppingList: string[]): string[] {
//     // Step 1: Add "Milk" to the end using push
//     shoppingList.push("Milk");
    
//     // Step 2: Add "Bread" to the start using unshift
//     shoppingList.unshift("Bread");
    
//     // Step 3: Remove the last item using pop
//     shoppingList.pop();
    
//     // Step 4: Remove the first item using shift
//     shoppingList.shift();
    
//     // Return the final modified array
//     return shoppingList;
// }

// // Example usage:
// const list1 = ["Eggs", "Butter", "Cheese"];
// const updatedList1 = updateShoppingList(list1); // Output: ["Butter", "Cheese"]
// console.log(updatedList1);

//------------------------------------------------------------------------------------

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"] 
// let answer = fruits.slice(1,3)
// console.log(answer);

// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"]
// let answer = fruits.slice(1,5)
// console.log(answer);

//             splice 
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange"]
// colors.splice(2, 2, "cyan","magenta")
// console.log(colors);

// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
// let newFruits = fruits.slice(1,4)
// newFruits.splice(0,1,"blueberry")
// fruits.splice(1,1,"blueberry")
// console.log(fruits);
// console.log(newFruits);
//===================================================================================
// tuples
// Function that returns a tuple
// function getPersonInfo(): [string, number] {
//     return ["Charlie", 28];
// }

// const [name, age] = getPersonInfo();
// console.log(name); // Output: Charlie
// console.log(age);  // Output: 28

//Tuples in TypeScript are a powerful feature that allow you to work with arrays of fixed sizes and specific types. They help you enforce type constraints and manage multiple related values efficiently.
//================================================================================
//           enum 
//enum aapko ek named set of values define karne ki ijaazat deta hai. 
// enum days{
//     Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
// }
// let answer = days
// console.log(answer[0]);
// console.log(answer[4]);
// console.log(days.Wednesday);

// enum colors{
//     red = 2,
//     green = 4,
//     yellow = 6
// }
// let traffic:colors = colors.yellow
// if(traffic === colors.yellow){
//     console.log("ready to go");
    
// }else if(traffic === colors.red){
//     console.log("stop");
    
// }else{
//     console.log("go");
    
// }

// let day = "saturday"
// switch(day){
//     case "saturday":
//     console.log("go hikig");
//     break;
//     case "sunday":
//         console.log("read book");
//         break;
//         default:
//             console.log("work day");
            
        
    
// }
// console.log(day);

//=====================================================================================
// loop
// let array = ["sumair","ammad","ubaid","shahmeer","lamiz","hassan"]
// for(let i = 0; i<array.length; i++ ){
//     console.log(`${array[i]} hello`);
    
// }
//==================================================================================
// let myName:any = "Sumair Khan"
// console.log(myName);

// let myAge:unknown = 23;
// let newAge = myAge as number
// console.log(newAge.toFixed(2));

// let myName:unknown = "hello"
// console.log(myName);
//=========================================================================================
//                     rest parameter
// TypeScript mein rest parameter ka use karte hue aap ek function mein multiple arguments ko ek array ki tarah pass kar sakte hain. Yeh tab helpful hota hai jab aapko maloom na ho ke kitne arguments pass kiye jayenge.

// simple ye k ager apko nhi pata k arg m kitni values ayegi to rest parameter ka use karege
// let sum = (...number:number[]):number=>{
//     return number.reduce((acc,cur)=> acc * cur)
// }
// console.log(sum(32,323,4545,56));

// let multiply = (...rest:number[]):any =>{
//       let multiply = 1
//       for(let i =0; i<rest.length; i++){
//         multiply *=rest[i]
//       }
//       console.log(multiply);
      
// }
// multiply(2,4,6)

//========================================================================
// overload
// function add(num1:string,num2:string):string
// function add(num1:number,num2:number):number
// function add(num1:string,num2:number):any
// function add(num1:any, num2:any):any{
//     return num1 + num2
// }

// let answer = add("sumair","khan")
// add(23,34)
// add("23",34)
// console.log(answer);

//===============================================================================
// async function fetchData(){
//     const reponse = await fetch ("https://fakestoreapi.com/products")
//     const data = await reponse.json()
//     console.log(data);
    
// }
// fetchData()
// this is called Asynchoronus function
//---------------------------------------------------------------------------------------
// function syncFuntion(){
//     console.log("start");
//     const result = 1 + 1;
//     console.log(`step ${result}`);
//     console.log("end");
// }
// syncFuntion()

// this is called synchornus function

//====================================================================================
// setTimeOut
// console.log("Hello!");

// setTimeout(() => {
//     console.log("This message appears after 5 seconds.");
// }, 5000);

// console.log("Goodbye!");

// let myAge = () =>{
//     setTimeout(() => `This message appears after 5 seconds.`, 5000);
// }
// myAge()
 
// function orderPizza( makePizzaCb:any ){
//     setTimeout(() => {
//         console.log("Order Pizza");
//         makePizzaCb( makePizza )
//     }, 1000);
// }
// function makePizza( packedPizzaCb:any ){
//     setTimeout(() => {
//         console.log("Prepared Pizza");
        
//     }, 3000);
// }
// function packedPizza(){
//     setTimeout(() => {
//         console.log("Packed Pizza");
        
//     }, 10000);
// }
// orderPizza(makePizza)
// packedPizza()


// function orderPizza(){
//     setTimeout(() => {
//         console.log("order pizza");
        
//     }, 1000);
// }
// function makePizza(){
//     setTimeout(() => {
//          console.log("Make Pizza");
         
//     }, 3000);
// }
// function packedPizza(){
//     setTimeout(() => {
//         console.log("Packed Pizza");
        
//     }, 7000);
// }
// function deliverPizza(){
//     setTimeout(() => {
//         console.log("Deliverd");
        
//     }, 9000);
// }
// orderPizza()
// makePizza()
// packedPizza()
// deliverPizza()
//                  promises
// let orderPizza = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let outOfStock = false
//             if(!outOfStock){
//                 console.log("Order Pizza");
//                 resolve("Prepared pizza");
//                 makePizza()
//                 packedPizza()
//             }else{
//                 reject()
//             }
            
//         },5000);
//     })
// }
// let makePizza=()=>{
// setTimeout(() => {
//     console.log("Make Pizza");
    
// }, 2000);
// }
// let packedPizza = () =>{
//     setTimeout(() => {
//         console.log("Packed pizza");
        
//     }, 6000);
// }
// orderPizza().then().catch(()=>{
//     console.log("Cancelled");
    
// })
// function fetchData(){
//     return new Promise<string>((resolve, reject) => {
//         setTimeout(() => {
//             let data = false
//             if(!data){
//                 // console.log("Data fetched successfully");
//             resolve("Data fetched successfully")
//             }else{
//                 reject()

//             }
            
//         }, 3000);
//     })
// }
// fetchData().then().catch(()=>{
//     console.log("Error");
    
// })
//=======================================================================================
//                            OOPs
// class Zoo{
//     animals:string = "loin";
//     age:number = 23
// }
// let answer = new Zoo()
// console.log(answer.age);

// class Zoo{
//     animal:string;
//     age:number;
//     constructor(animalName:string,animalAge:number){
//         this.age = animalAge
//         this.animal = animalName
//     }
//     getDetail():any{
//         return `name ${this.animal} Age ${this.age}`
//     }
// }
// let answer = new Zoo("Loin",23)
// // console.log(answer.animal);
// // answer.animal= "zebra"
// // console.log(answer.animal);
// console.log(answer.getDetail());
//==============================================================================

// class House {
//     houseName!:string;
//     ownerName!:string;
//     houseNumber!:number
//     constructor(houseName:string,ownerName:string,houseNumber:number){
//         this.houseName = houseName;
//         this.houseNumber = houseNumber;
//         this.ownerName = ownerName
//     }
//     Door(){
//         return `I have 4 rooms in my house`
//     }
// }
// let answer = new House("Ahene Jahan","Sumair Khan",9834)
// console.log(answer.ownerName);
// console.log(answer.Door());

// class Dog{
//     name!:string
//     age!:number
//     constructor(name:string,age:number){
//         this.age = age
//         this.name = name
//     }
//     woof(){
//         return `woof woof`
//     }
//     walk(){
//         return `walking`
//     }
// }
// let answer = new Dog("Tommy",23)
// console.log(answer.woof());
// console.log(answer.walk());

//-----------------------------------------------------------------------------
// what is Inheritanes in oops explain shortly ???????????
//class ek bar banti hy constructor jo banta hy wo just construct krne k iye kam ata hy class ko
//Inheritance OOPs (Object-Oriented Programming) ka ek concept hai jisme ek class (child class) doosri class (parent class) ke properties aur methods ko inherit karti hai. Iska matlab hai ke child class parent class ke features ko apne andar use kar sakti hai, bina unhe dobara likhne ki zaroorat ke.
// class Animal{
//     name!:string
//     constructor(name:string){
//         this.name = name
//     }
//     eat(){
//         return `${this.name} eating`
//     }
// }
// class Dog extends Animal{
//     bark(){
//         return `${this.name} is Barking`
        
//     }
// }
// let answer = new Dog("Buddy")
// console.log(answer.bark());
// console.log(answer.eat());
//======================================================================================
// what is polymorphism in oops explain shortly ???????????
// class Animal{
//     makeSound(){                         // <= this is called polymorphism
//         console.log("Animals Make A Sound");
//     }
// }
// class Dog extends Animal{
//     makeSound(){                         // <= this is called polymorphism
//         console.log("Dog Barks"); 
//     }
// }
// class Cat extends Dog{
//     makeSound(){                          // <= this is called polymorphism
//         console.log("Cat Bark");
//     }
// }

// const Animals:Animal[] = [new Dog() , new Cat()]
// Animals.forEach(Animal=>{
//     Animal.makeSound()
// })
// Is example me, makeSound method ko Dog aur Cat classes me alag-alag tarike se implement kiya gaya hai. Yehi polymorphism hai jisme ek method different classes me different behavior show karta hai.
//========================================================================================
// what is encapsulation in oops explain shortly ???????????
// public hogga toh her koi acces kr sakhta hy
// private hoga is private code ko srif parents class k ander use kr sakhte hain 
// protected ye hy srif parents or child ko pata hoga 
// class Parents{
//     public name:string;        // <= encapsulation
//     protected pincode = 123    // <= encapsulation     
//     constructor(name:string){
//         this.name = name
//     }
// }
// class childern extends Parents{ 
//       withdraw(pin:number){
//         if(this.pincode == pin){
//                console.log("Amount withdraw");
               
//         }else{
//             console.log("invild pin");
            
//         }
//       }
// }
// let c1 = new childern("sumair")
// c1.withdraw(193)
 //         this is called encapsulation
 //====================================================================================
 // what is abstraction in oops explain shortly ???????????
 //interface class banane k liye use hota hy
//  Abstraction OOP (Object-Oriented Programming) ka ek concept hai jisme complex systems ko simple aur understandable parts me tod diya jata hai. Iska matlab hai ke unnecessary details ko hide karke sirf essential features aur functionalities ko highlight kiya jata hai.
//  abstract class Animal {
//     abstract makeSound(): void; // Abstract method

//     move(): void {
//         console.log("Moving...");
//     }
// }

// class Dog extends Animal {
//     makeSound(): void {
//         console.log("Bark!");
//     }
// }

// let dog = new Dog();
// dog.makeSound(); // Output: Bark!
// dog.move();      // Output: Moving...
// this is called abstraction
//===========================================================================================
//                            tasks  01
// const modified = () =>{
//     let array = [2,3,4,6,8]
//     array.splice(1,2)
//     array.push(13)
//     console.log(array);
    
// }
// modified()

//                             tasks  02
// const multiply = () =>{
//     let array:any = [2,4,6,8,10]
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i] * 2);
//     }
// }
// multiply()
// const multiplly = () =>{
//         let array = [2,4,6,8]; //[]
//         array.forEach((num)=>{
//             console.log(num*2 );
                
//         });
//     }
// multiplly();
//                                tasks 03
// let allNumber = (Numbers: number[]) =>{
//     // let array = [23,34,45,556]
//     let largest = Numbers[0]
//     for(let i = 0; i <Numbers.length; i++){
//         if(Numbers[i]>largest){
//           largest = Numbers[i]
//         }
        
//     }
//     return largest
// }
// const num = [23,34,54,67,87]
// console.log(allNumber(num));
//---------------------------------------------------
// let largestNumber = (Numberss:number[]) =>{
//     return Math.max(...Numberss)
// }
// const num1 = [12,34,54,777]
// let largestNum = largestNumber(num1)
// console.log(largestNum);
///===================================================================================
                    //            THE END 

















































































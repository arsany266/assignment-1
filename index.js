// // Q1
// x = "123"
// y = Number(x) + 7
// console.log(y);

// // Q2
// function x(a) {

//     if ( a== false) {
//     console.log("invalid");
// }

// }
// x()


// // Q3
// for (let i = 1; i < 10; i++) {

//     if (i%2 == 0) {
//         continue
//     }
//     console.log(i);
    
// }

// // Q4

// function a(x) {
    
// function checkEven(num) {
//     return num%2==0 ;  
// }

// console.log(x.filter(checkEven));

// }

// a ([1,2,3,4,5,6,7,8])


// // Q5

// function a(x,y) {
//     z= [...y,...x]
//     console.log(z);
    

// }
// a([2,4,4,4,4],[45,6,6,"fgfg"])

// // Q6

// function a(x) {
    
//   switch (x) {
//     case 1 : day = "saturday"
//     break;
//     case 2 : day =  "sunday"  
//     break ;
//     case 3 : day =  "monday" 
//     break;
//     case 4 : day =  "tuesday" 
//     break;
//     case 5 : day =  "wednesday" 
//     break;
//     case 6 : day =  "thursday"
//     break;
//     case 7 : day = "friday"  
// }

//    console.log(day);

//     }

 

// a(4)




// // Q7
// function a(x) {
// f =[]
// y = x.map(count)
// function count(x) {
//     z = x.length
//     f.push(z)
// }
// console.log(f);
// }

// a(["Fdfd","fkdhfdjkfujdj","ss"])



// // Q8


// function a(x) {

// if (x%3 == 0 && x%5 ==0 ) {
//     console.log("number divisble by 3 and 5 ");  
// } 
// else {
//     console.log("number not divisible by 3 and 5");
// }

// }


// a(45)

// // Q9
// function a(x) {

//   let y = (x) => x**2;

//     console.log(y(x));  
// }

// a(12)



// // Q10

// function a(x) {

//     console.log( x.name + " is " + x.age + " years old");   
// }

// a({name : "arsany" , age : 25})




// // Q11

// x = [1,2,3,4,5,6]
// count = 0
// for (let i = 0; i < x.length; i++) {
//   count = x[i] + count
// }
// console.log(count);


// // Q12

// setTimeout (f, 3000)
// setTimeout (h , 5000) 

// function f() {
//     console.log("success");
// }

// function h() {
//     console.log("congrats");
// }



// // Q13

// const x=[34,64,75,54]

// for (let i = 0; i < x.length; i++) {   
//         if (x[i]<x[i+1]) {
//             max = x[i+1]
//         }    
// }
// console.log(max);


// // Q14

// function a(x) {
    
// y = Object.getOwnPropertyNames(x)
// console.log(y);
// }

// a({name :"john" , age : 30 })


// // Q15
// function a(x) {
//     y= x.split(" ")
//     console.log(y);
// }

// a("The quick brown fox")

// ---------------------------------------------



// // part2
// // Q1

// for each calls a function for each element in an array 

// for...of combo iterates (loop) over the values ofany iterable
// the code block inside the loop is excuted once for each value


// Q2


// // Hoisting is default behavior of moving all declrations to the top of the current scope 
// // EX
// var x 
// x = 3 
// console.log(x);
// // but it does not work with const and let we must use it at the top of scope
// // EX

// let x 
// x=5
// console.log(x);

// msh 3aiz ahbd tani el sra7a :D

// Q3
// == it use to comparing value
// === it use to comparing value and type

// // Q4

// // we use it at error handling and controll if we have error 
// // ex
// try{
//     x=2
//     z = x+3  
//     console.log(z);
         
// } catch{
//     console.log("error");
//     onsole.log("err.message");
    
// }
// // law el x el value bta3tha m3rofa el try htsht8l 3ady lw msh m3rofa el catch htsht8l


// // Q5
// // coercion occure automatic 
// // ex 
// console.log(5 + "3");
// // 5 will be string 
// console.log("10"*2);
// // 10 will be number

// // but conversion manual 
// // ex 
// Number("3.14")
// Number("Math.pi")
// String(123)
// String(100+23)



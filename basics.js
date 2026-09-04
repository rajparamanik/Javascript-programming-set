// user input
const userName = prompt("Enter your name");
alert(userName);



// age identifier condition
let age = prompt("Enter your age .....");
let result = age>=18 ? "you can vote":"you con,t vote";
alert(result);



// odd or even
let num = prompt("enter your number");
let result = num % 2 === 0 ? "even": "odd";
alert(result);



// user input num that divisable number 5
let num = prompt("Enter your number to check divisable by 5 :");
let result = num%5===0 ? "divisable":"not divisable";
alert(result);



// user arithmetic operation
let a = prompt("Enter your first number ");
let b = prompt("Enter your second number ");
let result = parseInt(a) + parseInt(b)
alert(result);



// A B C D F score grade define
let Score = prompt("Enter your score : ");
if (Score >100){
    alert("Enter correct score............")
}
if (Score >=90 && Score <= 100){
    alert("A")
}
if (Score >=70 && Score <= 89){
    alert("B")
} 
if (Score >=50 && Score <= 69){
    alert("C")
} 
if (Score >=30 && Score <= 49){
    alert("D")
}
if(Score>=10 && Score<=29){
    alert("F")
}
// ---------------------function-------------------------

// normal function define
function sum4(a,b){
   return a+b;
}
let sumresult = sum4(2,5);
console.log(sumresult);

//function of all arethmetic
function arithmeti_of_two_num(x,y){
    let a = [[`The add is : ${x+y}`],
             [`The sub is : ${x-y}`],
             [`The mul is : ${x*y}`],
             [`The div is : ${x/y}`],
            ];
    for(let i in a){
        console.log(a[i]);
    };
}
arithmeti_of_two_num(9,5);


// arrow function define
const showmyname=(msg)=>{
    console.log(msg)
}
showmyname("hello world");

//count vowels with the help of arrow function
const countvowels=(msg)=>{
    let count1 =0;
    for(let i of msg){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            count1++;
        }
    }
    console.log(count1);
}
countvowels("Raj Paramanik");

//same method of function

//map method in function
let arr1=[2,3,4,5,6,7,8];
let newArr =arr1.map((num)=>{
    return num*num;
})
console.log(newArr);

//filter method in function
let arr2 = [1,2,3,4,5,6,7,8,9,10];
let arrNew2 =arr2.filter((val)=>{
    return val%2===0;
})
console.log(arrNew2);

//reduce method in the funtion
let count =[9,6,1,20,5];
const output=count.reduce((result,current)=>{
    return result>current ? result:current;
})
console.log(output);

// foreach loop is also a higher order function

//array 
let raj = [1,2,3,4,6,7,8,9,10];
//even print
raj.forEach((i)=>{
    if(i%2===0){
        console.log(i);
    }
})
//square of number with the help of foreach loop
raj.forEach((i)=>{
    console.log(i*i);
})

//print value with the help of foreach loop
let raj2 =["raj","rahul","shamik"];
raj2.forEach((i)=>{
    console.log(i);
})
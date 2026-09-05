//-------------------loop in js------------------------
//for loop
for(let i=0;i<=5;i++){
    console.log(i);
}

//while loop
let i=0;
while( i<=5){
    console.log(i);
    i++;
}

//do while loop
let a=0;
do{
    console.log(a);
    a++;
}while(a<=5);

//forof loop
for(let i of str){
    console.log(i);
}

//forin loop
for(let i in str){
    console.log(str[i]);
}

//foreach
//array
let arr =[1,2,3,4,5,6];
//print value
arr.forEach((val)=>{
    console.log(val);
})
// print square of arr value
arr.forEach((num)=>{
    console.log(num*num);
})
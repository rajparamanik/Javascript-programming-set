
//-----------------Array ------------------------------

//array define
let Student = ["raj","rahul","animesh","shamik"];
let Marks = [5,5,5,5,5,5,5,5];

//array length
let arrResult=Student.length;
console.log(arrResult);

//array index
let studentIndex=Student[0];
console.log(studentIndex);

//find array value
for(let b=0; b<=Student.length; b++){
    console.log(Student[b]);
}
for(let i in Student){
    console.log(Student[i]);
}

//sum of all number of an array
let sum =0;
for(let i of Marks){
    sum+=i;
}
console.log(sum);

//offer for items question
let items = [54,67,34,65,34,54,34];
for(let d =0; d<items.length;d++){
   let offer=items[d]/10;
    items[d]-=offer;
}
console.log(items);

//array method
//push method
Student.push("Khokon");
console.log(Student);

//pop method
Student.pop("Khokon");
console.log(Student);

// tostring method
let arrtostring=Student.toLocaleString();
console.log(arrtostring);

//concat method
let concatarr=Student.concat(items);
console.log(concatarr);

//unshift method
Student.unshift("Khokon");
console.log(Student);

//shift method
Student.shift("Khokon");
console.log(Student);

//slice method
let slicearr=Student.slice(0,3);
console.log(slicearr);

//splice method
let splicearr=Student.splice(0,4);
console.log(splicearr);

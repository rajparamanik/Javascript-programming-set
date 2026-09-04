//------------------------------string define-----------------------------
let str = "Raj Paramanik";
let str1 = `Raj Paramanik`;
let str2 = 'RAJ PARAMANIK';
let str3 = "   Raj Paramanik      ";

//length 
let strlength=str2.length;
console.log(strlength);

//indexing in str
let strIndexvalue=str[0];
console.log(strIndexvalue);

//method of string
// 1)toUppercase method
let strUpper = str.toUpperCase();
console.log(strUpper);
// 2)toLowercase method
let strLower = str.toLowerCase();
console.log(strLower);
// 3)Trim method
let strTrim = str3.trim();
console.log(strTrim);
// 4)concat method
let strConcat = str.concat(str2);
console.log(strConcat);
// 5)repalce method
let strReplace = str.replace("a","o");
console.log(strReplace);
// 6)slice method
let strSlice = str.slice(0,3);
console.log(strSlice);
// 7)split method
let strSplit = str.split();
console.log(strSplit);
//  8)CharAt method
let strCharat = str.charAt(0);
console.log(strCharat);
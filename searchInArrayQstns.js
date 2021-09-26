

let arr=[19,7,66,5,2,5,3,4,33,4,22];
//console.log(arr.find(1));
console.log(arr.lastIndexOf(5,3));
console.log(arr.includes(4,6))

// Q.1)What is the difference between find() and filter() method ?
// A). returns one value ata a time and filter returns multiple value in a array
let newarr=arr.find((ele)=>{
return ele>1;
})
let arrNew2=arr.filter(function(ele){
        return ele>19;

})
console.log(newarr)
console.log(arrNew2)

// Q.2)If there is no value to return, what will findIndex() return ?
//find findindex almost same and returns one so use filter method
let valueFindIdx=arr.findIndex((ele)=>{
return ele>30
})
console.log(valueFindIdx)
// Q.3) What is the difference between indexOf() and includes() method ?
console.log(arr.indexOf(33)) //8
console.log(arr.includes(33))// true

// Q.4) How will you search multiple values in an array ?
//filter method
let q=arr.filter((ele)=>{
return ele<33;
})
console.log(q)

//Q.5)What will be the output of this code ?
         let arr2=["One","Two","Three","Four","Five"];
             console.log(arr.lastIndexOf("Abcd")); 
             
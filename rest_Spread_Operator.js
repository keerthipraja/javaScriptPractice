
//     function  sum(...nums) {
//         console.log(nums);
//     }

// sum(2,8,9);
// var arr1=[1,89,76,888];
// var arr2=[...arr1,14,9,6,988];
// console.log(arr2)

let name1={
firstName:"Namish",
lastName:"Nakka",
printFullName: function (){
    console.log(`${this.firstName} ${this.lastName}`);
}
}
name1.printFullName();
let name2={
    firstName:"sai",
    lastName:"nakka"
}

//name2.printFullName();
// call method(pass args individually comma seperated) and apply method( pass arguments in arraylist)
// bind method same like call but it wont invoke imediately but can be stored in other variable as a function to call later


//call example

let printFullName1= function (hometown){
    console.log(`${this.firstName} ${this.lastName} from ${hometown} `);
}

printFullName1.call(name2,"hyd");

//apply example

let printFullName2= function (hometown,country){
    console.log(`${this.firstName} ${this.lastName} from ${hometown}in ${country}`);
}

printFullName2.apply(name1,["london","UK"]);

// bind example , copy of first method and storing in a variable

let bindName= printFullName1.bind(name1,"delhi");
console.log(bindName);
console.log(bindName());
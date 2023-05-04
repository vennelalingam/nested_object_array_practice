const personData = {}

const age_property = "age";

console.log(personData);
// console.log(personData["siblings"][age_property]) // 4
// console.log(personData[age_property]) //10

// to Add Properties or data to Object
personData.name = "Bhoomi";
personData.age = 10;
personData.school = "SIL";
personData.siblings = {
    name: "Bhuvan",
    age: 4,
    class: "P4"
};
personData.siblings.friends = {
    name1: "Nicolas",
    name2: "Gwani",
    name3: "Danny"
};
personData.friends_Bhoomi = {
    name1: "Aadhya",
    name2: "Sathya",
    name3: "Bhuvi"
};


// Accessing an element in Nested Array

const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(nestedArray[1][0]); // 4

// Accessing an element in Nested Object 

const nestedObject = {
    name: "Vennela",
    age: 36,
    address:{
        street: "carrer de Balmes",
        city: "Barcelona",
        country: "Spain",
    },
    Designation:["engineer", "webDeveloper", "teacher", "baker"],
};

console.log(nestedObject.Designation[1]) // webDeveloper
console.log(nestedObject.address.city) // Barcelona

//*******Looping through NESTED ARRAYS  ****************

//Nested for loop to iterate through a nested array:

const nestdArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let i=0; i<nestdArray.length; i++){
    for(let j=0; j<nestdArray[i].length; j++){
        console.log(nestdArray[i][j]);
    }    
}
/* output
1
2
3
4
5
6
7
8
9
*/
// iterating through nested Object for...in loop

const nestdObject = {
    name: "Vennela",
    age: 36,
    address:{
        street: "carrer de Balmes",
        city: "Barcelona",
        country: "Spain",
    },
    Designation:["engineer", "webDeveloper", "teacher", "baker"],
};

for(let key in nestdObject) {
    if(typeof nestdObject[key] === "object") {
        for (let nestedKey in nestdObject[key]) {
            console.log(nestdObject[key][nestedKey]);
        }
    } else {
        console.log(nestdObject[key]);
    }
}

/* Output
script.js:73 Vennela
script.js:73 36
script.js:70 carrer de Balmes
script.js:70 Barcelona
script.js:70 Spain
script.js:70 engineer7
script.js:70 webDeveloper
script.js:70 teacher
script.js:70 baker
*/

// Find and update a value in an array of objects

let employeeDetails = [
    {
        "name": "Ben",
        "age": 30,
        "isManager": false,
        "city": "Mumbai"
    },
    {
        "name": "Holly",
        "age": 31,
        "isManager": false,
        "city": "Pune"   
    },
    {
        "name": "peppa",
        "age": 32,
        "isManager": true,
        "city": "Thane"
    },
    {
        "name": "George",
        "age": 36,
        "isManager": true,
        "city": "Mumbai"
    }
];
// .find only displays the 1st data found that satisfies the condition
let employeeData = employeeDetails.find(value => value.age > 31);
console.log(employeeData);
//  {name: "peppa", age: 32, isManager: true, city: "Thane"}

// Index parameter to display particular record
let empData = employeeDetails.find((value, i) => {
    if(value.age > 28 && i !== 0)
    return true;
});
console.log(empData);
//  {name: "Holly", age: 31, isManager: false, city: "Pune"}



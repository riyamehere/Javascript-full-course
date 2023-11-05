// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
let Person = {name :"Riya ",age: 21,country:"India"};

// Create a function, logData(), that uses the person object to create a
function logData(){
    console.log(Person.name +'is '+Person.age+' years old and lives in '+Person.country)
}
// string in the following format: 
// "Per is 35 years old and lives in Norway"
logData()
// Call the logData() function to verify that it works
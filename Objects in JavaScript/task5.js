const users = [
    {
        name : "John", 
        email : "john@gmail.com",
        age: 25
    },
    {
        name : "Jane", 
        email : "Jane@gmail.com",
        age: 20},
    {
        name : "Jim", 
        email : "jim@gmail.com",
        age: 15
    }
]
for (let key of users){
    let {name, email, age} = key;
    console.log(name);
    console.log(email);
    console.log(age);
}
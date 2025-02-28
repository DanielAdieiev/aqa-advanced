import fetch from 'node-fetch';

let promise1 = new Promise((resolve, reject) =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error));
});
let promise2 = new Promise((resolve, reject) =>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error));
});
Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
});
Promise.race([promise1, promise2]).then((values) => {
  console.log(values);
});
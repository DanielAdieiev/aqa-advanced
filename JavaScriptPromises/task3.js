import fetch from 'node-fetch';

async function request1 (){
    let response = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    return data;
};
async function request2 (){
    let response = await fetch ('https://jsonplaceholder.typicode.com/users/1');
    let data = await response.json();
    return data;
};

Promise.all([request1(), request2()]).then((values) => {
    console.log(values);
  });
Promise.race([request1(), request2()]).then((values) => {
    console.log(values);
  });
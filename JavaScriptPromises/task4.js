import fetch from 'node-fetch';

class RequestURL {
    constructor(url) {
        this.url = url;
    };
    async request() {
        let response = await fetch(this.url);
        let data = await response.json();
        return data;
    }
};

class AllPromisesFunction {
    constructor(promises) {
        this.promises = promises;
    };
    async allPromises() {
        let values = await Promise.all(this.promises);
        return values;
    }
};

class RacePromisesFunction {
    constructor(promises) {
        this.promises = promises;
    };
    async racePromises() {
        let values = await Promise.race(this.promises);
        return values;  
    }
};

let request1 = new RequestURL('https://jsonplaceholder.typicode.com/todos/1');
let request2 = new RequestURL('https://jsonplaceholder.typicode.com/users/1');

request1.request().then(data => console.log(data));
request2.request().then(data => console.log(data));

let allPromises = new AllPromisesFunction([request1.request(), request2.request()]);
allPromises.allPromises().then(values => console.log(values));

let racePromises = new RacePromisesFunction([request1.request(), request2.request()]);
racePromises.racePromises().then(values => console.log(values));

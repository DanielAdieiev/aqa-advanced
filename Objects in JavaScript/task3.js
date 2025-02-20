let car1 = {
    brand: "Mini",
    model: "Countryman",
    year: 2013
};
let car2 = {
    brand: "BMW",
    model: "X5",
    owner: 2015
};
let car3 = {...car1, ...car2};
console.log(car3);
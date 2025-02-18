const ARRAY = [1, 2, 3, 4, 5];
let newArray = ARRAY.map((number,numberIndex) => {
    return number * numberIndex;
});
console.log(newArray);
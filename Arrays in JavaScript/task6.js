let numbersList = [1,10,14,2,4,5,43,34];
let newList = numbersList.slice().sort((a,b) =>{
    if (a>b) return 1;
    if (a<b) return -1;
    return 0;
});
console.log(numbersList);
console.log(newList);
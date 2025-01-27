//function declaration
function declarSquare (width,length){
    return width*length;
};
//function expression
const expressSquare = function(width,length){
    return width*length;
};
//arrow function
const arrowSquare = (width,length) => {
    return width*length;
};
console.log(declarSquare(1,3));
console.log(expressSquare(2,3));
console.log(arrowSquare(3,3));
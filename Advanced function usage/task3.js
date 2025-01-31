function divide (numerator, denominator){
    if (denominator === 0){
        console.log ("Cannot divide by zero");
    } else if (isNaN(numerator) || isNaN(denominator)) {
        console.log ("Use numbers only");
    } else {
        console.log(numerator / denominator);  
    }
}
divide ( 1, 0);
divide (5, 2);
divide ("2", 5);
divide (5, "2wrrrrr");
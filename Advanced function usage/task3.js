function divide (numerator, denominator){
    if (denominator === 0 || denominator === null) {
        throw new Error ("Cannot divide by zero");
    } else if (isNaN (numerator) || isNaN (denominator)) {
        throw new Error ("Use numbers only");
    } else {
        console.log (numerator / denominator);  
    }
}

try {
    divide (1, null);
} catch (error){
    console.log (error.message);
} finally {
    console.log ("Робота завершена");
}

try {
    divide (1, 0);
} catch (error){
    console.log (error.message);
} finally {
    console.log ("Робота завершена");
}

try {
    divide (5, 2);
} catch (error){
    console.log (error.message);
} finally {
    console.log ("Робота завершена");
}

try {
    divide ("2", 5);
} catch (error){
    console.log (error.message);
} finally {
    console.log ("Робота завершена");
}

try {
    divide (5, "2wrrrrr");
} catch (error){
    console.log (error.message);
} finally {
    console.log ("Робота завершена");
}

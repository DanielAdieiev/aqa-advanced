function checkOrder (available, ordered){
    if(available < 0 || ordered < 0) {
        console.log("Please enter a positive number.");
        return;
    }
    if(available < ordered){
        console.log("Your order is too large, we don't have enough goods.");
        return;
    } 
    if(ordered === 0){
        console.log("Your order is empty.");
        return;
    }
    if (available >= ordered){
        console.log("The order is accepted.");
        return;
    }
};
checkOrder(0, 9);
function checkOrder (available, ordered){
    if(available < 0 || ordered < 0){
        return "Please enter a valid number.";
    } else if(available < ordered){
        return "Your order is too large, we don't have enough goods.";
    } else if(ordered === 0){
        return "Your order is empty.";
    } else if (available >= ordered){
        return "The order is accepted.";
    }
};
console.log(checkOrder(0, 1));
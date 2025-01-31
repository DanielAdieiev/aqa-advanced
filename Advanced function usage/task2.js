function recursiaOfNum (num) {
    console.log(num);
    if (num <= 0) {
        return;
    }
    recursiaOfNum (num - 1);
}

recursiaOfNum (5);

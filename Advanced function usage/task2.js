function recursiaOfNum (num){
    console.log(num);
    function rec(num){
        for (let i = num - 1 ; i > 0; i--){
            console.log(i);
        }
        return num - 1;
    }
    return rec(num);
}
recursiaOfNum(5);
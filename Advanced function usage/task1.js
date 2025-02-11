function handleNum (num, handleEven, handleOdd){
    num % 2 === 0 ? handleEven(num) : handleOdd(num);
}
const handleEven = () => console.log("number is even");
const handleOdd = () => console.log("number is odd");
handleNum(3, handleEven, handleOdd);
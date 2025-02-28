function timeFunc(text,milSec){
    setTimeout(()=>{
        console.log(text);
    }, milSec);
};
timeFunc('Hello world!',5000);
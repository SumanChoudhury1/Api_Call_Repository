
//create arrow function 
const calculate =(a,b, operation)=>{
    return operation(a,b);
}

//create mothod and pass the callback function

const addition=calculate(10,30, function(num1,num2){
    setTimeout(() => {
        console.log(num1*num2);
    }, 5000);
});


//create method defferent type 

const subtraction= (a,b)=>a-b;
    const subResult=calculate(1,3, subtraction);
     console.log(subResult);

     function mulPly(a,b){
        return a*b;
     }

     mulPly();
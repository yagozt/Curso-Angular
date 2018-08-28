var ar = [1,2,3,4,5,6,7,8,9,10];
var result = ar.reduce(factorial);
function factorial(previus,next){
    return previus * next;
};
console.log(result);
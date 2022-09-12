// function

function myfunction(a,b){
    let x=a*b
    console.log(`the multiplication of two number ${x}`);
}
myfunction(10,5);


// expression
let x =name(2,4)
function name(a,b){
    return(a*b)
}
console.log(x);


// arrow function
const myname =(firstname,lastname)=>{

    console.log(firstname,lastname);

}
myname("navanee","krish")


function greater(c){
    if (c>10) {
        return("c is greater")
        
    }else{
        return("c is lessthan")
    }

}
console.log(greater(100));
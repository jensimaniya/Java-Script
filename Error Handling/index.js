const divide = (a, b) => {
    if (b == 0) {
        throw new Error("error :cannot divided by zero");
    }
    
   return a/b 
}
console.log("before divide");
try {
    console.log(divide(10, 2));
    let i = 0;
    // finally ni process bandh karva mate
    while (i < 10) {
        
    }

}
catch (err)
{
    console.log(err.message);
    
}
finally {
    console.log("process finished....");
    
}

console.log("after Divide");



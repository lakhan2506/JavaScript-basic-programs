let number = 37;
let flag = true;

if(number == 1){
    console.log("number 1 is not a prime number nor non-prime number.")
}
else{
    for(let i=2;i<=number/2;i++){
        if(number%i==0){
            flag = false;
        }
    }
}

if(flag==true){
    console.log(`${number} is a Prime Number.`);
}
else{
    console.log(`${number} is not a Prime Number.`);
}
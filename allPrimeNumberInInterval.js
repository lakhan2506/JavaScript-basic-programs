console.log("All Prime number between 2 to 100.");

for(let i=2;i<=100;i++){
    let flag = 0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag = 1;
            break;
        }
    }
    if(i>1 && flag == 0){
        console.log(i);
    }
}
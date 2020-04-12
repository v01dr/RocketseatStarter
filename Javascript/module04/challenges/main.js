function checkAge(age){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age >= 18){
                resolve();
            }else{
                reject();
            }
        },2000);
    });
}

checkAge(15)
    .then(function(){
        console.log("Maior que 18");
    })
    .catch(function(){
        console.log("Menor que 18");
    })
    .finally(function(){
        console.log("Finalizado");
    });
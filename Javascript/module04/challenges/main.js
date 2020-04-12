function checkAge(age){
    return new Promise(function(resolve, reject){
        if(age >= 18){
            resolve("Maior que 18");
        }else{
            reject("Menor que 18");
        }
    });
}

checkAge(20)
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });

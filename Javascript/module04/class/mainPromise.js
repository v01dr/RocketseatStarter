var myPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/r33-code');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.onreadystatechange === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Error on request');
                }
            }
        }
    });
}

/**Promise allows handle asynchronous requests */
myPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });

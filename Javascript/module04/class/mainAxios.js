/**Promise allows handle asynchronous requests */
axios.get('https://api.github.com/users/r33-code')
    .then(function(response) {
        console.log(response);
        console.log(reponse.data.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);
    });

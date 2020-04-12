var buttonElem = document.querySelector("#app button");
buttonElem.onclick = search;

/**
 * 
 */
function renderRepositories(rJSON){
    var listElem = document.querySelector("#app ul");
    listElem.innerHTML = '';

    //check if the response is null
    if(!(Object.keys(rJSON).length === 0)){
        for(item of rJSON){
            var repoElem = document.createElement('li');
            var repoText = document.createTextNode(item.name);
    
            repoElem.appendChild(repoText);
            listElem.appendChild(repoElem);
        }
    }
}

function loading(){
    var listElem = document.querySelector("#app ul");
    listElem.innerHTML = '';

    var loadElem = document.createElement('li');
    var loadText = document.createTextNode("Loading...");

    loadElem.appendChild(loadText);
    listElem.appendChild(loadElem);

}

/**
 * Function called every time the button Search is clicked;
 * It calls a Promise 
 */
function search(){
    var inputElem = document.querySelector("#app input");
    var username = inputElem.value;
    if (username !== ""){
        getRepo(username)
            .then(function(response) {
                renderRepositories(response);
            })
            .catch(function(error) {
                renderRepositories({});
                alert(error);
            });
    }
}

/**
 * 
 */
var getRepo = function(username){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+username+'/repos', true);
        loading();
                
        xhr.onload = function(){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject(Error('Username not found'));
            }
        }

        xhr.onerror = function(){
            reject(Error('Network Error'));
        }

        xhr.send();
    });
}
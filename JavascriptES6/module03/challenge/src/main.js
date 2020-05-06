/**
 * First exercise
 */
function first(){
    const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

    async function umPorSegundo(){
        await delay();
        console.log('1s');
        await delay();
        console.log('2s');
        await delay();
        console.log('3s');
    }
    umPorSegundo();  
}
//first();


import axios from 'axios';
/**
 * Second exercise
 */
function second(){
    
    async function getUserFromGithub(user){
        try{
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);
        }catch(err){
            console.error("Error in API");
        }
    }

    getUserFromGithub('r33-code');
    getUserFromGithub('r33-codezera');
}
//second();

/**
 * Third exercise
 */
function third(){
    class Github {
        static async getRepositories(repo) { 
            try{
                const response = await axios.get(`https://api.github.com/repos/${repo}`);
                console.log(response);
            }catch(err){
                console.error("Repo does not exist!");
            }
        }
    }

    Github.getRepositories('r33-code/FunctionalProgramming');
    Github.getRepositories('rocketseat/dslkvmskv');
}
//third();

/**
 * Fourth exercise
 */
function fourth(){
    const buscaUsuario = async usuario => {
        try{
            const response = await axios.get(`https://api.github.com/users/${usuario}`);
            console.log(response.data);
        }catch(err){
            console.log('Usuário não existe');
        }
    }

    buscaUsuario('diego3g');
}
fourth();
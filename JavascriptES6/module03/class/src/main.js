/**
 * Working with Async/Await
 */
const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});
/**
 * 
 
myPromise()
    .then( response => {
        console.log(response);
    });
*/

async function executePromise(){
    //const response = await myPromise();
    //console.log(response);

    console.log(await myPromise());
    console.log(await myPromise());
    console.log(await myPromise());
}
executePromise();

const executePromise_anotherWay = async () => {
    console.log(await myPromise());
    console.log(await myPromise());
    console.log(await myPromise());
}
executePromise_anotherWay();

/**
 * Playing with Axios
 */
import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch(err){
            console.warn('Error in the API');
        }
    }
}

Api.getUserInfo('r33-code');
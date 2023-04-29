const promise = new Promise(function(resolve, reject){
    resolve('hey!');
});


const cows = 15;
const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`We have enough cows (${cows})`);
    }
    else{
        resolve(`There are not enough cows (${cows})`);
    }
});


countCows.then((result) => {
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(()=> console.log('Finally'))
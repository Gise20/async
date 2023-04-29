function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['yuki', 'milky', 'shiro', 'hanna', 'pia'])
console.log(it.next());
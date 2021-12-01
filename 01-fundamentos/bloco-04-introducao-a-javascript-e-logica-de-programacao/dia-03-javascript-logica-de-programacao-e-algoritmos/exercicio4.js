const n = 7;
let linha = '';

for(let i = 1; i <= n; i += 1){

    for(let j = i; j <= n; j += 1){
        linha += '  ';
    }
    
    for(let k = 1; k <= i; k += 1){
        linha += '* ';
    }

    if(i < n){
        linha += '\n';
    }
}

console.log(linha);
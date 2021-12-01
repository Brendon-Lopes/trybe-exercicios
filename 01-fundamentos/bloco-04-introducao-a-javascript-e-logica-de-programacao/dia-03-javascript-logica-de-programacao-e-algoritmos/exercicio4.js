const n = 5;
let linha = '';

for(let i = 1; i <= n; i += 1){
    for(let j = i; j <= n; j += 1){
        linha += '*';
    }
 
    linha += '\n';
}

console.log(linha);
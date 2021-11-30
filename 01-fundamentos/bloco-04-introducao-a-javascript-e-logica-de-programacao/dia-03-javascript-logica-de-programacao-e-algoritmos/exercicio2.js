const n = 5;
let linha = '';

for(let i = 1; i <=n; i += 1){
    if(n > 1){
        linha += '* ';
    }
}
for(let i2 = 1; i2 <=n; i2+=1){
    console.log(linha);
}
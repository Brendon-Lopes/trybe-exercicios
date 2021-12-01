const n = 5;
let linha = '';

if(n > 1){
    for(let i = 1; i <=n; i += 1){
        linha += '* ';
        
    }
    for(let i2 = 1; i2 <=n; i2+=1){
        console.log(linha);
    }
}